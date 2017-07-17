var nbind = require('nbind');

var binding = nbind.init();
var lib = binding.lib;

function Coord(x, y) {
  this.x = x;
  this.y = y;
}

Coord.prototype.fromJS = function(output) { //literal defined in JS
  output(this.x, this.y);
}

Coord.prototype.show = function() {
  console.log('JS value ' + this.x + ', ' + this.y);
}

binding.bind('Coord', Coord);

var value1 = new Coord(123, 456);
var value2 = lib.ObjectExample.getValue(); //returns a Coord (12, 34)
var ref = lib.ObjectExample.getRef();  //returns a Coord* (56, 78)

lib.ObjectExample.showByValue(value1); //prints values from C++
lib.ObjectExample.showByValue(value2); //prints values from C++
value1.show(); //prints values from JS
value2.show(); //prints values from JS

// lib.ObjectExample.showByRef(value);
lib.ObjectExample.showByRef(ref); //prints ref from C++ 
console.log('JS ref ' + ref.x + ', ' + ref.y);
