// we'll need a variable for the computer's letter, the users guess, the number of wins, number of losses, and the amount of guesses left, and the list of previous guesses
var wins = 0
var losses = 0
var guessLeft = 9
// this function will run when the user presses a letter key
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
document.onkeyup = function(event) {
    var userGuess = event.key;
    
    // random computer choice
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


if (userGuess === computerGuess) {
    wins++;
    }

    else {
    losses++;
    guessLeft--;
    }
};


document.getElementById("losses").innerHTML = losses;
document.getElementById("wins").innerHTML = wins;
document.getElementById("guessesleft").innerHTML = guessLeft;

