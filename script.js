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

function singleRound(playerSelection, computerSelection) {

    // Let's create every possible outcome of the match
    if (playerSelection == "rock" && computerSelection =="rock") {
        return (`Computer has chosen ${computerSelection}: It's a draw!`);     
    } else if (playerSelection == "rock" && computerSelection =="paper") {
        return (`Computer has chosen ${computerSelection}: You lose!`)
    } else if (playerSelection == "rock" && computerSelection =="scissors") {
        return (`Computer has chosen ${computerSelection}: You win!`)
    } else if (playerSelection == "paper" && computerSelection =="paper") {
        return (`Computer has chosen ${computerSelection}: It's a draw!`);     
    } else if (playerSelection == "paper" && computerSelection =="scissors") {
        return (`Computer has chosen ${computerSelection}: You lose!`)
    } else if (playerSelection == "paper" && computerSelection =="rock") {
        return (`Computer has chosen ${computerSelection}: You win!`)
    } else if (playerSelection == "scissors" && computerSelection =="scissors") {
        return (`Computer has chosen ${computerSelection}: It's a draw!`);     
    } else if (playerSelection == "scissors" && computerSelection =="rock") {
        return (`Computer has chosen ${computerSelection}: You lose!`)
    } else if (playerSelection == "scissors" && computerSelection =="paper") {
        return (`Computer has chosen ${computerSelection}: You win!`)
    }

}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
alert(singleRound(playerSelection, computerSelection));