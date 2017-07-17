import * as nbind from 'nbind';

const binding = nbind.init<any>();
const lib = binding.lib;

class Deck {
  constructor(public size) {

  }

  fromJS = function(output) { //allows you to call the constructor on the other side
    output(this.size);
  }
}

binding.bind("Deck", Deck);

var newDeck:Deck = new lib.Deck();

var card1 = newDeck.Deal();
console.log(card1);
