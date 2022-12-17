const request = require('supertest');
var helper = require("node-red-node-test-helper");
var deviceNode = require("../alexa/alexa-device.js");
var adapterNode = require("../alexa/alexa-adapter.js");
var stoppable = require('stoppable');
var http = require("http");
var express = require("express");
var httpProxy = require('http-proxy');

// https://developer.amazon.com/en-US/docs/alexa/account-linking/configure-authorization-code-grant.html

helper.init(require.resolve('node-red'));

describe('Alexa Device Node', function () {
    var testApp;
    var testServer;
    var testPort = 10234;
    var testProxyServer;
    var testProxyPort = 10444;

    function getTestURL(url) {
        return "http://localhost:"+testPort+url;
    }

    function startServer(done) {
        testPort += 1;
        testServer = stoppable(http.createServer(testApp));
        testServer.listen(testPort,function(err) {
            testProxyPort += 1;
            testProxyServer = stoppable(httpProxy.createProxyServer({target:'http://localhost:' + testPort}));
            testProxyServer.on('proxyReq', function(proxyReq, req, res, options) {
                proxyReq.setHeader('x-testproxy-header', 'foobar');
            });
            testProxyServer.on('proxyRes', function (proxyRes, req, res, options) {
                if (req.url == getTestURL('/proxyAuthenticate')){
                    var user = auth.parse(req.headers['proxy-authorization']);
                    if (!(user.name == "foouser" && user.pass == "barpassword")){
                        proxyRes.headers['proxy-authenticate'] = 'BASIC realm="test"';
                        proxyRes.statusCode = 407;
                    }
                }
            });
            testProxyServer.listen(testProxyPort);
            done(err);
        });
    }

    beforeEach(function(done) {
        testApp = express();

        testApp.get('/text', function(req, res){ res.send('hello'); });

        startServer(function(err) {
            if (err) {
                done(err);
            }
            helper.startServer(done);
        });
    });

    afterEach(function(done) {
        testProxyServer.stop(() => {
            helper.unload().then(function () {
                  helper.stopServer(done);
            });
        });
    });
/*
  beforeEach(function (done) {
    helper.startServer(done);
  });

  afterEach(function (done) {
    helper.unload().then(function () {
      helper.stopServer(done);
    });
  });
*/
  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "alexa-device", name: "test name" }];
    helper.load([adapterNode, deviceNode], flow, function () {
      var n1 = helper.getNode("n1");
      request
      .post('http://localhost:8080/auth/o2/token')
      .type("form")
      .field('grant_type', 'authorization_code')
      .field('code', "access_token")
      .field('client_id', "me.credentials.client_id")
      .field('client_secret', "me.credentials.secret")
      .then(res => {
        console.log("res " + res)
      }) 
      .catch(err => {
        console.log("err " + err)
      });
      try {
        n1.should.have.property('name', 'test name');
        done();
      } catch (err) {
        done(err);
      }
    });
  });

  it('should make payload lower case', function (done) { // TODO
    this.timeout(10000);
    var flow = [
      { id: "c1", type: "alexa-adapter", name: "Configurazione", http_path: "alexa" },
      { id: "n2", type: "helper" },
      { id: "n1", type: "alexa-device", alexa: "c1", name: "Nome", wires: [["n2"]] },
    ];
    helper.load([adapterNode, deviceNode], flow, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      try {
        n1.should.have.property('name', 'Nome');
        n1.should.have.property('alexa');
        (Object.keys(n1.alexa.devices).length === 1).should.be.True();
        (n1.alexa.devices['n1'] === n1).should.be.True();
        n2.on("input", function (msg) {
          msg.should.have.property('payload', 'uppercase');
          done();
        });
        n1.receive({ payload: "UpperCase" });
      } catch (err) {
        done(err);
      }
    });
  });

  it('should make reponde 500 to /alexa/oauth get', function (done) {
    var flow = [
      { id: "n1", type: "alexa-device", alexa: "c1", name: "", wires: [["n2"]] },
      { id: "n2", type: "helper" },
      { id: "c1", type: "alexa-adapter", name: "Nome", http_path: "alexa", port: "2701" }
    ];
    var credentials = { c1: { 'username': 'user', 'password': 'pwd', client_id: "client_id", secret: "secret" } };
    process.env.http_proxy = "http://localhost:" + testProxyPort;
    helper.load([adapterNode, deviceNode], flow, credentials, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      try {
        request(n1.alexa.server)
          .get('/alexa/oauth')
          .expect(500)
          .end(function (err, res) {
            if (err) return done(err);
            request(n1.alexa.server)
              .get(getTestURL('/text'))
              .expect(200)
              .end(function (err, res) {
                if (err) return done(err);
                return done();
              });
            // return done();
          });
      } catch (err) {
        done(err);
      }
    });
  });

  it('should make reponde 200 to /alexa/oauth get', function (done) {
    var flow = [
      { id: "n1", type: "alexa-device", alexa: "c1", name: "", wires: [["n2"]] },
      { id: "n2", type: "helper" },
      { id: "c1", type: "alexa-adapter", name: "Nome", http_path: "alexa", port: "2701" }
    ];
    var credentials = { c1: { 'username': 'user', 'password': 'pwd', client_id: "client_id", secret: "secret" } };
    helper.load([adapterNode, deviceNode], flow, credentials, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      try {
        request(n1.alexa.server)
          .get('/alexa/oauth?client_id=https://layla.amazon.com/&redirect_uri=https%3A%2F%2Flayla.amazon.com%2Fapi%2Fskill%2Flink%2FM2Z5GRSUWODFOI&state=A2SAAEAEH0zC0r8Ib2hTGZ-YgJ5GjwB4Nr2iMhlBkOoO3_AoljHoQEADFahUGlf1PEgpGxI7KGlJrNEj0INnxqQDi0tQfUMvpxIcgwiMA00-OybDWbgWJUYxWiEVsU4d9HY4zxcKZi0CJ0UvCyeFj45YFYBXCeTWz2FdLOFeyHzt3QKipp-xTXlaERg1fm6jWGZkluO8S0D47KL91-g5cd2QJ-mr_LPQqyCP83-kDXvc5acJ6o4iiyaOm2vf5prLDz84SnURGklE0vVN7yQsxai4g98csS1s865bcpiKuh-Faf8fSps2fIMhDHfYH9j5Lbm8eE_UapUPeqOdhSN03tcEISbXw0lDmFluXbabPo5g68jNl7iS6xbEgV6Ps416Ka7PZlguH53ZuvEGY2kH7l07CXVx1tczPDgv6UPC2C25Q-JhfxMumhXk0o00mgByhhUHUBoCgFvLVbYJ7wza3l7QfpcLJnhj9dnietPk8nlK3X4qJ1qmH4-zsirA8t6x1RKvmVPxwPcIxtyrxG3nIUOXPu2-d04ipeW9fAiOvVl8ueVCT_VtB9Hg4CWKqbC-aL39_G0hlRSXnPjtVBoe830p2Yi1EynPFwVzpErzcXEWTTxgnMfW-RDBc_sT9IKThX4QA211VMGY2Do0dDBXcs3W6c5AJrkAg&response_type=code&scope=smart_home&error=invalid_user')
          .expect(200)
          .end(function (err, res) {
            if (err) return done(err);
            return done();
          });
      } catch (err) {
        done(err);
      }
    });
  });

  it('should make reponde 302 to /alexa/oauth post', function (done) {
    this.timeout(10000);
    var flow = [
      { id: "n1", type: "alexa-device", alexa: "c1", name: "", wires: [["n2"]] },
      { id: "n2", type: "helper" },
      { id: "c1", type: "alexa-adapter", name: "Nome", http_path: "alexa", port: "2701" }
    ];
    var credentials = { c1: { 'username': 'user', 'password': 'pwd', client_id: "client_id", secret: "secret" } };
    helper.load([adapterNode, deviceNode], flow, credentials, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      try {
        var redirectUrl = "https://layla.amazon.com/";
        var state = 'Some-state';
        request(n1.alexa.server)
          .post('/alexa/oauth')
          /*.send({
            "client_id": 'client_id',
            "redirect_uri": 'https://layla.amazon.com/',
            "state": 'THESTATE',
            "scope": 'smart_home',
            "response_type": 'code',
          })*/
          .send("username=user")
          .send("password=pwd")
          .send("client_id=client_id")
          .send("redirect_uri=" + redirectUrl)
          .send("state=" + state)
          .send("scope=smart_home")
          .send("response_type=code")
          .set('Accept', 'application/json')
          .expect(302)
          .end(function (err, res) {
            if (err) return done(err);
            Object.keys(res.header).forEach(function (key) {
              console.log("-> " + key + " = " + res.header[key]);
            });
            const header_location = res.header['location'];
            const isLocationPresent = header_location !== undefined;
            isLocationPresent.should.be.True();
            console.log("isLocationPresent " + isLocationPresent);
            console.log("Location " + header_location);
            const isRedirectStartWith = header_location.startsWith(redirectUrl);
            console.log("isRedirectStartWith " + isRedirectStartWith);
            isRedirectStartWith.should.be.True();
            const hasRedirectState = header_location.indexOf("state=" + state) > 0;
            hasRedirectState.should.be.True();
            const codeIndex = header_location.indexOf("code=");
            (codeIndex > 0).should.be.True();
            (codeIndex + 5 < header_location.length).should.be.True();
            return done();
          });
      } catch (err) {
        done(err);
      }
    });
  });

  it('should make reponde 200 to /alexa/token post', function (done) {
    this.timeout(10000);
    var flow = [
      { id: "n1", type: "alexa-device", alexa: "c1", name: "", wires: [["n2"]] },
      { id: "n2", type: "helper" },
      { id: "c1", type: "alexa-adapter", name: "Nome", http_path: "alexa", port: "2701" }
    ];
    const client_id = "client_id";
    const secret = "secret";
    const password = "password";
    const username = "username";
    const redirect_uri = "https://layla.amazon.com/";
    var credentials = { c1: { 'username': username, 'password': password, client_id: client_id, secret: secret } };
    helper.load([adapterNode, deviceNode], flow, credentials, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      try {
        var state = 'Some-state';
        request(n1.alexa.server)
          .post('/alexa/oauth')
          /*.send({
            "client_id": 'client_id',
            "redirect_uri": 'https://layla.amazon.com/',
            "state": 'THESTATE',
            "scope": 'smart_home',
            "response_type": 'code',
          })*/
          .send("username=" + username)
          .send("password=" + password)
          .send("client_id=" + client_id)
          .send("redirect_uri=" + redirect_uri)
          .send("state=" + state)
          .send("scope=smart_home")
          .send("response_type=code")
          .set('Accept', 'application/json')
          .expect(302)
          .end(function (err, res) {
            if (err) return done(err);
            Object.keys(res.header).forEach(function (key) {
              console.log("-> " + key + " = " + res.header[key]);
            });
            const header_location = res.header['location'];
            console.log("header_location " + header_location);
            const isLocationPresent = header_location !== undefined;
            isLocationPresent.should.be.True();
            console.log("isLocationPresent " + isLocationPresent);
            console.log("Location " + header_location);
            const isRedirectStartWith = header_location.startsWith(redirect_uri);
            console.log("isRedirectStartWith " + isRedirectStartWith);
            isRedirectStartWith.should.be.True();
            const hasRedirectState = header_location.indexOf("state=" + state) > 0;
            hasRedirectState.should.be.True();
            const codeIndex = header_location.indexOf("code=");
            (codeIndex > 0).should.be.True();
            (codeIndex + 5 < header_location.length).should.be.True();
            var lastCodeIndex = header_location.indexOf("&", codeIndex);
            if (lastCodeIndex < 0) {
              lastCodeIndex = header_location.length;
            }
            const code = header_location.substring(codeIndex + 5, lastCodeIndex);
            console.log("code " + code);
            request(n1.alexa.server)
              .post('/alexa/token')
              .send("grant_type=authorization_code")
              .send("code=" + code)
              .send("client_id=" + client_id)
              .send("client_secret=" + secret)
              .expect(200)
              .end(function (err, res) {
                if (err) return done(err);
                Object.keys(res.header).forEach(function (key) {
                  console.log("-> " + key + " = " + res.header[key]);
                });
                console.log("Body " + JSON.stringify(res.body));
                const has_access_token = res.body.access_token !== undefined;
                has_access_token.should.be.True();
                const has_token_type = res.body.token_type !== undefined;
                has_token_type.should.be.True();
                const has_expires_in = res.body.expires_in !== undefined;
                has_expires_in.should.be.True();
                const has_refresh_token = res.body.refresh_token !== undefined;
                has_refresh_token.should.be.True();
                (res.body.token_type == 'bearer').should.be.True();
                Number.isInteger(res.body.expires_in).should.be.True();
                (typeof res.body.access_token === 'string').should.be.True();
                (typeof res.body.refresh_token === 'string').should.be.True();
                return done();
              });
          });
      } catch (err) {
        done(err);
      }
    });
  });


  it('should make reponde 200 to Alexa.Discovery /alexa/smarthome post', function (done) {
    this.timeout(10000);
    var flow = [
      { id: "n1", type: "alexa-device", alexa: "c1", name: "Luce cucina", "display_category": "LIGHT", wires: [["n2"]] },
      { id: "n2", type: "helper" },
      { id: "n3", type: "alexa-device", alexa: "c1", name: "Stampante", "display_category": "SWITCH", wires: [["n2"]] },
      { id: "c1", type: "alexa-adapter", name: "Nome", http_path: "alexa", port: "" }
    ];
    const client_id = "client_id";
    const secret = "secret";
    const oa2_client_id = "oa2_client_id";
    const oa2_secret = "oa2_secret";
    const password = "password";
    const username = "username";
    const redirect_uri = "https://layla.amazon.com/";
    var credentials = {
      c1: {
        username: username, password: password,
        client_id: client_id, secret: secret,
        oa2_client_id: oa2_client_id, oa2_secret: oa2_secret
      }
    };
    helper.load([adapterNode, deviceNode], flow, credentials, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      try {
        var state = 'Some-state';
        request(n1.alexa.server)
          .post('/alexa/oauth')
          /*.send({
            "client_id": 'client_id',
            "redirect_uri": 'https://layla.amazon.com/',
            "state": 'THESTATE',
            "scope": 'smart_home',
            "response_type": 'code',
          })*/
          .send("username=" + username)
          .send("password=" + password)
          .send("client_id=" + client_id)
          .send("redirect_uri=" + redirect_uri)
          .send("state=" + state)
          .send("scope=smart_home")
          .send("response_type=code")
          .set('Accept', 'application/json')
          .expect(302)
          .end(function (err, res) {
            if (err) return done(err);
            Object.keys(res.header).forEach(function (key) {
              console.log("-> " + key + " = " + res.header[key]);
            });
            const header_location = res.header['location'];
            console.log("header_location " + header_location);
            const isLocationPresent = header_location !== undefined;
            isLocationPresent.should.be.True();
            console.log("isLocationPresent " + isLocationPresent);
            console.log("Location " + header_location);
            const isRedirectStartWith = header_location.startsWith(redirect_uri);
            console.log("isRedirectStartWith " + isRedirectStartWith);
            isRedirectStartWith.should.be.True();
            const hasRedirectState = header_location.indexOf("state=" + state) > 0;
            hasRedirectState.should.be.True();
            const codeIndex = header_location.indexOf("code=");
            (codeIndex > 0).should.be.True();
            (codeIndex + 5 < header_location.length).should.be.True();
            var lastCodeIndex = header_location.indexOf("&", codeIndex);
            if (lastCodeIndex < 0) {
              lastCodeIndex = header_location.length;
            }
            const code = header_location.substring(codeIndex + 5, lastCodeIndex);
            console.log("code " + code);
            request(n1.alexa.server)
              .post('/alexa/token')
              .send("grant_type=authorization_code")
              .send("code=" + code)
              .send("client_id=" + client_id)
              .send("client_secret=" + secret)
              .expect(200)
              .end(function (err, res) {
                if (err) return done(err);
                Object.keys(res.header).forEach(function (key) {
                  console.log("-> " + key + " = " + res.header[key]);
                });
                console.log("Body " + JSON.stringify(res.body));
                const has_access_token = res.body.access_token !== undefined;
                has_access_token.should.be.True();
                const has_token_type = res.body.token_type !== undefined;
                has_token_type.should.be.True();
                const has_expires_in = res.body.expires_in !== undefined;
                has_expires_in.should.be.True();
                const has_refresh_token = res.body.refresh_token !== undefined;
                has_refresh_token.should.be.True();
                (res.body.token_type == 'bearer').should.be.True();
                Number.isInteger(res.body.expires_in).should.be.True();
                (typeof res.body.access_token === 'string').should.be.True();
                (typeof res.body.refresh_token === 'string').should.be.True();
                const access_token = res.body.access_token;
                const refresh_token = res.body.refresh_token;
                request(n1.alexa.server)
                  .post('/alexa/smarthome')
                  .send({
                    "directive": {
                      "header": {
                        "namespace": "Alexa.Discovery",
                        "name": "Discover",
                        "messageId": "123",
                        "payloadVersion": "3"
                      },
                      "payload": {
                        "scope": {
                          "type": "BearerToken",
                          "token": access_token
                        }
                      }
                    }
                  })
                  .expect(200)
                  .end(function (err, res) {
                    if (err) return done(err);
                    Object.keys(res.header).forEach(function (key) {
                      console.log("-> " + key + " = " + res.header[key]);
                    });
                    console.log("Discovery " + JSON.stringify(res.body));
                    request(n1.alexa.server)
                      .post('/alexa/smarthome')
                      .send({
                        "directive": {
                          "header": {
                            "namespace": "Alexa.Authorization",
                            "name": "AcceptGrant",
                            "messageId": "68011517-d8b1-439f-880c-fe5a548902b0",
                            "payloadVersion": "3"
                          },
                          "payload": {
                            "grant": {
                              "type": "OAuth2.AuthorizationCode",
                              "code": "RHfnrlTKMcawVTUdbEnn"
                            },
                            "grantee": {
                              "type": "BearerToken",
                              "token": "Atza|ApGDW6DnLrB17E2yP7vg9veh4S7AsJFTrBRRS8SFGxi8"
                            }
                          }
                        }
                      })
                      .expect(200)
                      .end(function (err, res) {
                        if (err) return done(err);
                        Object.keys(res.header).forEach(function (key) {
                          console.log("-> " + key + " = " + res.header[key]);
                        });
                        console.log("AcceptGrant " + JSON.stringify(res.body));

                        n1.alexa.tokens['oa2'] = {

                        };
                        request(n1.alexa.server)
                          .post('/alexa/smarthome')
                          .send({
                            "directive": {
                              "header": {
                                "namespace": "Alexa",
                                "name": "ReportState",
                                "messageId": "123",
                                "payloadVersion": "3"
                              },
                              "endpoint": {
                                "scope": {
                                  "type": "BearerToken",
                                  "token": access_token
                                },
                                "endpointId": n1.id,
                                "cookie": {}
                              },
                            }
                          })
                          .expect(200)
                          .end(function (err, res) {
                            if (err) return done(err);
                            Object.keys(res.header).forEach(function (key) {
                              console.log("-> " + key + " = " + res.header[key]);
                            });
                            console.log("ReportState " + JSON.stringify(res.body));

                            return done();
                          });
                      });
                  });
              });
          });
      } catch (err) {
        done(err);
      }
    });
  });
});


/*
expect(res.body).to.have.a.property('accessToken');
expect(res.body).to.have.a.property('refreshToken');
expect(res.body).to.have.a.property('expiresIn');
*/
