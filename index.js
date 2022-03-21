// Create an Array of at least 3 losing messages
const losingMessage = [
  "Dang..wow... you lost!",
  " Try again scooter",
  "Well Well Well...try again",
];

var winnerNum = 0;
var loserNum = 0;
var winnerCounter = 0;
var loserCounter = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var pickedNumber = 0;
const message = document.getElementById("message");
const lost = document.getElementById("lost");
const winner = document.getElementById("wins");

// target all .box elements and attach a click event listener to each one using a loop
const boxObj = document.querySelectorAll(".box");
for (var i = 0; i < boxObj.length; i++) {
  boxObj[i].onclick = function (event) {
    pickedNumber = parseInt(this.textContent);
    winnerNum = getRandomNumber();
    confirmWin(pickedNumber, winnerNum);
    total();
  };
}

// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

function getRandomNumber() {
  return Math.floor(Math.random() * 3 + 1);
}

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

function confirmWin(winnerNum, pickedNumber) {
  if (pickedNumber == winnerNum) {
    message.textContent = "Awesome, you did it!";
    winnerCounter++
  } else {
    message.textContent = losingMessage[winnerNum - 1];
    loserCounter++
  }
}

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
function total() {
  winner.innerHTML = "<h1>Yay, I Won - " + winnerCounter + "</h1>";
  lost.innerHTML = "<h1>Boo, I Lost - " +  loserCounter + "</h1>";
}
