/**
 * NodeRED Alexa SmartHome
 * Copyright 2023 Claudio Chimera <Claudio.Chimera at gmail.com>.
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


const https = require('https')
const base_url = process.env.BASE_URL
const not_verify_ssl = 'True' == process.env.NOT_VERIFY_SSL 
const d = 'True' == process.env.DEBUG

const { hostname = "localhost", pathname = "/", port, protocol } = new URL(base_url);
const s_port = port ? parseInt(port) : protocol === 'https:' ? 443 : 80

if (d) {
  console.log('url: ' + base_url)
  console.log('hostname: ' + hostname)
  console.log('pathname: ' + pathname)
  console.log('port: ' + s_port)
  console.log('protocol: ' + protocol)
  console.log('not_verify_ssl: ' + not_verify_ssl)
}

const options = {
  hostname: hostname,
  path: pathname,
  method: 'POST',
  port: s_port,
  headers: {
    'Content-Type': 'application/json',
  },
};

function getError(err) {
  return {
    'event': {
      'payload': {
        'type': 'INTERNAL_ERROR',
        'message': err,
      }
    }
  };
}

exports.handler = async (event) => {
  if (d) {
    console.log("event: " + JSON.stringify(event))
  }

  if (not_verify_ssl) {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
  }

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let rawData = '';

      res.on('data', chunk => {
        rawData += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          if (d) console.log("rawData: " + rawData)
          resolve(getError(rawData));
        }
      });
    });

    req.on('error', err => {
      if (d) console.log("reject: " + err)
      resolve(getError(err));
    });

    req.write(JSON.stringify(event));
    req.end();
  });
};
