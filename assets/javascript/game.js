
// Confirmation to play game.
alert("Welcome to the Cosmic Aquarium! Press OK to begin!");

var availGUess = 10
var wins = 0

//Word Bank
//=======================================================================================================================
// Bank of words to be solved
var words = ["dolphin", "universe", "humpback whale", "nebula", "octopus", "shooting star", "pirhana", "singularity"];

// Random word is chosen from the bank
var chosenWord = words[Math.floor(Math.random() * words.length)];

//function (chosenWord.length) to count character spaces

//variable length

//variable underscore

//for loop until underscore for every var of length


console.log(chosenWord);

//Create an array of letters in chosen word - chosenLetters


// Each letter of chosenLetters represented in html by underlines
//I think I can put underlines in span

// html changes to reflect the word being used
window.onload = function displayWord() {
	var html = "<p>" + chosenWord + "</p>";
	document.getElementById("word").innerHTML = html
}


//Guess Input
//=======================================================================================================================
//Create onKeyUp event for letter guessed


//onKeyUp event reduces remaining guess number by one in html


//Compare letter guessed to letters in chosenLetters


//if statement for guessed letter matching a letter in chosenLetters

//then html changes underline to letter


//else statement for non-matching guess pushes letter into letterGuessed array


//html changes to reflect updated letterGuessed 




//Remaining Guess Number
//=======================================================================================================================

//html displays how many guesses are available-availGuess

var guessUpdate = document.getElementById("guesses-left");

      guessUpdate.innerHTML = availGUess--;


//if availGUess is empty

//Create an event that displays "Oh noooo! You were eaten by Dark Matter Pirahna (with img?)"


//Winning
//======================================================================================================================
//Create winning array to start at 0-wins

var winUpdate = document.getElementById("wins");

      winUpdate.innerHTML = wins;

//html displays 0


//if all letters in chosenLetters have been matched

//add an additional number to wins and

//Create an event that displays "Congratulations! You get to party with giant cosmic sea mammals!!"

//Game resets (for loop to "random word is chosen from the bank"??)













