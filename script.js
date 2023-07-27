
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

function game() {
    let playWinCount = 0;
    let computerWinCount = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt();
        if (!playerSelection) {
            break;
        }
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        if (!choices.includes(playerSelection)) {
            break;
        }
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result === PLAY_RESULT.Tie) {
            i--;
        } else if (result === PLAY_RESULT.Win) {
            playWinCount++;
        } else {
            computerWinCount++;
        }
    }
    alert(JSON.stringify({
        playWinCount,
        computerWinCount,
    }));
}

game();
