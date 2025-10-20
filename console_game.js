const CHOICES = ["rock", "paper", "scissors"];

function getComputerChoice(array = CHOICES) {
    return array[Math.floor(Math.random() * array.length)];
}

function getHumanChoice(array = CHOICES) {
    const humanChoice = window.prompt("Rock, paper or scissors, what do you pick ?: ");

    if (!array.includes(humanChoice.toLowerCase())) {
        return "Error, select a correct choice";
    }

    return humanChoice.toLowerCase();
}

function roundWinner(humanVal, pcVal) {
    const wins = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (humanVal === pcVal) {
        return "Tie";
    } else if (wins[humanVal] === pcVal) {
        return "Human";
    } else {
        return "Computer";
    }
}

function gameWinner(resultsArray) {
    const humanWins = resultsArray.filter(x => x === "Human").length;
    const computerWins = resultsArray.filter(x => x === "Computer").length;

    console.log("");
    console.log("Final results: ")
    
    resultsArray.forEach((result, i) => {
        const round = i + 1;
        console.log(
            result === "Tie"
                ? `Round ${round} - Result: Tie`
                : `Round ${round} - Result: ${result} wins`
            );
        }
    );

    if (humanWins > computerWins) {
        console.log("Human wins the game");
    } else if (computerWins > humanWins) {
        console.log("Computer wins the game");
    } else {
        console.log("It's a tie");
    }
}

let round = 0;

const results = [];

while (round < 5) {
    let pc = getComputerChoice();
    let human = getHumanChoice();
    let roundResult = roundWinner(human, pc);

    results.push(roundResult);

    console.log(`Human: ${human} - Computer: ${pc}`);
    if (roundResult === "Tie") {
        console.log("Result: It's a tie.")
    } else {
        console.log(`Result: ${roundResult} wins.`)
    }

    round++;
}

gameWinner(results);