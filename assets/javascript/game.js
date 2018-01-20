
// Confirmation to play game.
alert("Welcome to the Cosmic Aquarium! Press OK to begin!");

var availGuess = 10;
var wins = 0;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Word Bank
//=======================================================================================================================
// Bank of words to be solved
var words = ["dolphin", "universe", "humpback whale", "nebula", "octopus", "shooting star", "pirhana", "singularity"];

// Random word is chosen from the bank
var chosenWord = words[Math.floor(Math.random() * words.length)];

console.log(chosenWord);

//Word is represented as __ __ __
//Create an array of letters in chosenLetters for loop until underscore for each one
var hidWord = [];

for (var i = 0; i < chosenWord.length; i++) {
	hidWord[i] = "___";
}

var hidLetters = chosenWord.length;


// html changes to reflect the hidWord array with no commas and space in between each underscore
window.onload = function displayWord() {
	var html = "<p>" + hidWord.join("  ") + "</p>";
	document.getElementById("word").innerHTML = html
}


//Game Play
//=======================================================================================================================
 //Remaining letters to be guessed
 // var remaining = chosenWord.length;

 // while (remaining > 0) {

 // }

//for (var g = 0; g < chosenWord.length; g++) {
// 	if (chosenWord[g] === guess) {
// 		hidWord[g] = guess;
// 		hidLetters- -;
// 	}
// }





// var letterGuess = document.getElementById("letter-guessed");
//       console.log(letterGuess)



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

      guessUpdate.innerHTML = availGuess;


//if availGUess is empty

//Create an event that displays "Oh noooo! You were eaten by Dark Matter Pirahna (with img?)"


//Winning
//======================================================================================================================
//Create winning array to start at 0-wins

var winUpdate = document.getElementById("wins");

      winUpdate.innerHTML = wins;


//if all letters in chosenLetters have been matched

//add an additional number to wins and

//Create an event that displays "Congratulations! You get to party with giant cosmic sea mammals!!"

//Game resets (for loop to "random word is chosen from the bank"??)


document.onkeyup = function (event) {
 	var guess = event.key;
 	var letterGuess = [];
 	letterGuess = letterGuess.concat(guess);
 	console.log(letterGuess);

 // 	var html = "<p>" + letterGuess.join("  ") + "</p>";
	// document.getElementById("letter-guessed").innerHTML = html
}


 










