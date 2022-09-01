




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
        document.getElementById("text").innerHTML = 'Tie game! Noone wins.'
        return tie;
    } else if (choice === 1 && oppChoice === 3) {
        document.getElementById("text").innerHTML = "You Win! Rock beats Scissors";
        return win;
    } else if (choice === 1 && oppChoice === 2) {
        document.getElementById("text").innerHTML = "You Lose! Paper beats Rock";
        return loss;
    } else if (choice === 2 && oppChoice === 1) {
        document.getElementById("text").innerHTML = "You Win! Paper beats Rock";
        return win;
    } else if (choice === 2 && oppChoice === 3) {
        document.getElementById("text").innerHTML = "You Lose! Scissors beats Paper";
        return loss;
    } else if (choice === 3 && oppChoice === 2) {
        document.getElementById("text").innerHTML = "You Win! Scissors beats Paper";
        return win;
    } else if (choice === 3 && oppChoice === 1) {
        document.getElementById("text").innerHTML = "You Lose! Rock beats Scissors";
        return loss;
    } else {
        return null;
    }

}

/*function game() {
    let winCount = 0;
    let lossCount = 0;
    let roundResult = 0;
    let player = 0;
       
    for (let i = 0; i < 5; i++) {
        while (winCount < 3 && lossCount < 3) { 
            player = window.prompt("Rock, paper or scissors?");
            roundResult = oneRound(getComputerChoice(), player);
            if (roundResult === tie) {
                i -= 1;
            } else if (roundResult === win) {
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

console.log(game()); */

const win = 1;
const loss = 2;
const tie = 3;
const playerChoice = "scISSOrs";
const oppChoice = getComputerChoice();

let winCount = 0;
let lossCount = 0;
let gameCount = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

function gameCheck(winCount, lossCount) {
    if (winCount === 3) {
        textElement.innerHTML = "You win, you beat the computer";
        gameCount += 1;
        winCount = 0;
        lossCount = 0;
        updateScore(winCount, lossCount, gameCount);
    
    }else if (lossCount === 3) {
        textElement.innerHTML = "You lost, that's embarrassing!";
        winCount = 0;
        lossCount = 0;
        updateScore(winCount, lossCount, gameCount);
} else return;
}

function updateScore(wins, losses, games) {
    document.getElementById("winCount").innerHTML = `Wins: ${wins}`;
    document.getElementById("lossCount").innerHTML = `Losses: ${losses}`;
    document.getElementById("gameCount").innerHTML = `Games: ${games}`;
}

function roundScoring(decision, wins, losses) {
    roundResult = oneRound(getComputerChoice(), decision);
    if (roundResult === win) {
        winCount += 1;
        updateScore(winCount, lossCount, gameCount);
        if (winCount === 3) {
            textElement.innerHTML = "You win, you beat the computer";
            gameCount += 1;
            winCount = 0;
            lossCount = 0;
        } else return;
        
    } else if (roundResult === loss) {
        lossCount += 1;
        updateScore(winCount, lossCount, gameCount);
        if (lossCount === 3) {
            textElement.innerHTML = "You lost, that's embarrassing!";
            winCount = 0;
            lossCount = 0;
            updateScore(winCount, lossCount, gameCount);
        } else return;
        
    } 
    else return;
    
} 


const textElement = document.getElementById("text");

if (winCount === 0 && lossCount === 0) {
    textElement.innerHTML = "Make your choice to start the game";
}

updateScore(winCount, lossCount, gameCount);


    rockButton.addEventListener('click', (event) => {roundScoring("rock", winCount, lossCount)});
    paperButton.addEventListener('click', (event) => {roundScoring("paper", winCount, lossCount)});
    scissorsButton.addEventListener('click', (event) => {roundScoring("scissors", winCount, lossCount)});
 

