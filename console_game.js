const buttons = document.querySelectorAll("button");

const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");

const resultLabel = document.querySelector("#result-label");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {
    const resultsMap = {
        "rock" : "scissors",
        "paper" : "rock",
        "scissors" : "paper"
    };

    if (playerChoice === computerChoice) {
        return "Tie";
    } else if (resultsMap[playerChoice] === computerChoice) {
        return "Player";
    } else {
        return "CPU";
    }
}

function playGame(buttonArray) {
    const results = [];

    for (const button of buttonArray) {
        button.addEventListener("click", () => {
            let cpu = getComputerChoice();
            let roundResult = playRound(button.textContent, cpu);

            if (roundResult === "Player") {
                playerScore.textContent = Number(playerScore.textContent) + 1;
            } else if (roundResult === "CPU") {
                cpuScore.textContent = Number(cpuScore.textContent) + 1;
            }

            results.push(roundResult);
            
            if (results.filter(x => x === "Player").length >= 5) {
                resultLabel.textContent = "Player wins! (click this text to restart the game)";
                endGame(buttonArray);
            } else if (results.filter(x => x === "CPU").length >= 5) {
                resultLabel.textContent = "CPU wins! (click this text to restart the game)";
                endGame(buttonArray);
            }

            if (resultLabel.textContent) {
                resultLabel.addEventListener("click", () => {location.reload()});
            }
        })
    }
}

function endGame(buttonArray) {
    for (const button of buttonArray) {
        button.disabled = true;
    }
}

playGame(buttons);

