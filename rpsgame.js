const items = ["ROCK", "PAPER", "SCISSORS"];

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

// add event listener to game buttons
const gameButtons = document.querySelectorAll('.btn');
gameButtons.forEach(choice => choice.addEventListener('click', (e) => {
  playerSelection = e.target.id.toUpperCase();
  playRound();
}));

function computerPlay() {
  return items[Math.floor(Math.random() * items.length)];
}

// play a single round
function playRound() {
  computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    roundTie();
  } else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {
    playerWinsRound();
  } else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {
    playerWinsRound();
  } else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {
    playerWinsRound();
  } else {
    computerWinsRound();
  }
  displayFinalScore();
}

function playerWinsRound() {
  playerScore++;
  playerScoreDisplay.textContent = `${playerScore}`;
  roundResult.textContent = `You win the round! ${playerSelection} beats ${computerSelection}`;
  gameWrapper.appendChild(roundResult);
}

function computerWinsRound() {
  computerScore++;
  computerScoreDisplay.textContent = `${computerScore}`;
  roundResult.textContent = `You lose! You chose ${playerSelection}, computer beat you with ${computerSelection}`;
  gameWrapper.appendChild(roundResult);
}

function roundTie() {
  tieScore++;
  tieScoreDisplay.textContent = `${tieScore}`;
  roundResult.textContent = `It's a draw: ${playerSelection} vs. ${computerSelection}`;
  gameWrapper.appendChild(roundResult);
}

// determine final score after 5 rounds
function displayFinalScore() {
  if (playerScore === 5) {
    finalResult.classList.add('won');
    finalResult.textContent = "YOU WON!";
    finalResultMessage.textContent = "Good job!";
    gameWrapper.replaceChildren(finalResult, finalResultMessage);
    playAgain();
  } else if (computerScore === 5) {
    finalResult.classList.add('lost');
    finalResult.textContent = "YOU LOST!";
    finalResultMessage.textContent = "Better luck next time!";
    gameWrapper.replaceChildren(finalResult, finalResultMessage);
    playAgain();
  }
}

// play again after 5 rounds
function playAgain() {
  const playAgainButton = document.createElement("button");
  playAgainButton.textContent = "PLAY AGAIN";
  playAgainButton.setAttribute('class', 'play-again');
  playAgainButton.addEventListener('click', () => {
    resetScores();
    finalResult.removeAttribute('class');
    gameWrapper.replaceChildren(gameContainer);
  });
  gameWrapper.appendChild(playAgainButton);
}

// reset scores to 0
function resetScores() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  playerScoreDisplay.textContent = "0";
  computerScoreDisplay.textContent = "0";
  tieScoreDisplay.textContent = "0";
}

// elements for displaying the score count after each round
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const tieScoreDisplay = document.getElementById('tie-score');

// headings for displaying final result after 5 rounds
const finalResult = document.createElement('h1');
const finalResultMessage = document.createElement('h3');
finalResultMessage.classList.add('final-message');

// div to display the current round winner
const roundResult = document.createElement('div');
roundResult.classList.add('round-result');

// game wrapper and container
const gameWrapper = document.getElementById('game-wrapper');
const gameContainer = document.getElementById('game-container');
