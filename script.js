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

// Function that asks user for an input and returns it.
// Does not validate the choice.
function getHumanChoice() {
    const instruction = `Choose your hand (enter "rock" or "paper"` +
        ` or "scissors" without quotes): `;
    return prompt(instruction);
}

// Function that capitalizes the first character of a string.
function capitalize(string) {
    return string.at(0).toUpperCase() + string.slice(1, string.length);
}

// Function that plays the game. 
// 5 rounds are played and a winner or a tie is declared.
function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // Function that plays a single round of rock paper scissors between the player and the computer.
    // More specifically, compares the human and computer's choices. 
    // Announces a winner or a tie for that round and increments the winner's score.
    function playRound(humanChoice, computerChoice) {
        const COMPUTER_WIN_MESSAGE = "You lose!";
        const HUMAN_WIN_MESSAGE = "You win!";

        // Attributes a round win to the computer.
        function attributeComputerWin() {
            console.log(COMPUTER_WIN_MESSAGE + ` ${capitalize(computerChoice)}`
                + ` beats ${capitalize(humanChoice)}.`);
            computerScore++;
        }

        // Attributes a round win to the user.
        function attributeHumanWin() {
            console.log(HUMAN_WIN_MESSAGE + ` ${capitalize(humanChoice)}`
                + ` beats ${capitalize(computerChoice)}.`);
            humanScore++;
        }

        function declareTie() {
            console.log(`${capitalize(humanChoice)} vs ${capitalize(computerChoice)}.`
                + " This round is a tie.");
        }

        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        declareTie();
                        break;
                    case "paper":
                        attributeComputerWin();
                        break;
                    case "scissors":
                        attributeHumanWin();
                        break;
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        attributeHumanWin();
                        break;
                    case "paper":
                        declareTie();
                        break;
                    case "scissors":
                        attributeComputerWin();
                        break;
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        attributeComputerWin();
                        break;
                    case "paper":
                        attributeHumanWin();
                        break;
                    case "scissors":
                        declareTie();
                        break;
                }
                break;
        }
    }

    // Returns a string representing the score board
    function getScoreBoard(humanScore,computerScore) {
        return `${humanScore} (You) to ${computerScore} (computer)`;
    }

    const NUMBER_ROUNDS = 5;
    for (let i = 1; i <= NUMBER_ROUNDS; i++) {
        console.log(`Round ${i}/5. Current score: ${getScoreBoard(humanScore,computerScore)}.`);
        let computerChoice = getComputerChoice();
        let humanChoice;
        let invalidChoice = true;
        // Ask user's choice until it is valid (ignore case)
        while (invalidChoice) {
            // choice converted to lower case to ignore case
            humanChoice = getHumanChoice().toLowerCase();

            // Validate choice
            switch (humanChoice) {
                // fall-through for the possible valid choices
                case "rock":
                case "paper":
                case "scissors":
                    invalidChoice = false;
                    break;
                default:
                    // choice was not among the valid choices
                    alert("Invalid input");
                    break;
            }
        }
        playRound(humanChoice,computerChoice);
    }

    function getFinalScore(humanScore,computerScore) {
        return `Final score: ${getScoreBoard(humanScore,computerScore)}`; 
    }

    // Declare the winner
    if (humanScore > computerScore) {
        console.log(`${getFinalScore(humanScore,computerScore)}. You won!`);
    } else if (humanScore < computerScore) {
        console.log(`${getFinalScore(humanScore,computerScore)}. You lost!`);
    } else {
        console.log(`${getFinalScore(humanScore,computerScore)}. Game drawn!`);
    }
}
