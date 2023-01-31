function getComputerChoice() {

    const availableChoices = ["rock", "paper", "scissors"];

    // Choosing a random number between 0, 1 and 2, and using it to select avalableChoices element
    const computerPick = availableChoices[Math.floor(Math.random()*3)];

    return computerPick;

}

function getPlayerChoice() {

    while (true) {
        const playerPrompt = prompt("Enter your choice:\nRock\nPaper\nScissors").toLowerCase();
        if (playerPrompt == "rock") {
            return playerPrompt;
            break;
        } else if (playerPrompt == "paper"){
            return playerPrompt;
            break;
        } else if (playerPrompt == "scissors"){
            return playerPrompt;
            break;
        } else {
            alert("Please enter a valid choice");
        }
    }
    
}

alert(getPlayerChoice());

/*
function singleRound(playerSelection, computerSelection) {

    return playerSelection + " " + computerSelection

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
alert(singleRound(playerSelection, computerSelection));
*/