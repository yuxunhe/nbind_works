import * as nbind from 'nbind';

const binding = nbind.init<any>();
const lib = binding.lib;

class Coord {
  constructor(public x, y) { }

  fromJS = function(output) { //allows you to call the constructor on the other side 
    output(this.x, this.y)
  }

  show = function() {
    console.log('JS value: ' + this.x + ', ' + this.y);
  }
}

binding.bind('Coord', Coord);

var value1:Coord = new Coord(123, 456);
var value2:Coord = lib.ObjectExample.getValue();
var ref = lib.ObjectExample.getRef();

lib.ObjectExample.showByValue(value1);
lib.ObjectExample.showByValue(value2);
value1.show();
value2.show();

lib.ObjectExample.showByRef(ref);
console.log('JS ref: ' + ref.x + ', ' + ref.y);
