module.exports = function(RED) {
    function HysteresisNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        node.status({fill:"grey", shape:"dot", text:"unknown"});

        this.on('input', function(msg) {
            if (msg.hasOwnProperty('payload')) {
                var this_value = Number(msg.payload);
                if (! isNaN(this_value)) {
                    var last_value = Number(node.last_value);
                    var last_edge = node.last_edge;
                    if (! isNaN(last_value)) {
                        if (this_value > last_value &&
                            this_value > config.rising_threshold &&
                            last_value <= config.rising_threshold &&
                            last_edge != 'rising') {
                                status(msg, true);
                        }
                        if (this_value < last_value &&
                            this_value < config.falling_threshold &&
                            last_value >= config.falling_threshold &&
                            last_edge != 'falling') {
                                status(msg, false);
                        }
                    } else { // first value
                        if ((config.initial_edge == 'any' || config.initial_edge == 'rising') && this_value > config.rising_threshold) {
                            status(msg, true);
                        } else if ((config.initial_edge == 'any' || config.initial_edge == 'falling') && this_value < config.falling_threshold) {
                            status(msg, false);
                        }
                    }
                    node.last_value = this_value;
                }
            }
        });

        function status(msg, rising) {
            var edge = rising ? 'rising' : 'falling';

            msg.edge = edge;
            node.send(msg);

            node.last_edge = edge;
            node.status({fill:rising ? "green" : "yellow", shape:"dot", text:edge});
        }
    }
    RED.nodes.registerType('hysteresis', HysteresisNode);
}
