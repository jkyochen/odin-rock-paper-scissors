
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (!choices.includes(playerSelection)) {
        return "error choice";
    }
    if (playerSelection === computerSelection) {
        return "Tie";
    }
    if (playerSelection === "Rock" && computerSelection === "Scissors"
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
