
// Confirmation to play game.
alert("Welcome to the Cosmic Aquarium! Press OK to begin!");

//Variables
var availGuess = 10;
var wins = 0;
var words = ["dolphin", "universe", "humpback whale", "nebula", "octopus", "shooting star", "pirhana", "singularity"];
var letterGuess = [];
var hidWord = [];

$("#wins").text("0");
//Reset available guess count
$("#guesses-left").text("10");


//Reset all the variables in the game
	function resetGame()	{

		var guessUpdate = document.getElementById("guesses-left");
      	guessUpdate.innerHTML = availGuess;

// Random word is chosen from the bank
		var chosenWord = words[Math.floor(Math.random() * words.length)];
		console.log(chosenWord);
		var hidLetters = chosenWord.length;

//Word is represented as __ __ __
//Create an array of letters in chosenLetters for loop until underscore for each one...
		for (var i = 0; i < chosenWord.length; i++) {
		hidWord[i] = "___";
		}
//...and write it up to the html 
		window.onload = function displayWord() {
		var html = "<p>" + hidWord.join("  ") + "</p>";
		document.getElementById("word").innerHTML = html
		}

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


//Losing
//=======================================================================================================================

//html displays how many guesses are available-availGuess



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


document.onkeyup = function(event) {
 	var guess = event.key;
 	letterGuess = letterGuess.concat(guess);
 	console.log(letterGuess);
//Compare letter guessed to letters in chosenLetters

//if statement for guessed letter matching a letter in chosenLetters

//then html changes underline to letter

//else statement for non-matching guess pushes letter into letterGuessed array

//html changes to reflect updated letterGuessed 
	var html = "<p>" + letterGuess.join("  ") + "</p>";
	document.getElementById("letter-guessed").innerHTML = html;
}
//Remaining guess number is reduced by 1



 










