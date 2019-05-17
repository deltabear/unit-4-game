// Game will start when page loads
    //Jewel variables will hold mathematic value 
var purpJewel = [];
var redJewel = [];
var greenJewel = [];
var bluJewel = [];

var randomGoal= [];
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
  return randomGoalArray.floor(Math.random() * randomGoalArray.floor);
  
}

document.getElementById("#random-number").innerHTML = "";

//When player clicks on buttons, their value should be added to player's score.
purpJewel.onclick = function(){
  alert("You pressed the Purple jewel!")
};

//Page should display player's wins and losses next to Random NUmber
//When player reaches condition value equal to Random Number - victory!
//Player score is greater then Random Number? BUST. Less then random number means game is still at hand.

//Need to set up a function with an if/else to reset the player score and game values WITHOUT refreshing
    //Game must restart while still keeping track of current losses and wins since page opened
}

console.log(getRandomGoal)
console.log("Hello world!");