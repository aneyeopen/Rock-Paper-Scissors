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
        console.log('Tie game! Everyone wins.');
        return 3;
    } else if (choice === 1 && oppChoice === 3) {
        console.log("You Win! Rock beats Scissors");
        return 1;
    } else if (choice === 1 && oppChoice === 2) {
        console.log("You Lose! Paper beats Rock");
        return 2;
    } else if (choice === 2 && oppChoice === 1) {
        console.log("You Win! Paper beats Rock");
        return 1;
    } else if (choice === 2 && oppChoice === 3) {
        console.log("You Lose! Scissors beats Paper");
        return 2;
    } else if (choice === 3 && oppChoice === 2) {
        console.log("You Win! Scissors beats Paper");
        return 1;
    } else if (choice === 3 && oppChoice === 1) {
        console.log("You Lose! Rock beats Scissors");
        return 2;
    } else {
        return null;
    }

}
console.log(oneRound(getComputerChoice(), playerChoice));

function game() {
    let winCount = 0;
    let lossCount = 0;
    let roundResult = 0;
    let player = 0;
       
    for (let i = 0; i < 5; i++) {
        while (winCount < 3 && lossCount < 3) { 
            player = window.prompt("Rock, paper or scissors?");
            roundResult = oneRound(getComputerChoice(), player);
            if (roundResult === 3) {
                i -= 1;
            } else if (roundResult === 1) {
                winCount += 1;
            } else {
                lossCount += 1;
            }
            console.log(winCount);
            console.log(lossCount); 
        }
    }
    if (winCount === 3) {
        return "You win, you beat the computer";
    } else {
        return "You lost, that's embarrassing!";
    }
}

console.log(game());