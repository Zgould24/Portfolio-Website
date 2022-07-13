var numInput = document.querySelector('.num-input');
var guessBtn = document.querySelector('.btn');
var dialogue = document.querySelector('.conversation');
var attempts = document.querySelector('.attempts');
var highscore = document.querySelector('.highscore');
var randomNum = Math.floor((Math.random() * 10) + 1);

console.log(randomNum);

var resetGame = function() {
    randomNum = Math.floor((Math.random() * 10) + 1);
    dialogue.innerHTML = "What number am I guessing?";
    attempts.innerHTML = "10";
    numInput.value = 1;
    guessBtn.innerHTML = "Guess!";
    guessBtn.removeEventListener("click", resetGame);
    guessBtn.addEventListener("click", numberGuess);
}

function endGame(){
    if(parseInt(attempts.innerHTML) === 0) {
        guessBtn.removeEventListener("click", numberGuess);
        dialogue.innerHTML = "Sorry! You ran out of attempts..."
        guessBtn.innerHTML = "Play again?";
        guessBtn.addEventListener("click", resetGame);
    }
}

var numberGuess = function() {
    if(numInput.value < randomNum) {
        dialogue.innerHTML = "Your guess was too low... Try Again!";
        attempts.innerHTML = parseInt(attempts.innerHTML) - 1;
        endGame();
    }  else if(numInput.value > randomNum) {
        dialogue.innerHTML = "Your guess was too high... Try Again!";
        attempts.innerHTML = parseInt(attempts.innerHTML) - 1;
        endGame();
    }  else {
        dialogue.innerHTML = "Correct! You win!";
        if(parseInt(attempts.innerHTML) >= parseInt(highscore.innerHTML)) {
            highscore.innerHTML = attempts.innerHTML;
        }
        guessBtn.removeEventListener("click", numberGuess);
        guessBtn.innerHTML = "Play again?";
        guessBtn.addEventListener("click", resetGame);
    }
}

function checkNum(element) {
    if(element.value < 1) {
        element.value = 1;
    }  else if(element.value > 10) {
        element.value = 10;
    }
}

guessBtn.addEventListener("click", numberGuess);