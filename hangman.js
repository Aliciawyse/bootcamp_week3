var lettersGuessed = [];
var wins = 0;
var guessesRemaining = 12;
var currentWord = "wonderful";
var arr = [];




//In order to display blank word
//on screen, I split the current word, use the map method to
//substitute characters for "_ _ _ _ _"

var currentWordList = currentWord.split("");
function currentWordOnScreen() {
    //var tempArray = currentWordList.map(function(){
    //    return "_";
    //});


    //create a temp string and stick the joined list in it.
    //add empty quotes with space so that word shows up like "_ _ _ _" on screen. Then show new string on webpage
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


//function to keep track of letters guessed
function addLetter (usersKeypress) {

    //return true if the letter the player guesses
    //already exists in our lettersGuessed list
    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

    //alert player if letter guessed already.
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
    var flag = false;
    //loop thru every character and see if it matches key entered
    for (i = 0; i < currentWordList.length; i++) {
        //console.log(currentWordList[i]);
        if (character.toLowerCase() === currentWordList[i]) {
            //(console.log(i);
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
}


//function that will create hyphens
function blankArrayOnScreen (){
    arr.length = currentWord.length;
    arr.fill("_");

}


//function to start game
function startGame() {
    blankArrayOnScreen();
    currentWordOnScreen();
    showGuessesRemaining();
    showWins();
    lettersGuessed = []

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
//add notes to make sure I understand my code
//when a new game starts start with a blank array
//After the user wins/loses the game should automatically choose another word and make the user play it
//consider drawing a hangman
//Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).