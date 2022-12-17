const superagent = require('superagent');
const fs = require('fs');

console.log("Starting ");

const cid = 'amzn1.application-oa2-client.d359ed2095be4231bab9ce6eaf802129';
const sec = '20ff310bf0f59508c7edc38bc349c55f1a17f0b6732ba3ab1a7daeb2a51fbff5';
const uri = 'https://smart-home.chimera.dynu.com/alexa/oauth';

fs.readFile('alexa-token.json', 'utf8', function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    let token = JSON.parse(data);
    superagent
      .post('https://api.amazon.com/auth/o2/token')
      .set("Authorization", "Basic " + Buffer.from(cid + ":" + sec).toString("base64"))
      // .set("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8")
      .type('form')
      .send({
        grant_type: 'refresh_token',
        refresh_token: token.lwa_refresh_token,
        redirect_uri: uri
      })
      .then(res => {
        console.log("res " + JSON.stringify(res));
      })
      .catch(err => {
        console.log("err " + JSON.stringify(err));
      });
  }
});

