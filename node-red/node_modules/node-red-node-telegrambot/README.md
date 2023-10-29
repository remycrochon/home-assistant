# Telegram client nodes for Node-RED
[![Platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
![License](https://img.shields.io/github/license/windkh/node-red-node-telegrambot.svg)
[![Downloads](https://img.shields.io/npm/dm/node-red-node-telegrambot.svg)](https://www.npmjs.com/package/node-red-node-telegrambot)
[![Total Downloads](https://img.shields.io/npm/dt/node-red-node-telegrambot.svg)](https://www.npmjs.com/package/node-red-node-telegrambot)
[![NPM](https://img.shields.io/npm/v/node-red-node-telegrambot?logo=npm)](https://www.npmjs.org/package/node-red-node-telegrambot)
[![Known Vulnerabilities](https://snyk.io/test/npm/node-red-node-telegrambot/badge.svg)](https://snyk.io/test/npm/node-red-node-telegrambot)
[![Telegram](https://img.shields.io/badge/Join-Telegram%20Chat-blue.svg?logo=telegram)](https://t.me/nodered_telegrambot)
[![Package Quality](https://packagequality.com/shield/node-red-node-telegrambot.svg)](https://packagequality.com/#?package=node-red-node-telegrambot)
![Build](https://img.shields.io/github/actions/workflow/status/windkh/node-red-node-telegrambot/node.js.yml)
[![Open Issues](https://img.shields.io/github/issues-raw/windkh/node-red-node-telegrambot.svg)](https://github.com/windkh/node-red-node-telegrambot/issues)
[![Closed Issues](https://img.shields.io/github/issues-closed-raw/windkh/node-red-node-telegrambot.svg)](https://github.com/windkh/node-red-node-telegrambot/issues?q=is%3Aissue+is%3Aclosed)
...


This package contains a node which act as a Telegram Client. It is based on gramjs which implements the mtproto mobile protocol. (see https://core.telegram.org/mtproto). Unlike node-red-contrib-telegrambot it does not support the telegram bot api. The package can be used to create so-called userbots or selfbots which to automate things under your own user-name. However you should be aware of the fact, that if you cause flooding and other havoc telegram will quickly ban your account either for 24h or even forever. It is recommended to use a test account while developing.


# Thanks for your donation
If you want to support this free project. Any help is welcome. You can donate by clicking one of the following links:
<a target="blank" href="https://blockchain.com/btc/payment_request?address=1PBi7BoZ1mBLQx4ePbwh1MVoK2RaoiDsp5"><img src="https://img.shields.io/badge/Donate-Bitcoin-green.svg"/></a>
<a target="blank" href="https://www.paypal.me/windkh"><img src="https://img.shields.io/badge/Donate-PayPal-blue.svg"/></a>

<a href="https://www.buymeacoffee.com/windka" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>


# Credits
 - 

 
# Installation
[![NPM](https://nodei.co/npm/node-red-node-telegrambot.png?downloads=true)](https://nodei.co/npm/node-red-node-telegrambot/)

You can install the nodes using node-red's "Manage palette" in the side bar.

Or run the following command in the root directory of your Node-RED installation

    npm install node-red-node-telegrambot --save

Note that the minimum node-red version 1.3.7 and minimum nodejs version is 12.x. 


# Dependencies
The nodes are tested with `Node.js v18.12.1` and `Node-RED v3.0.2`.
 - [gramjs home](https://gram.js.org/)
 - [gramjs github](https://github.com/gram-js/gramjs)

# Changelog
Changes can be followed [here](/CHANGELOG.md).


# Usage
## Basics
### Authentication
The *Telegram client receiver* node receives messages from like a telegram client. You need to login with a phone-number and an API ID and API Hash in order to be able to receive message under your own user name.
In addition to that you can also login using a bot token retrieved from @botfather.

You can create an API ID and Hash when you login to your telegram account here https://my.telegram.org/auth
Then go to 'API Development Tools' and create your API ID and API Hash. Both are required when configuring your nodes. The nodes login only once to create a so-called session string. This string can be created from within
the config node or as an alternative you can also create it online here https://tgsnake.js.org/login
This session string is used instead of interactive login (where you need to enter a phone-code and your password if set).

### Receiver Node
The *Telegram client receiver* node receives message which are sent to your account or bot. Just add a debug node to the
output and investigate the objects in `msg.payload`.

### Sender Node
The *Telegram client sender* node is able to call nearly all functions provides by gramjs.
For a full list of methods please visit https://gram.js.org/ under TL.

### Examples
#### Api.messages.SendMessage 
To call the [SendMessage](https://gram.js.org/tl/messages/SendMessage) function, you must do the following:
Create a function node and enter 'messages' for the api property and 'SendMessage' for the func property.
The arguments described in the api must be added to args. SendMessage contains a field randomId which must be 
set by the user to a random number to prevent message looping in the telegram server. Peer must be set to the
name of the user you want to send the message to.

 ```javascript
let randomId = BigInt(Math.floor(Math.random() * 1e15));
let username = msg.payload;
msg.payload = {
    api: 'messages',
    func: 'SendMessage',
    args: {
        peer: "to username",
        message: "Test1",
        randomId: randomId,
        noWebpage: true,
        noforwards: true,
        scheduleDate: 0,
        // sendAs: "from username",
    }
}
return msg;
```

[**send message flow**](examples/Api.messages.SendMessage.json)  


#### Api.account.CheckUsername
To call the [CheckUsername](https://gram.js.org/tl/account/CheckUsername) function, you must do the following:
Create a function node and enter 'account' for the api property and 'CheckUsername' for the func property.
The arguments described in the api must be added to args. In this case it is only the username property.

 ```javascript
let username = msg.payload;
msg.payload = {
    api: "account",
    func: "CheckUsername",
    args: {
        username: 'usernameToCheckHere'
    }
}
return msg;
```

[**check username flow**](examples/Api.account.CheckUsername.json)  

