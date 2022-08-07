const rock = 1;
const paper = 2;
const scissors = 3;
const playerChoice = "scISSOrs";
const oppChoice = getComputerChoice();

function getComputerChoice() {
    return Math.floor(Math.random()*3+1);
}


function oneRound(oppChoice, playerChoice) {
    let choice = null;
   
    if (playerChoice.toLowerCase() === "rock") {
        choice = 1;
        console.log(choice);
    }else if (playerChoice.toLowerCase() === "paper") {
        choice = 2;
    }else if (playerChoice.toLowerCase() === "scissors") {
        choice = 3;
    } else {
        choice = null;
    }

    if (choice === oppChoice) {
        return 'Tie game! No one wins.';
    } else if (choice === 1 && oppChoice === 3) {
        return "You Win! Rock beats Scissors";
    } else if (choice === 1 && oppChoice === 2) {
        return "You Lose! Paper beats Rock";
    } else if (choice === 2 && oppChoice === 1) {
        return "You Win! Paper beats Rock";
    } else if (choice === 2 && oppChoice === 3) {
        return "You Lose! Scissors beats Paper";
    } else if (choice === 3 && oppChoice === 2) {
        return "You Win! Scissors beats Paper";
    } else if (choice === 2 && oppChoice === 3) {
        return "You Lose! Rock beats Scissors";
    } else {
        return "You didn't input correctly, you're an idiot!";
    }

}
console.log(oneRound(getComputerChoice(), playerChoice));