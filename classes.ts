import * as nbind from 'nbind';

const lib = nbind.init<any>().lib;

var a = new lib.ClassExample();
var b = new lib.ClassExample(1622, 872);
var c = new lib.ClassExample("this is a string! ");
