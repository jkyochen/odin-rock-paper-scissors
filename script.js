
const CHOICE = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors",
};

const PLAY_RESULT = {
    Tie: "Tie",
    Win: "Win",
    Lose: "Lose",
};

const choices = [CHOICE.Rock, CHOICE.Paper, CHOICE.Scissors];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return PLAY_RESULT.Tie;
    }
    if (playerSelection === CHOICE.Rock && computerSelection === CHOICE.Scissors
        || playerSelection === CHOICE.Paper && computerSelection === CHOICE.Rock
        || playerSelection === CHOICE.Scissors && computerSelection === CHOICE.Paper) {
        return PLAY_RESULT.Win;
    }
    return PLAY_RESULT.Lose;
}

let playWinCount = 0;
let computerWinCount = 0;

let container = document.querySelector(".container");
let curRound = document.querySelector(".curRound");
let playerTotal = document.querySelector(".playerTotal");
let computerTotal = document.querySelector(".computerTotal");
let final = document.querySelector(".final");

show();

container.addEventListener("click", game);

function game(e) {

    let playerSelection = e.target.className;
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    if (result === PLAY_RESULT.Win) {
        playWinCount++;
    } else if (result === PLAY_RESULT.Lose) {
        computerWinCount++;
    }

    show(result);

    if (Math.max(playWinCount, computerWinCount) === 5) {
        container.removeEventListener("click", game);
    }

}

function show(result = "") {
    curRound.textContent = `Current Round Result: ${result}`;
    playerTotal.textContent = `Player Total Win: ${playWinCount}`;
    computerTotal.textContent = `Computer Total Win: ${computerWinCount}`;
    if (Math.max(playWinCount, computerWinCount) === 5) {
        if (playWinCount === 5) {
            final.textContent = `Final Winner: You win.`;
        } else {
            final.textContent = `Final Winner: You lose, Computer win.`;
        }
        final.classList.remove("hidden");
    }
}
