let form = document.getElementById("form");
let input = document.getElementById("input");
let submit = document.getElementById("submit");
let startGame = document.getElementById("startgame");
let output = document.getElementById("output");
let guessDisplay = document.getElementById("guessdisplay");

let guessArray = [];
let computerGuess;

function onStartGame(){
    output.textContent = "";
    guessDisplay.textContent = "";
    guessArray= [];
    computerGuess = Math.round(Math.random() * 100);
    console.log(computerGuess);
    input.disabled = false;
    submit.disabled = false;
    startGame.disabled = true;
    input.focus();
}

function onFinishGame(message){
    output.textContent = message;
    input.disabled = true;
    submit.disabled = true;
    startGame.disabled = false;
    startGame.focus();
}

function onInput(e){
    e.preventDefault();
    const guess = +input.value;
    input.value = '';
    guessArray.push(guess);
    guessDisplay.textContent = `Your guesses: ${guessArray.join(', ')}`;

    if (guess > computerGuess){
        output.textContent = "too High!";
    } else if (guess < computerGuess){
        output.textContent = "too Low!";
    } else {
        onFinishGame("Congracts! You got it.");
        return;
    }
    input.focus();

    if (guessArray.length >= 10) {
        onFinishGame('You lost! The number was ' + computerGuess);
      }
}

form.addEventListener('submit', onInput);
startGame.addEventListener('click', onStartGame);
onStartGame();
