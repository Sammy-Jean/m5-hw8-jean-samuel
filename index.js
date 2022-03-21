// Create an Array of at least 3 losing messages
const losingMessage = [
  "Dang.. wow... you lost!",
  " Try again scooter...",
  "Well Well Well ....try again",
];
// Create variables to count wins and losses
var winnerNum = 0;
var loserNum = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

const message = document.getElementById("message");
const lost = document.getElementById("lost");
const winner = document.getElementById("wins");
var pickedNumber = 0;
var random = 0;

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
  return Math.floor(Math.random() * 4 + 1);
}

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins
function confirmWin(pickedNumber, winnerNum) {
  if (pickedNumber == winnerNum) {
    message.textContent = "Awesome, you did it!";
    winnerNum++;
  } else {
    message.textContent = losingMessage[winnerNum + 1];
    loserNum++;
  }
}

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses
function total() {
  winner.innerHTML = "<h1>won - " + winnerNum + "</h1>";
  lost.innerHTML = "<h1>lost - " + loserNum + "</h1>";
}
