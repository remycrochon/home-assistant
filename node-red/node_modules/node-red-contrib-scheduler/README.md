# Scheduler for Node-Red
A simple scheduler for node-red

I created this pair of files to provide for my own purposes to offer better timing facilities than the normal inject mode including dusk and dawn settings (handy for lighting), weeks and months. No doubt soon I'll add more.

Install this in your node-red nodes area - the only files you NEED are the .js, .html files and the icon directory with the image.

You can find out more about this at http://tech.scargill.net/node-red-scheduler/

This should be suitable for general use. It has 2 outputs, one of which triggers when there is a change and presents one of two messages, the other a simple 1 or 0 every minute.

In my case, this is used in a Raspberry Pi2 and in a folder called pi/node-red/nodes/node-red-nodes/time/scheduler

