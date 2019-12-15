// we'll need a variable for the computer's letter, the users guess, the number of wins, number of losses, and the amount of guesses left, and the list of previous guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;



// creates an array of the alphabet for the computer to choose from
var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeyup = function(event) {
    var userGuess = event.key;
    
    // random computer choice
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


if ((userGuess === computerGuess)) {
    wins++;
    guessesLeft--;
}

    else {
    losses++;
    guessesLeft--;
}
};


document.getElementById("losses").textContent = losses;
document.getElementById("wins").textContent = wins;
document.getElementById("guessesleft").textContent = guessesLeft;

