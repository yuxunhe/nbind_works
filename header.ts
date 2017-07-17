import * as nbind from 'nbind';

const lib = nbind.init<any>().lib;

 lib.HeaderExample.callJS(function(a, b, c){ //returns a string indicating the sum
   return ("sum is " + (a + b + c) + "\n")
 });
