// creates an array of the alphabet for the computer to choose from
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// we'll need a variable for the computer's letter, the users guess, the number of wins, number of losses, and the amount of guesses left, and the list of previous guesses
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedSoFar = [""];

//create varialbes that hold reference to html ids where we want to display info
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesleft");
var soFarText = document.getElementById("sofar");






var newGame = function () {
    guessedSoFar = [""];
    guessesLeft = 9;
    
    soFarText();
    console.log(computerGuess);
}
//this function runs when the user presses a key
document.onkeyup = function (event) {

    //determines which key was pressed
    var userGuess = event.key;
// random computer choice
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
    if (guessesLeft > 0) {

        if (userGuess === computerGuess) {
            wins++;
            alert("You've won, you have psychic abilities");
            newGame();
        }
        else {
            guessesLeft--;
            // document.getElementById("guessesleft").innerHTML="" + guessedSoFar.join(" ");
            guessedSoFar.push(userGuess);
        }
    }

    if (guessesLeft === 0) {
        losses++;
        alert("You Lost, test your psychic abilities again.");
        newGame();
    }


    //display results
    winsText.textContent = wins;
    lossesText.textContent = losses;
    guessesLeftText.textContent = guessesLeft;
    soFarText.textContent = guessedSoFar;
};



