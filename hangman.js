var lettersGuessed = [];
var wins = 0;
var guessesRemaining = 12;
var currentWord = "";
var arr = [];

var gameWords = ["wonderful", "jennifer", "building", "window"];

//function to pick random word in list and put in currentWord
//randomly generate a number between one and length of array

function pickWord() {

    var randomNum = Math.floor((Math.random() * gameWords.length) + 1);
    currentWord = gameWords[randomNum];
    console.log(currentWord);

}


//the word is a list. join it then display it to the screen.
function currentWordOnScreen() {
    var tempStr = arr.join(" ");
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

//function to show letters guessed
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("guess").innerHTML = tempStr;
}

//function to keep track of letters guessed
function addLetter (usersKeypress) {



    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert player if the above code is true.
    if (repeatGuess) {
        alert(usersKeypress + " already guessed. Try again!");

        //if it is not a repeat guess, check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        showLettersGuessed();
        //is characeter in letter guessed
        isCharacterInWord(usersKeypress);
    }

}

//This function will be called in addLetter function or isCharacter?

function isCharacterInWord (character) {
    var flag = false;
    //loop thru every character and see if it matches key entered
    var currentWordList = currentWord.split("");

    for (i = 0; i < currentWordList.length; i++) {
        if (character.toLowerCase() === currentWordList[i]) {
            arr[i] = character.toLowerCase();
            currentWordOnScreen();
            flag = true;

            //check if user has won the game
            if (arr.join("") === currentWord) {
                alert("You won!");
                wins = wins + 1;
                showWins();
                toggleGame();

            }
        }
    }

    //decrement and check is game is end
    if (flag === false) {
        guessesRemaining = guessesRemaining - 1;
        showGuessesRemaining();

        if (guessesRemaining === 0) {
            alert("You lose");
            toggleGame();
        }

    }


}

function toggleGame() {
    document.getElementById("game").classList.toggle("hidden");
    document.getElementById("btn").classList.toggle("hidden");
    //reset variables here
}


//function that will create hyphens
function blankArrayOnScreen (){
    console.log("currentword", currentWord);
    arr.length = currentWord.length;
    arr.fill("_");

}

//function to start with a clean slate per new game
function resetVariables () {
    lettersGuessed = [];
    arr = [];
    guessesRemaining = 12;
}


//function to start game
function startGame() {
    resetVariables ();
    pickWord();
    //puts hyphens in arr
    blankArrayOnScreen();
    //then displays on screen with hyphens
    currentWordOnScreen();
    showGuessesRemaining();
    showLettersGuessed();
    showWins();
}


//function to capture user's keyboard input
document.onkeydown = function(event) {
    var keyPress = String.fromCharCode(event.keyCode);

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}

//need button that when it's clicked it starts game...
function buttonClicked() {
    console.log("button clicked");
    startGame();
    //add class hidden to button
    //remove class hidden from game
    //toggle will remove a class
    toggleGame();
}


//TODO
//consider drawing a hangman
