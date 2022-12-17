# Alexa Smart Home Node Red module
# WARNING: beta code, use at your own risk

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [The Config node](#the-config-node)
- [The Device node](#the-device-node)
- [Troubleshooting](#troubleshooting)
- [Credits](#credits)
- [Copyright and license](#copyright-and-license)

---
## Introduction

A collection of Node-RED nodes to control your smart home devices via Amazon Alexa or the Alexa App.

This module does NOT directly interface with devices made by Amazon.

---
## Prerequisites

1. A host reachable from Amazon Alexa with a fixed IP address or a domain name with a fixed IP address or a domain name with the dynamic DNS server (refers to this in instructions as YOUR_DOMAIN) e.g. your_domain.it.
2. A 'real' SSL certificate for the host e.g. from [Let’s Encrypt](https://letsencrypt.org).
3. A reverse proxy, like nginx, forwarding the Amazon request to the Node-RED server.
4. Forward TCP traffic coming in from the Internet to your reverse proxy server.
5. Node-RED installed using an updated NodeJS version.
6. An [Amazon Developer](https://developer.amazon.com) account (use the same username used in the Amazon Alexa App or Alexa devices).
7. An [Amazon Web Service (AWS)](https://console.aws.amazon.com) account (use the same username used in the Amazon Alexa App or Alexa devices).

---
## Setup Instructions

You are going to create a Smart Home Skill, a Lambda Function linked to the Node-RED server. See [Understand the Smart Home Skill API](
https://developer.amazon.com/en-US/docs/alexa/smarthome/understand-the-smart-home-skill-api.html) for mode info.


#### Create a Security Profile (Used also for the login with Amazon feature)

To create the Security Profile, use the following steps ([Register for Login with Amazon](https://developer.amazon.com/docs/login-with-amazon/register-web.html) for more info):

* Sign in to your [Login with Amazon Console](https://developer.amazon.com/loginwithamazon/console/site/lwa/overview.html)
* Click on the "Create a New Security Profile" button.
* Fill in the "Security Profile Name", e.g.: "Smart Home".
* Fill in the "Security Profile Description", e.g.: "Smart Home Node-RED".
* Fill in the "Consent Privacy Notice URL", e.g.: "https://YOUR_DOMAIN/alexa/oauth?policy".
* Fill in the "Consent Logo Image", if You wish.
* Click on the "Save" button.

##### Add your Website to your Security Profile

* Click on the "Gears wheels" and select "Web Settings".
* Click on the "Edit" button.
* Fill in the "Allowed Origins" field, e.g.: "https://YOUR_DOMAIN".
* Fill in the "Allowed Return URLs" field, e.g.: "https://YOUR_DOMAIN/alexa/oauth".
* Click on the "Save" button.
* Click on the "Show Secret" button, and copy the "Client ID" (1) and "Client Secret" (2). You will need it later in the Node-RED configuration.

#### Create a smart home skill

To create a smart home skill, use the following steps ([Steps to Build a Smart Home Skill](https://developer.amazon.com/en-US/docs/alexa/smarthome/steps-to-build-a-smart-home-skill.html) for more info):

* Sign in to your [Alexa developer account](https://developer.amazon.com/alexa/console/ask)
* Click on the "Create Skill" button.
* Enter the "Skill name", e.g. "Smart Home".
* Select the "Default language".
* Under "Choose a model to add to your skill" page, select "Smart Home", and then click the "Create skill" button.
* Under Payload Version, select "v3".
* Copy Your Skill ID (3) to the clipboard, clicking the "Copy to clipboard" button.

#### Create a Lambda Function

To create a lambda function for the skill, use the following steps ([Host a Custom Skill as an AWS Lambda Function](https://developer.amazon.com/en-US/docs/alexa/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html) and [Steps to Build a Smart Home Skill: Add a Lambda Function](https://developer.amazon.com/en-US/docs/alexa/smarthome/steps-to-build-a-smart-home-skill.html#add-a-lambda-function) for more info):

##### Create an IAM Role for Lambda

* Sign in to your [IAM console](https://console.aws.amazon.com/iam/home?#/home)
* From the upper-right menù, select the correct region for your region and skill language. For discovery of smart home devices to succeed, you must choose the region where the devices are located. Select only a region for the lambda server that supports the Alexa Smart Home trigger. See [see Deploy Your Lambda Function to Multiple Regions](https://developer.amazon.com/en-US/docs/alexa/smarthome/develop-smart-home-skills-in-multiple-languages.html#deploy) for more info.
* Choose "Roles" and click "Create role".
* Select "AWS service" under "Select type of trusted entity".
* Select "AWS Lambda" under "AWS Service Role".
* Click the "Next: Permissions" button.
* Type "basic" in the filter box and choose the "AWSLambdaBasicExecutionRole", check it, and click on the "Next: Tags" button.
* Click on the "Next: Review" button.
* Enter a name that identifies this role and click Create role, e.g.: "lambda_basic_execution".
* Click on the "Create Role" button.

##### Create a Lambda function and add code

* On the [AWS Console](https://console.aws.amazon.com/console/home)
* From the upper-right menù, select the correct region for your region and skill language. Select the same region selected previously for the "IAM Role". See [see Deploy Your Lambda Function to Multiple Regions](https://developer.amazon.com/en-US/docs/alexa/smarthome/develop-smart-home-skills-in-multiple-languages.html#deploy) for more info.
* Expand "Services", under "Compute", select "Lambda"
* Click on the "Create Function" button.
* Select "Author from scratch".
* Enter the "Function name, e.g.: "SmartHome".
* Select "Python 3.9" as "Runtime".
* Expand the "Change default execution role".
* Select "Use an existing role".
* Select the role created before, "lambda_basic_execution".
* Click the "Create Function" button.
* In the "Function overview", click the "Add trigger" button.
* Select the "Alexa Smart Home" trigger.
* In the "Configure triggers" section, add the Skill ID (3) from the developer console in the box specified. 
* Leave "Enable trigger" checked.
* Click the "Add" button.
* Select the "Code" tab.
* Double-Click on the "lambda_function.py".
* Paste the lambda function, completely replacing the existing code. Use the following [lambda function](https://gist.githubusercontent.com/matt2005/744b5ef548cc13d88d0569eea65f5e5b/raw/97b018bb12f574e780927c7b8dc85beae3fce6cc/lambda_function.py), modified for the Node-RED server.


```
"""
Copyright 2019 Jason Hu <awaregit at gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
"""
import os
import json
import logging
import urllib3

_debug = bool(os.environ.get('DEBUG'))

_logger = logging.getLogger('NODE-Red-SmartHome')
_logger.setLevel(logging.DEBUG if _debug else logging.INFO)


def lambda_handler(event, context):
    """Handle incoming Alexa directive."""

    _logger.debug('Event: %s', event)

    base_url = os.environ.get('BASE_URL')
    assert base_url is not None, 'Please set BASE_URL environment variable'

    directive = event.get('directive')
    assert directive is not None, 'Malformatted request - missing directive'
    assert directive.get('header', {}).get('payloadVersion') == '3', \
        'Only support payloadVersion == 3'

    scope = directive.get('endpoint', {}).get('scope')
    if scope is None:
        # token is in grantee for Linking directive 
        scope = directive.get('payload', {}).get('grantee')
    if scope is None:
        # token is in payload for Discovery directive 
        scope = directive.get('payload', {}).get('scope')
    assert scope is not None, 'Malformatted request - missing endpoint.scope'
    assert scope.get('type') == 'BearerToken', 'Only support BearerToken'

    token = scope.get('token')

    verify_ssl = not bool(os.environ.get('NOT_VERIFY_SSL'))

    http = urllib3.PoolManager(
        cert_reqs='CERT_REQUIRED' if verify_ssl else 'CERT_NONE',
        timeout=urllib3.Timeout(connect=2.0, read=10.0)
    )

    response = http.request(
        'POST',
        base_url,
        headers={
            'Authorization': 'Bearer {}'.format(token),
            'Content-Type': 'application/json',
        },
        body=json.dumps(event).encode('utf-8'),
    )
    if response.status >= 400:
        return {
            'event': {
                'payload': {
                    'type': 'INVALID_AUTHORIZATION_CREDENTIAL'
                    if response.status in (401, 403) else 'INTERNAL_ERROR',
                    'message': response.data.decode("utf-8"),
                }
            }
        }
    return json.loads(response.data.decode('utf-8'))

```

* Click on the "Deploy" button.
* Click on the "Configuration" tab.
* Select the "Environment variables" section.
* Click on the "Edit" button.
* Click on the "Add environment variable" button.
* Enter "BASE_URL" as the "Key".
* Enter "https://YOUR_DOMAIN/alexa/smarthome" as the Value.
* Click on the "Add environment variable" button.
* Enter "DEBUG" as the "Key".
* Enter "True" as the Value.
* Click on the "Add environment variable" button.
* Enter "NOT_VERIFY_SSL" as the "Key".
* Enter "True" as the Value.
* Click on the "Save" button.
* Click on the "Copy ARN" (4) button.

##### Configure the service endpoint

* Navigate back to your skill in the developer console.
* Under "Smart Home service endpoint", in the "Default endpoint" box, provide the ARN number (4) from the Lambda function you created and click Save.
* If your skill only supports one language/region, provide the same ARN for the default ARN and the selected regional ARN.
* Click on the "Save" button.
* Click on the "Setup Account Linking" button.
* Enter the "Your Web Authorization URI" field as "https://YOUR_DOMAIN/alexa/oauth".
* Enter the "Access Token URI" field as "https://YOUR_DOMAIN/alexa/token".
* Enter the "Your Client ID" field with a Client ID of your choice (5). You need it in the Node-RED configuration.
* Enter the "Your Secret" field with a password of your choice (6). You need it in the Node-RED configuration.
* Select "Credential in the request body" as "Your Authentication Scheme".
* Click the "Add scope" button, and fill it with "smart_home" (7).
* Enter 3600 for the "Default Access Token Expiration Time" field.
* Click the "Save" button.
* Copy the "Alexa Redirect URLs" (8), You will need them later.
* Click on the "Permission" left menù entry.
* Enable the "Send Alexa Events".
* Click the "Show" button.
* Copy the "Alexa Client Id" (9) and "Alexa Client Secret" (10) values, You need them in the Node-RED configuration.
* Open the "Security Profile" tab.
* Click the "Edit" button.
* Copy the three "Alexa Redirect URLs" (8) from the "Account linking" in the "Allowed Return URLs" field.
* Click the "Save" button.

#### Add an Alexa Device node on the Node-RED server

You need to add an Alexa Device node in Node-RED to Link your account with your Smart Home skill.

* Add an Alexa Device and configure an [Alexa Config node](#the-config-node) (You need exactly one config node). 
* Configure the [Alexa Device node](#the-device-node).

#### Configure a reverse proxy for forwarding the Amazon request to the Node-RED server

You need to configure your reverse proxy (nginx, Apache HTTP) to forwart the /alexa/oauth, /alexa/token and /alexa/smarthome to the Node-RED Alexa node. Update the /alexa path in according with "HTTP Path" configuration. 

See [Nginx reverse proxy configuration](#nginx-reverse-proxy-configuration) for an example of the nginx configuration.

#### Link your account with your Smart Home skill

* Add and configure a node in Your Node-RED server.
* Go to the [Alexa](https://alexa.amazon.com) site
* Click on Skills
* Click on Your Skill
* Click on Skill for developers
* Click on your SmartHome skill
* Click on the link to start the process

## The Config node

#### Fill the config node in the following way (You need exactly one config node):

* "Name": a name, e.g.: "Alexa".
* "Login with Amazon", checked.
* "Client id": the value copied in [(1)](#add-your-website-to-your-security-profile).
* "Secret": the value copied in [(2)](#add-your-website-to-your-security-profile).
* "Allowed emails": add the email used to login with Amazon.
* "Alexa skill client id": the value copied in [(9)](#configure-the-service-endpoint).
* "Alexa skill secret": the value copied in [(10)](#configure-the-service-endpoint).
* "Your client id": the value copied in [(5)](#configure-the-service-endpoint).
* "Your secret": the value copied in [(6)](#configure-the-service-endpoint).
* "Scope": the value copied in [(7)](#configure-the-service-endpoint)., e.g.: "smart_home".
* "Event endpoint": enter the endpoint for your region. See [Send Events to the Correct URL](https://developer.amazon.com/en-US/docs/alexa/smarthome/develop-smart-home-skills-in-multiple-languages.html#send-events-to-the-correct-url).
* "HTTP Port": You can leave it empty for using the same Node-RED port, or fill it with a port number. You need to redirect the "/alexa/" HTTPS traffic on this port.
* "HTTP Path": enter "alexa". If You change it, You need to adapt all the uri in the Amazon configuration.
* "Verbose log": enable it only for troubleshooting.

## The Device node

This is the "real" device node, configure the following info:

* "Alexa": the alexa config node.
* "Name": the device name.
* "Out topic": the topic used when a voice command is received.
* "Display categories": the display categories. See [Display categories](https://developer.amazon.com/en-US/docs/alexa/device-apis/alexa-discovery.html#display-categories) for more info.
* "Interfaces": the interfaces supported by the device. See [Interfaces](https://developer.amazon.com/en-US/docs/alexa/device-apis/list-of-interfaces.html) for more info.

Example flow:
        See the flow used for the tests [here](test/flows.json)

## Troubleshooting

This is a checklist for the config:

### Check the forward rule for /alexa/oauth

* Open your browser at "https://YOUR_DOMAIN/alexa/oauth"
* You should get the message "Wrong client id". If not, check your port forwarding the reverse proxy or reverse proxy config.


### Check the forward rule for /alexa/token
* Enable the debug log in the Node-Red Alexa node configuration.
* Open your browser at "https://YOUR_DOMAIN/alexa/token"
* You should get the message "https://YOUR_DOMAIN/alexa/token". If not, check your port forwarding to the reverse proxy  or reverse proxy config.

### Check the forward rule for /alexa/smarthome
* Enable the debug log in the Node-Red Alexa node configuration.
* Open your browser at "https://YOUR_DOMAIN/alexa/smarthome"
* You should get the following message:

```
Alexa SmartHome test page

Url: https://YOUR_DOMAIN/alexa/smarthome
Post: {"ok":"ok"}
```

If not, check your port forwarding to the reverse proxy or reverse proxy config.

### Check the lambda function

* Enable the debug log in the Node-Red Alexa node configuration.
* Open your browser at [AWS lambda](https://eu-west-1.console.aws.amazon.com/lambda/home)
* Click on the "SmartHome" function
* Click on the "Execute Test" tab
* Paste the following message on the editor:

```
{
  "directive": {
    "header": {
      "namespace": "Test",
      "name": "Test",
      "messageId": "<message id>",
      "payloadVersion": "3"
    },
    "payload": {
      "grant": {
        "type": "OAuth2.AuthorizationCode",
        "code": "Test"
      },
      "grantee": {
        "type": "BearerToken",
        "token": "Test"
      }
    }
  }
}
```
* Click on "Execute test" button
* Click on detail, You should see the following response:
```
{
  "ok": "ok"
}
```

### Check the Alexa account linking

* Enable the debug log in the Node-Red Alexa node configuration.
* Follow the - [Link your account with your Smart Home skill](#Link-your-account-with-your-Smart-Home-skill)
* Open the Node-RED gui, and check the debug window, You should see the following info:

```
node: Alexa
msg : string[15]
"oauth_get login"
```

```
node: Alexa
msg : string[17]
"oauth_get profile"
```

```
node: Alexa
msg : string[37]
"Username xxxxxxx@gmail.com authorized"
```

```
node: Alexa
msg : string[29]
"token_post authorization_code"
```

```
node: Alexa
msg : string[37]
"smarthome_post: oauth_get AcceptGrant"
```

### Nginx reverse proxy configuration

Following is a sample forwarding config for Nginx

```
        location ~ ^/alexa/(oauth|token|smarthome) {
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_pass http://192.168.0.3:3001;
        }
```


## Credits
Parts of this README and large parts of the code comes from Amazon guide.

## Copyright and license
Copyright 2021 Claudio Chimera under [the GNU General Public License version 3](LICENSE).
