import * as nbind from 'nbind';

const lib = nbind.init<any>().lib;

var thingy = lib.GetSetExample();

console.log("original: " + thingy.value);

thingy.value ++;

console.log("after incremeting: " + thingy.value);

thingy.value = 12;

console.log("after resetting: " + thingy.value);
