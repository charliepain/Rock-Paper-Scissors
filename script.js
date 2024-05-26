// Function that returns one random string among the following:
// "rock", "paper", "scissors".
// Used to generate the computer's hand choice.
function getComputerChoice() {
    const numberOfChoices = 3;
    // contains a random integer between 1 and 3
    let randomInteger = Math.floor(Math.random() * numberOfChoices + 1);
    // each integer corresponds to one of the possible resulting strings
    switch (randomInteger) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

// Function that capitalizes the first character of a string.
function capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1, string.length);
}

function updateScore() {
    const score = document.querySelector(".score");
    score.textContent =
        `Current score: ${humanScore} (You), ${computerScore} (Computer)`;
}

let humanScore = 0;
let computerScore = 0;
// Function that plays a single round of rock paper scissors between the player and the computer.
// More specifically, compares the human and computer's choices. 
// Announces a winner or a tie for that round and increments the winner's score.
function playRound(humanChoice, computerChoice) {
    // resultNumber = 1 if human won, -1 if computer won, 0 if tie
    function displayRoundResults(resultNumber) {
        humanChoice = capitalize(humanChoice);
        computerChoice = capitalize(computerChoice);
        let roundResultMessage;
        switch (resultNumber) {
            case 0:
                roundResultMessage = "This round is a tie.";
                break;
            case -1:
                roundResultMessage = `${computerChoice} beats`
                    + ` ${humanChoice}. You lose this round.`;
                break;
            case 1:
                roundResultMessage = `${humanChoice} beats`
                    + ` ${computerChoice}. You win this round.`
                break;
        }
        const results = document.querySelector(".results");
        results.textContent =
            `Results: ${humanChoice} (You) vs ${computerChoice} (Computer). `
            + roundResultMessage;
    }

    function applyResults(resultNumber) {
        switch (resultNumber) {
            case -1:
                computerScore++;
                break;
            case 1:
                humanScore++;
                break;
        }
        displayRoundResults(resultNumber);
    }

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    applyResults(0);
                    break;
                case "paper":
                    applyResults(-1);
                    break;
                case "scissors":
                    applyResults(1);
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    applyResults(1);
                    break;
                case "paper":
                    applyResults(0);
                    break;
                case "scissors":
                    applyResults(-1);
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    applyResults(-1);
                    break;
                case "paper":
                    applyResults(1);
                    break;
                case "scissors":
                    applyResults(0);
                    break;
            }
            break;
    }


    updateScore();
}

const buttons = document.querySelector(".choices");
buttons.addEventListener("click", function makeChoice(e) {
    const humanChoice = e.target.textContent.toLowerCase();
    switch (humanChoice) {
        // fall-through
        case "rock":
        case "paper":
        case "scissors":
            playRound(humanChoice, getComputerChoice());

            if (humanScore < 5 && computerScore < 5) break;
            buttons.removeEventListener("click", makeChoice);
            const finalGameResult = document.querySelector(
                ".finalGameResult"
            );
            const currentScore = document.querySelector(".score");
            const finalScore = currentScore.textContent.replace("Current", "Final");
            if (humanScore === 5) {
                finalGameResult.textContent =
                    `${finalScore}. You won this game!`;
            } else {
                finalGameResult.textContent =
                `${finalScore}. You lost this game!`;
            }
            // Add restart game button
            const body = document.querySelector("body");
            const restartButton = document.createElement("button");
            restartButton.textContent = "Restart";
            restartButton.addEventListener("click", (ev) => {
                humanScore = 0;
                computerScore = 0;
                updateScore();
                finalGameResult.textContent = "";
                const roundResults = document.querySelector(".results");
                roundResults.textContent = "Results: None." +
                " You have yet to choose your hand.";
                restartButton.remove();
                buttons.addEventListener("click", makeChoice);
            });
            body.appendChild(restartButton);
            break;
    }
});