//A game with 4 crystals and Random Result
//Every crystal needs to have a random number between 1-12
//A new random number should be generated every time we win/lose
//to those 4 crystals
//When clicking any CRYSTAL, it should add to the previous result
//Until it equals === the total score
//If it is GREATER then total score, decrement a loss and game starts over
//If it is EQUAL TO the total score, increment a win and start game over

var randomResult;
var lost;
var win; 

random_result = Math.floor(Math.random() * 60) + 30;

$("#random-number").html('Random Result: ' + random_result);

for (var i = 0; i < 4; i++){

  var random = Math.floor(Math.random() * 12);
  console.log(random);

  var crystal = $("<div>");
    crystal.attr({
    "class": 'crystal',
    "data-random": random
  });

  $(".crystals").append(crystal);
}