"use strict";
exports.__esModule = true;
var nbind = require("nbind");
var lib = nbind.init().lib;
var thingy = lib.GetSetExample();
console.log("original: " + thingy.value);
thingy.value++;
console.log("after incremeting: " + thingy.value);
thingy.value = 12;
console.log("after resetting: " + thingy.value);
