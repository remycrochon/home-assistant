/**
 * NodeRED Alexa SmartHome
 * Copyright (C) 2021 Claudio Chimera.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **/

module.exports = function (RED) {
    "use strict";

    /******************************************************************************************************************
     *
     *
     */
    class AlexaManagementNode {
        constructor(config) {
            RED.nodes.createNode(this, config);
            const node = this;
            node.config = config;

            if (!node.config.alexa) {
                node.error(RED._("alexa-device.error.missing-config"));
                node.status({ fill: "red", shape: "dot", text: RED._("alexa-device.error.missing-config") });
                return;
            }

            node.alexa = RED.nodes.getNode(node.config.alexa);
            if (typeof node.alexa.register !== 'function') {
                node.error(RED._("alexa-device.error.missing-bridge"));
                node.status({ fill: "red", shape: "dot", text: RED._("alexa-device.error.missing-bridge") });
                return;
            }

            if (node.isVerbose()) node._debug("config " + JSON.stringify(config.name));

            node.alexa.registerManagement(node);

            node.on('input', function (msg) {
                node.onInput(msg);
            });

            node.on('close', function (removed, done) {
                node.onClose(removed, done);
            });

            if (node.isVerbose()) node._debug("Node " + node.config.name + " configured");
        }


        //
        //
        //
        //
        isVerbose() {
            return this.config.verbose || this.alexa.verbose || false;
        }


        //
        //
        //
        //
        _debug(msg) {
            console.log((new Date()).toLocaleTimeString() + ' - ' + '[debug] [alexa-management:' + this.config.name + '] ' + msg); // TODO REMOVE
            this.debug('AlexaManagementNode:' + msg);
        }


        //
        //
        //
        //
        onClose(removed, done) {
            const node = this;
            if (node.isVerbose()) node._debug("(on-close) removed " + removed);

            node.alexa.deregisterManagement(node);

            if (typeof done === 'function') {
                done();
            }
        }


        //
        //
        //
        //
        onInput(msg) {
            const node = this;
            if (node.isVerbose()) node._debug("onInput " + JSON.stringify(msg));
            const topic_str = String(msg.topic || '');
            const topicArr = topic_str.split('/');
            const topic = topicArr[topicArr.length - 1].toUpperCase();
            if (node.isVerbose()) node._debug("onInput " + topic);

            if (topic === 'REPORTSTATE') {
                node.alexa.sendAllChangeReports();
            } else if (topic === 'GETSTATE') {
                let onlyPersistent = ['filtered_by_id', 'filtered_by_name'].includes(node.config.set_state_type);
                let useNames = ['all_by_name', 'filtered_by_name'].includes(node.config.set_state_type);
                let deviceIds = undefined;
                if (typeof msg.payload === 'boolean') {
                    onlyPersistent = msg.payload;
                } else if (typeof msg.payload === 'string') {
                    deviceIds = [msg.payload];
                } else if (Array.isArray(msg.payload)) {
                    deviceIds = msg.payload;
                } else if (typeof msg.payload === 'object') {
                    if (typeof msg.payload.onlyPersistent === 'boolean') {
                        onlyPersistent = msg.payload.onlyPersistent;
                    }
                    if (typeof msg.payload.useNames === 'boolean') {
                        useNames = msg.payload.useNames;
                    }
                    if (typeof msg.payload.devices === 'string') {
                        deviceIds = [msg.payload.devices];
                    } else if (Array.isArray(msg.payload.devices)) {
                        deviceIds = msg.payload.devices;
                    }
                }
                let states = node.alexa.getStates(deviceIds, onlyPersistent, useNames);
                if (states) {
                    node.send({
                        topic: topic,
                        payload: states
                    });
                }
            } else if (topic === 'SETSTATE') {
                if (typeof msg.payload === 'object') {
                    this.alexa.setStates(msg.payload);
                }
            } else if (topic === 'GETNAMES') {
                let names = node.alexa.get_all_names();
                node.send({
                    topic: "getNames",
                    payload: names
                })
            } else if (topic === 'RESTARTSERVER') {
                this.alexa.restartServer();
            }
        }


        //
        //
        //
        //
        sendSetState() {
            const node = this;
            if (node.config.set_state_type === 'no_nodes') return;
            let onlyPersistent = ['filtered_by_id', 'filtered_by_name'].includes(node.config.set_state_type);
            let useNames = ['all_by_name', 'filtered_by_name'].includes(node.config.set_state_type);
            let states = node.alexa.getStates(undefined, onlyPersistent, useNames);
            if (states) {
                node.send({
                    topic: 'set_state',
                    payload: states
                });
            }
        }
    }

    //
    //
    //
    //
    RED.nodes.registerType("alexa-management", AlexaManagementNode);
}
