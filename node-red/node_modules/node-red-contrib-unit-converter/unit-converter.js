/**
 * Copyright 2018 Bart Butenaers
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
 module.exports = function(RED) {
    var settings = RED.settings;
    var convert = require('convert-units');

    function UnitConverterNode(config) {
        RED.nodes.createNode(this,config);
        this.inputUnit           = config.inputUnit;
        this.outputUnit          = config.outputUnit;
        this.inputField          = config.inputField;
        this.outputField         = config.outputField;
        this.inputFieldType      = config.inputFieldType || "msg";
        this.outputFieldType     = config.outputFieldType || "msg";
        this.outputFieldDecimals = config.outputFieldDecimals;
        this.roundOutputField    = config.roundOutputField;
        this.statusType          = config.statusType || "none";
        this.name                = config.name;

        var node = this;
        
        node.status({});

        node.on("input", function(msg) {
            try {
                // Get the input value from the specified input location
                var inputValue = RED.util.evaluateNodeProperty(node.inputField, node.inputFieldType, this, msg);
            } 
            catch(err) {
                node.error("Error getting value from msg." + node.inputField + " : " + err.message);
                return;
            }
            
            // Make sure we are dealing with a number, before feeding it to the library.
            // Useful advice from Dean Cording (https://groups.google.com/d/msg/node-red/8scOe724Zuc/YbWMwduIAgAJ).
            var convertedInput = parseFloat(inputValue);
            if (isNaN(convertedInput)){
                node.error("The input value (" + inputValue + ") is not a number");
                return null;
            }         
            
            var outputValue = convert(convertedInput).from(node.inputUnit).to(node.outputUnit);
         
            // Limit decimal places on converted value
            if (node.roundOutputField && node.outputFieldDecimals && !isNaN(parseInt(node.outputFieldDecimals))) {
                outputValue = parseFloat(outputValue.toFixed(parseInt(node.outputFieldDecimals)));
            }
            
            try {
                // Set the converted value in the specified output location
                if (node.outputFieldType === 'msg') {
                    RED.util.setMessageProperty(msg, node.outputField, outputValue);
                    
                    // Only send an output message, when the output type is 'msg'
                    node.send(msg);
                }/* else if (node.outputFieldType === 'flow') {
                    node.context().flow.set(node.outputField, outputValue);
                } else if (node.outputFieldType === 'global') {
                    node.context().global.set(node.outputField, outputValue);
                }*/
            } catch(err) {
                node.error("Error setting value in msg." + node.outputField + " : " + err.message);
                return;
            }
            
            switch(node.statusType) {
                case "units":
                    node.status({fill:"blue", shape:"dot", text:node.inputUnit + "=>" + node.outputUnit});
                    break;
                case "input":
                    node.status({fill:"blue", shape:"dot", text:convertedInput + node.inputUnit});
                    break;
                case "output":
                    node.status({fill:"blue", shape:"dot", text:outputValue + node.outputUnit});
                    break;
                case "inout":
                    node.status({fill:"blue", shape:"dot", text:convertedInput + node.inputUnit + "=>" + outputValue + node.outputUnit});
                    break;
                default:
                    // No need to update the node status (in case of "none")
            }
        });
        
        node.on("close",function() { 
            node.status({});
        });
    }

    RED.nodes.registerType("unit-converter", UnitConverterNode);
    
    // Make all the available types accessible for the node's config screen
    RED.httpAdmin.get('/unit-converter/:cmd', RED.auth.needsPermission('unitconverter.read'), function(req, res){
        var node = RED.nodes.getNode(req.params.id);
        
        if (req.params.cmd === "categories") {
            // Return a list of all available categories (mass, length, ...)
            res.json(convert().measures());
        }
        else {
            // Return a list of all available units for the specified category.
            // Each unit is an object on its own:
            //     [{
            //         abbr: 'kg',
            //         measure: 'mass',
            //         system: 'metric',
            //         singular: 'Kilogram',
            //         plural: 'Kilograms'
            //      }, ...]  
            res.json(convert().list(req.params.cmd));
        }
    });

}
