import * as nbind from 'nbind';

const lib = nbind.init<any>().lib;

var toSort : number[] = [12, 7172, 1, 261, 7];

lib.Bubble.sort(toSort);
