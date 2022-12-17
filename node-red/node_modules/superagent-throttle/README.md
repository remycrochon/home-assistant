# superagent-throttle

![nodei.co](https://nodei.co/npm/superagent-throttle.png?downloads=true&downloadRank=true&stars=true)
![npm](https://img.shields.io/npm/v/superagent-throttle.svg)
![github-issues](https://img.shields.io/github/issues/leviwheatcroft/superagent-throttle.svg)
![stars](https://img.shields.io/github/stars/leviwheatcroft/superagent-throttle.svg)
![forks](https://img.shields.io/github/forks/leviwheatcroft/superagent-throttle.svg)

A plugin for [superagent](https://github.com/visionmedia/superagent)
that throttles requests. Useful for rate or concurrency limited APIs.

## Features

 * This doesn't just delay requests by an arbitrary number of ms, but
   intelligently manages requests so they're sent as soon as possible whilst
   staying beneath rate limits.
 * Can make serialised subqueues on the fly.
 * Follows [superagent](https://github.com/visionmedia/superagent)
   `.use(throttle.plugin())` architecture
 * Can use multiple instances
 * includes builds for
   [node4 LTS & superagent supported browsers](#compatibility)

## Install

```
  npm i --save superagent-throttle
```

## Basic Usage

    const request     = require('superagent')
    const Throttle    = require('superagent-throttle')

    let throttle = new Throttle({
      active: true,     // set false to pause queue
      rate: 5,          // how many requests can be sent every `ratePer`
      ratePer: 10000,   // number of ms in which `rate` requests may be sent
      concurrent: 2     // how many requests can be sent concurrently
    })

    request
    .get('http://placekitten.com/100/100')
    .use(throttle.plugin())
    .end((err, res) => { ... })

## Events

    const request     = require('superagent')
    const Throttle    = require('superagent-throttle')

    let throttle = new Throttle()
    .on('sent', (request) => { ... }) // sent a request
    .on('received', (request) => { ... }) // received a response
    .on('drained', () => { ... }) // received last response

## Compatibility

    // node 6
    import Throttle from 'superagent-throttle'
    // node 4
    var Throttle = require('superagent-throttle/dist/node4')
    // all browsers supported by superagent
    var Throttle = require('superagent-throttle/dist/browser')

## Serialised Sub Queues

When using API's to update a client, you may want some serialised requests which
still count towards your rate limit, but do not block other requests. You can
do that by passing a uri (not necessarily a valid url) to `throttle.plugin`, for
those requests you want to serialise, and leave it out for other async requests.
This can be done on the fly, you don't need to initialise subqueues first.

    let endpoint = 'http://example.com/endpoint'
    request
    .get(endpoint)
    .set('someData': someData)
    .use(throttle.plugin(endpoint))
    .end(callback)

it's common to use an endpoint for the uri, simply to serialise requests to that
endpoint without interfering with requests to other endpoints

## Options

 * `active`: whether or not the queue is paused. (default: true)
 * `rate`: how many requests can be sent every `ratePer`. (default: 40)
 * `ratePer`: number of ms in which `rate` requests may be sent. (default: 40000)
 * `concurrent`: how many requests can be sent concurrently. (default: 20)

Options can be set after instantiation using the `options` method.

```javascript

    var throttle = new require('./index')({ active: false }) // start paused
    throttle.options('active', true) // unpause

```

## Scripts

     - **npm run jsdoc** : `rm -fr ./docs/* && jsdoc lib -d docs`
 - **npm run docs** : `npm run jsdoc && npm run gh-pages`
 - **npm run readme** : `node-readme`
 - **npm run gh-pages** : `gh-pages -d docs`
 - **npm run build** : `npm run babel:node4 && npm run babel:browser && npm run babel:node6 && npm run readme && npm run docs`
 - **npm run babel:node4** : `cross-env NODE_ENV=node4 babel lib -d dist/node4`
 - **npm run babel:browser** : `cross-env NODE_ENV=browser babel lib -d dist/browser`
 - **npm run babel:node6** : `cross-env NODE_ENV=node6 babel lib -d dist`
 - **npm run test:coverage** : `cross-env NODE_ENV=test nyc --reporter=lcov --reporter=text --check-coverage --lines 100 npm run test`
 - **npm run test** : `cross-env NODE_ENV=test mocha --compilers js:babel-register test`
 - **npm run test:watch** : `cross-env NODE_ENV=test mocha --compilers js:babel-register --watch test`
 - **npm run version** : `npm run build`
 - **npm run postversion** : `git push && git push --tags`

## Api

See the [fancy annotated code](http://leviwheatcroft.github.io/superagent-throttle).

## Changelog

### 0.2.2

 * ES6 imports
 * included compatibility builds
 * switched to [nock](https://github.com/node-nock/nock) for test stubbing

### 0.2.1

 * fixed bug where errored requests are not cleared from concurrency count
   (possibly related to issue #6)

### 0.2.0

 * Removed extraneous dependencies
 * Fancy ES6 Class definition
 * Added unit tests
 * Event emitter
 * breaks 0.1.0 syntax

## Author

Levi Wheatcroft <levi@wht.cr>

## Contributing

Contributions welcome; Please submit all pull requests against the master
branch.

## License

 - **MIT** : http://opensource.org/licenses/MIT
