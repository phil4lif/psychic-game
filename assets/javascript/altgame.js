//Declare variables for wins losses letters guessed the computer letter

var wins = 0;
var losses = 0;
var guessedSoFar = [""];
var compLetter = "";
var letters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var userGuess = "";
var guessesLeft = 9;
//variables that will refer to the html page
var guessedSoFarText = document.getElementById("#sofar");
var winsText= document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText= document.getElementById("guessesleft");
//make a function that makes the computer choose a random letter
var letterGenerator=function(){
    compLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(compLetter);
}
//makes a newgame function
var newGame = function(){
    letterGenerator();
    guessedSoFar = [""];
    guessesLeft = 9;
}

//make a function for a victory
var winFunction = function(){
    wins++;
    newGame();
}

//make a function for a loss
var lossFunction = function(){
    losses--;
    newGame();
}

//GAME PLAY SECTION
//the user enters a guess
document.onkeyup=function(event){
    userGuess = event.key;
if (guessesLeft > 0){

    if (userGuess===compLetter) {
        winFunction()
    }
    else{
        guessesLeft--;
        guessedSoFar.push(userGuess);
        
    } 
        
}
}




//checks to see if the guess is correct


//if it is correct runs the victory function



//adds to lettersGuessed if incorrect

//if the user has used all of their guesses then run the victory function

