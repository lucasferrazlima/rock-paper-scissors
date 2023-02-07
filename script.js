function getComputerChoice() {

    const availableChoices = ["rock", "paper", "scissors"];

    // Choosing a random number between 0, 1 and 2, and using it to select avalableChoices element
    const computerPick = availableChoices[Math.floor(Math.random()*3)];

    return computerPick;

}

function getPlayerChoice() {

    // Receiving and returning a player prompt, only when valid
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

// function for playing a single round of rps
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

let playerScore = 0;
let computerScore = 0;
let count = 0;

// Adapting player selection; instead of asking for an input, player selection is made trough three different buttons 
function selectForPlayer() {
    
    count += 1; // game stops at count = 5

    let playerSelection;
    const computerSelection = getComputerChoice()
    if (this.id == "rock") {
        playerSelection = "rock"
    } else if (this.id == "paper") {
        playerSelection = "paper"
    } else if (this.id == "scissors") {
        playerSelection = "scissors"
    }

    const resultBox = document.querySelector(".info") // select div below buttons on DOM tree 
    let roundResult = document.createTextNode(singleRound(playerSelection, computerSelection)); // create a text node with the played round result 

    // before appending roundResult to resultBox, we should scan resultBox for any other text content and remove it if found - that's the while job:
    while(resultBox.firstChild) {
        resultBox.removeChild(resultBox.firstChild);
    }

    resultBox.appendChild(roundResult);

     // converting roundResult to string for verification using "str.includes()":
    roundResultString = roundResult.wholeText;

    // updating game score
    if (roundResultString.includes("win")){
        playerScore += 1;
    } else if (roundResultString.includes("lose")){
        computerScore += 1;
    } else if (roundResultString.includes("draw")){
        computerScore += 0.5;
        playerScore += 0.5;
    }

    // Appending score to designated div
    const playerBox = document.querySelector("#player")
    const computerBox = document.querySelector("#computer")
    const plScore = document.createTextNode(playerScore)
    const pcScore = document.createTextNode(computerScore)

    while(playerBox.firstChild) {
        playerBox.removeChild(playerBox.firstChild);
    }
    playerBox.appendChild(plScore);

    while(computerBox.firstChild) {
        computerBox.removeChild(computerBox.firstChild);
    }
    computerBox.appendChild(pcScore);
    
    let finalResult;

    // When the count hit 5, the match is ended and a winner is declared. Then the score and the count are redefined to 0
    if (count == 5) {
        if (playerScore > computerScore) {
            finalResult = `Final score is ${playerScore} x ${computerScore} | \nCongratulations! You won!`;
        } else if (playerScore < computerScore) {
            finalResult = `Final score is ${playerScore} x ${computerScore} |\nYou lose!`;
        } else if (playerScore == computerScore) {
            finalResult = `Final score is ${playerScore} x ${computerScore} |\nIt's a draw!`; 
        }

        let gameResult = document.createTextNode(finalResult);

        while(resultBox.firstChild) {
            resultBox.removeChild(resultBox.firstChild);
        }
    
        resultBox.appendChild(gameResult);

        playerScore = 0;
        computerScore = 0;
        count = 0;
    }

}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", selectForPlayer));

document.getElementsByClassName("info").textContent = selectForPlayer;
