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
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"
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

// Function that plays a single round of rock paper scissors between the player and the computer.
// More specifically, compares the human and computer's choices. 
// Announces a winner or a tie and increments the winner's score.
function playRound(humanChoice, computerChoice) {
    const COMPUTER_WIN_MESSAGE = "You lose!";
    const HUMAN_WIN_MESSAGE = "You win!";

    function attributeComputerWin() {
        console.log(COMPUTER_WIN_MESSAGE + ` ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    function attributeHumanWin() {
        console.log(HUMAN_WIN_MESSAGE + ` ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }

    function declareTie() {
        console.log("This round is a tie.")
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

let humanScore = 0;
let computerScore = 0;

