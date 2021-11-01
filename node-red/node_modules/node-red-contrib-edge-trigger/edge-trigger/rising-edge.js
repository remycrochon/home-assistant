module.exports = function(RED) {
    function RisingEdgeNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function(msg) {
            if (msg.hasOwnProperty('payload')) {
                var this_value = Number(msg.payload);
                if (! isNaN(this_value)) {
                    var last_value = Number(node.last_value);
                    if (! isNaN(last_value)) {
                        if (this_value > last_value &&
                            this_value > config.threshold &&
                            last_value <= config.threshold) {
                                node.send(msg);
                        }
                    }
                    node.last_value = this_value;
                }
            }
        });
    }
    RED.nodes.registerType('rising-edge', RisingEdgeNode);
}
