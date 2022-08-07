const rock = 1;
const paper = 2;
const scissors = 3;


function getComputerChoice() {
    return Math.floor(Math.random()*3+1);
}

console.log(getComputerChoice());