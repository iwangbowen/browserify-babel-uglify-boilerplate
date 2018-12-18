// Import @babel/polyfill
require("@babel/polyfill");
// Import third-party library
const _ = require('lodash');
// Import your own code
const {log } = require('./util');

log('hello world');

class Test {
    constructor() {

    }
}

const promise = new Promise();

const test = new Test();