module.exports = function(RED) {
    function TagMemoryNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
		var memory_payload = null;
		var memory_topic = "";
		
		var intervalTimer = setInterval(function()
		{
			if(!config.extclock)
			{
				if(config.outtopic !== "")
				{
					memory_topic = config.outtopic;
				}
				if(memory_payload !== undefined)
				{
					var newMsg = { payload: memory_payload, topic: memory_topic };
					node.send(newMsg);
				}
			}
				
		}, config.filter);
        node.on('input', function(msg) {
			if(config.extclock)
			{
				if(config.triggertopic !== "" && msg.topic == config.triggertopic)
				{
					if(config.outtopic !== "")
					{
						memory_topic = config.outtopic;
					}
					if(memory_payload !== undefined)
					{
						var newMsg = { payload: memory_payload, topic: memory_topic };
						node.send(newMsg);
					}
				}
				else
				{
					memory_topic = msg.topic;
					memory_payload = msg.payload;					
				}
			}
			else
			{
				memory_topic = msg.topic;
				memory_payload = msg.payload;
			}
        });
    }
		
    RED.nodes.registerType("tag-memory",TagMemoryNode);
}
