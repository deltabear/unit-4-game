// Game will start when page loads
    //Jewel variables will hold mathematic value 
var purpJewelValue = [];
var redJewelValue = [];
var greenJewelValue = [];
var bluJewelValue = [];

var randomNum = [];
// Game counters
var winCounter = 0;
var lossCounter = 0;
var totalScore = 0;

let jewelNumArray = [5, 15, 25, 50, 80];
let randomGoalArray = [160, 180, 200, 245, 300];

// startGame()
// Its how we we will start and restart the game.
// (Note: It's not being run here. It's just being made for future use.)
function startGame() {

//Number randomizer we can use for selecting random number on page, values for Gem Buttons
function getRandomGoal () {
  return Math.floor(Math.random() * Math.floor(max));
}


//Page should display player's wins and losses next to Random NUmber
//When player reaches condition value equal to Random Number - victory!
//Player score is greater then Random Number? BUST. Less then random number means game is still at hand.

//Need to set up a function with an if/else to reset the player score and game values WITHOUT refreshing
    //Game must restart while still keeping track of current losses and wins since page opened
}

console.log("Hello world!");