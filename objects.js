"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nbind = require("nbind");
var binding = nbind.init();
var lib = binding.lib;
var Coord = (function () {
    function Coord(x, y) {
        this.x = x;
        this.y = y;
        this.fromJS = function (output) {
            output(this.x, this.y);
        };
        this.show = function () {
            console.log('JS value: ' + this.x + ', ' + this.y);
        };
    }
    return Coord;
}());
binding.bind('Coord', Coord);
var value1 = new Coord(123, 456);
var value2 = lib.ObjectExample.getValue();
var ref = lib.ObjectExample.getRef();
lib.ObjectExample.showByValue(value1);
lib.ObjectExample.showByValue(value2);
value1.show();
value2.show();
lib.ObjectExample.showByRef(ref);
console.log('JS ref: ' + ref.x + ', ' + ref.y);
