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

function game () {

    alert("Final score will be revealed after 5 rounds")

    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        roundResult = singleRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("win")){
            playerScore += 1;
        } else if (roundResult.includes("lose")){
            computerScore += 1;
        } else if (roundResult.includes("draw")){
            computerScore += 0.5;
            playerScore += 0.5;
        }
    }
    
    if (playerScore > computerScore) {
        return (`Final score is ${playerScore} \(You\) VS ${computerScore} \(Computer\)\nCongratulations! You won!`);
    } else if (playerScore < computerScore) {
        return (`Final score is ${playerScore} \(You\) VS ${computerScore} \(Computer\)\nYou lose!`);
    } else if (playerScore == computerScore) {
        return (`Final score is ${playerScore} \(You\) VS ${computerScore} \(Computer\)\nIt's a draw!`); 
    }
}

// Adapting player selection; instead of asking for an input, player selection is made trough three different buttons 
function selectForPlayer() {
    
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
    const roundResult = document.createTextNode(singleRound(playerSelection, computerSelection)); // create a text node with the played round result 

    // before appending roundResult to resultBox, we should scan resultBox for any other text content and remove it if found - that's the while job:
    while(resultBox.firstChild) {
        resultBox.removeChild(resultBox.firstChild);
    }

    resultBox.appendChild(roundResult);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(btn => btn.addEventListener("click", selectForPlayer));

document.getElementsByClassName("info").textContent = selectForPlayer;
