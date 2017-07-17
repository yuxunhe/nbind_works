import * as nbind from 'nbind';

const lib = nbind.init<any>().lib;

var parts: String[] = ['Lu', 'Chenxi', 'Prashant'];

var checker = new lib.MethodExample();

//use the add method to generate new array
var newArray1: Number[] = parts.map(function(part) {
  return(checker.add(part));
});

//use the static check method to generate new array
var newArray2: Number[] = lib.MethodExample.check(parts);

console.log(newArray1);
console.log(newArray2);
