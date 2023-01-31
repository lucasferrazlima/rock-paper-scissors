function getComputerChoice() {

    const availableChoices = ["rock", "paper", "scissors"];

    // Choosing a random number between 0, 1 and 2, and using it to select avalableChoices element
    const computerPick = availableChoices[Math.floor(Math.random()*3)];

    return computerPick;

}