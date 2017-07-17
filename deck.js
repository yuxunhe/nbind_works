"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nbind = require("nbind");
var binding = nbind.init();
var lib = binding.lib;
var Deck = (function () {
    function Deck(size) {
        this.size = size;
        this.fromJS = function (output) {
            output(this.size);
        };
    }
    return Deck;
}());
binding.bind("Deck", Deck);
var newDeck = new lib.Deck();
var card1 = newDeck.Deal();
console.log(card1);
