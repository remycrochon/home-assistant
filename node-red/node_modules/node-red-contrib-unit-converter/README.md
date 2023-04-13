# node-red-contrib-unit-converter
A Node Red node for unit conversions between some common units.

## Install
Run the following npm command in your Node-RED user directory (typically ~/.node-red):
```
npm install node-red-contrib-unit-converter
```

## Support my Node-RED developments

Please buy my wife a coffee to keep her happy, while I am busy developing Node-RED stuff for you ...

<a href="https://www.buymeacoffee.com/bartbutenaers" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy my wife a coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>

## Usage
This node will convert the `msg.input` value (specified as ***input unit*** X) from the input message, to another `msg.outnput` value (specified as ***output unit*** Y) in the output message.

For example the value in the input messages is expressed as inches, which have to be converted in the output message as centimeters :

![Unit conversion](https://raw.githubusercontent.com/bartbutenaers/node-red-contrib-unit-converter/master/images/unit_conversion.png)

```
[{"id":"f40e9759.cf9f68","type":"unit-converter","z":"47b91ceb.38a754","category":"length","inputUnit":"in","outputUnit":"cm","inputField":"input","outputField":"output","name":"","x":871.5001640319824,"y":876.3333530426025,"wires":[["947aacdd.41bd8"]]},{"id":"94cfee26.d1a59","type":"inject","z":"47b91ceb.38a754","name":"","topic":"","payload":"5","payloadType":"num","repeat":"","crontab":"","once":false,"x":518.5002746582031,"y":876.6667184829712,"wires":[["5b45dc85.f76e84"]]},{"id":"947aacdd.41bd8","type":"debug","z":"47b91ceb.38a754","name":"","active":true,"console":"false","complete":"true","x":1044.5000801086426,"y":876.0000019073486,"wires":[]},{"id":"5b45dc85.f76e84","type":"change","z":"47b91ceb.38a754","name":"","rules":[{"t":"set","p":"input","pt":"msg","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":681.5001602172852,"y":876.333384513855,"wires":[["f40e9759.cf9f68"]]}]
```
This node is based on the [convert-units](https://www.npmjs.com/package/convert-units) library, where you can find a list of all available units.

## Node configuration

### Category
A number of unit categories can be selected:
+ Length
+ Mass
+ Temperature
+ Volume
+ ...

### Input unit
The source unit of the `msg.input` message value.

### Output unit
The destination unit of the `msg.output` message value, i.e. the value to which the value will be converted.

### Input field
The field name in the input message, that will contain the value that needs to be converted.  By default the input value will be located inside the `msg.payload` field.

### Output field
The field name in the output message, that will contain the converted value.  By default the output value will be located inside the `msg.payload` field.

### Round result to ... decimals
When selected, the output number(s) will be rounded to the specified number of decimals.

### Status
Specify which data needs to be displayed in the node status.  The different options are being visualized in the next screenshot:

![image](https://user-images.githubusercontent.com/14224149/188721042-a8680ed4-5c66-4e10-b770-5ca90c78fa10.png)
