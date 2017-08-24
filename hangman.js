var lettersGuessed = [];
var wins = 0;
var guessesRemaining = 12;
var currentWord = "wonderful";




//display blank word to guess on screen
var currentWordList = currentWord.split("");

function currentWordOnScreen() {
    var tempArray = currentWordList.map(function(){
        return "_";
    });

    //create a temp string and stick the joined list in it.
    var tempStr = tempArray.join(" ");
    //show on webpage
    document.getElementById("theWord").innerHTML = tempStr;
}

//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesRemaining;
}


//function to show wins
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}



//functino to keep track of letters guessed
function addLetter (usersKeypress) {
    //loop to see if keypress is in lettersguessed. Use something like array.some to check if character in list is equal to key press

    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    if (repeatGuess) {
        alert(usersKeypress + " already guessed. Try again!");
        //if it is not a repeat guess check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

        isCharacterInWord(usersKeypress);

        //TODO check is character in word or not. Create a function to do this. Function will loop through string and if it matches then reveal letter. Do an else bc if doesnt match any character reduce the guess count
    }

}

//This function will be called in addLetter function or isCharacter?

function isCharacterInWord (character) {
    for (i = 0; i < currentWordList.length; i++) {
        //console.log(currentWordList[i]);
        if (character.toLowerCase() === currentWordList[i]) {
            console.log(currentWordList[i]);
        }
    }
}

//function to start game
function startGame() {
    currentWordOnScreen();
    showGuessesRemaining();
    showWins();
}

startGame();

//function to capture user's keyboard input
document.onkeydown = function(event) {
    var keyPress = String.fromCharCode(event.keyCode);

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}