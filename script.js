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
// Keeps asking until a valid choice is entered.
function getHumanChoice() {
    let instruction = `Choose your hand (enter "rock" or "paper"` +
    ` or "scissors" without quotes): `;
    let humanChoice;
    while (true) {
        // Instruct the user to enter his choice
        humanChoice = prompt(instruction);
        // Validate the user's choice
        switch (humanChoice) {
            // fall-through for the valid choices
            case "rock":
            case "paper":
            case "scissors":
                // return the valid choice
                return humanChoice;
                break;
            default:
                alert(`Your hand of choice "${humanChoice}" is invalid.` +
                ` Please enter a valid hand.`);
                // enter the loop again to ask for another choice
                break;
        }
    }
}
