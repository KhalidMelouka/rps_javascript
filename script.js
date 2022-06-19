// lets start with naming the variables 
// then creating the list of choices for the computer 
// also variables for the player score and computer score


const player = document.querySelector('#player'); 
const machine = document.querySelector('#machine');
const display = document.querySelector('.choice-display'); 
let selectedButton;
const buttons = document.querySelectorAll('button');

let playerScore = 0; 
let machineScore = 0; 
let x = 0;
let machineArray = ["rock", "paper", "scissors"]; 

let computerPlay = () => {
    return machineArray[Math.floor(Math.random() * (machineArray.length))]; 
};


buttons.forEach(button => button.addEventListener('click', (e) => {
    selectedButton = button.className;
    playRound(selectedButton, computerPlay());
}));


function playRound(selection, computerChoice) {
    if (selection === "rock" && computerChoice === "paper" ||
        selection === "scissors" && computerChoice === "rock" || 
        selection === "paper" && computerChoice === "scissors") {
        display.textContent = `you chose ${selection} and machine chose ${computerChoice}, machine wins`;
        x += 1;
        machineScore += 1;
        machine.textContent = machineScore;
    } else if (selection === "paper" && computerChoice === "rock" ||
        selection === "rock" && computerChoice === "scissors" || 
        selection === "scissors" && computerChoice === "paper") {
        display.textContent = `you chose ${selection} and machine chose ${computerChoice}, you win`;
        playerScore += 1;
        player.textContent = playerScore;
    } else if (selection === computerChoice) {
        display.textContent = `you chose ${selection} and machine chose ${computerChoice}, it's a tie`;
        x += 1;
    };
};




