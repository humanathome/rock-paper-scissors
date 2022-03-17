const items = ["rock", "paper", "scissors"];

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return items[Math.floor(Math.random() * items.length)];
}

function playerWinsRound() {
    playerScore++;
    return `You win with ${playerSelection}!`;
}

function computerWinsRound() {
    computerScore++;
    return `Computer wins with ${computerSelection}.`;
}

// remove whitespace and downcase the user input
function normalizePlayerInput(playerInput) {
    playerInput = String(playerInput).toLowerCase();
    return playerInput.replace(/\s+/g, '');
}

function pickInsteadOfPlayer() {
    return items[Math.floor(Math.random() * items.length)];
}

// determine final score
function finalScore() {
    if (playerScore > computerScore) {
        console.log(`FINAL SCORE: You won with a score of ${playerScore}! Congratulations!`);
    } else if (playerScore < computerScore) {
        console.log(`FINAL SCORE: Computer won with a score of ${computerScore}! Better luck next time.`);
    } else {
        console.log("FINAL SCORE: It's a tie! Play again!")
    }
}

// play a single round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie.";
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return playerWinsRound();
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return playerWinsRound();
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return playerWinsRound();
    } else {
        return computerWinsRound();
    }
}

// play 5 rounds
function game() {
    for (let i = 1; i < 6; i++) {
        console.log(`ROUND ${i}/5`)
        playerSelection = prompt("Pick rock, paper or scissors:");
        if (playerSelection === null ) {
            return console.log("You gave up. See you next time. Goodbye!");
        } else {
            playerSelection = normalizePlayerInput(playerSelection);
        }
        if (!(items.includes(playerSelection))) {
            let confirmAction = confirm("That is not a valid choice. Do you want me to pick a random item for you?");
            if (confirmAction === false) {
                return console.log("You gave up. See you next time. Goodbye!");
            } else {
                playerSelection = pickInsteadOfPlayer();
            }
        }
        console.log(`You chose ${playerSelection}.`);
        computerSelection = computerPlay();
        console.log(`Computer chose ${computerSelection}.`);
        console.log(playRound(playerSelection, computerSelection));
    }
    return finalScore();
}
