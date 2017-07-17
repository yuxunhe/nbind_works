"use strict";
exports.__esModule = true;
var nbind = require("nbind");
var lib = nbind.init().lib;
var parts = ['Lu', 'Chenxi', 'Prashant'];
var checker = new lib.MethodExample();
//use the add method to generate new array
var newArray1 = parts.map(function (part) {
    return (checker.add(part));
});
//use the static check method to generate new array
var newArray2 = lib.MethodExample.check(parts);
console.log(newArray1);
console.log(newArray2);
