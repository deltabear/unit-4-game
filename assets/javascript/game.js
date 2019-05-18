//A game with 4 crystals and Random Result
//Every crystal needs to have a random number between 1-12
//A new random number should be generated every time we win/lose
//to those 4 crystals
//When clicking any CRYSTAL, it should add to the previous result
//Until it equals === the total score
//If it is GREATER then total score, decrement a loss and game starts over
//If it is EQUAL TO the total score, increment a win and start game over

var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

//Setters
//Getters

//$(".crystal").attr('class', 'red');

var resetAndStart = function () {

  $(".crystals").empty();

  random_result = Math.floor(Math.random() * 60) + 30;

  $("#random-number").html('Random Result: ' + random_result);

  for (var i = 0; i < 4; i++){

      var random = Math.floor(Math.random() * 11) + 1;
      //console.log(random);


      var crystal = $("<div>");
        crystal.attr({
        "class": 'crystal',
        "data-random": random
      });

        crystal.html(random);

      $(".crystals").append(crystal);
  }  
}

resetAndStart();

//Event Delegation
$(document).on('click', '.crystal', function () {

  var num = parseInt($(this).attr('data-random'));

  previous += num;

  console.log(previous);

  if(previous > random_result){
    lost--;
    
    $("#lost").html(lost);

    resetAndStart();

  } else if(previous === random_result){
    win++;
    
    $("#win").html(win);

    resetAndStart();
  }

});