// lets start with naming the variables 
// then creating the list of choices for the computer 
// also variables for the player score and computer score


const player = document.querySelector('#player'); 
const machine = document.querySelector('#machine');
const display = document.querySelector('.choice-display'); 
const reset = document.createElement('button');
const displayWinner = document.createElement('div');
const containerOne = document.querySelector('.container-one');
let selectedButton;
const buttons = document.querySelectorAll('#button');

let playerScore = 0; 
let machineScore = 0; 
let x = 0;
let machineArray = ["rock", "paper", "scissors"]; 

let computerPlay = () => {
    return machineArray[Math.floor(Math.random() * (machineArray.length))]; 
};

    
buttons.forEach(button => button.addEventListener('click', (e) => {
    selectedButton = button.className;
    if (x === 10) {
        if (playerScore > machineScore) {
            displayWinner.textContent = 'Congrats you have beat the machine!';
            document.querySelector('body').replaceChild(displayWinner, display);
        } else if (playerScore < machineScore) {
            displayWinner.textContent = 'Argh! It seems machine has beat you.'
            document.querySelector('body').replaceChild(displayWinner, display);
        } else if (playerScore === machineScore) {
            displayWinner.textContent = "it's a tie. You have fought bravely, you should try again!"
            document.querySelector('body').replaceChild(displayWinner, display);
        };
        containerOne.textContent = "";
        reset.textContent = 'Play Again';
        reset.classList.add('reset-button');
        containerOne.appendChild(reset);
        reset.addEventListener('click', () => {
            location.reload(true);
        });
    } else {
        playRound(selectedButton, computerPlay());
    }; 
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
        x += 1;
        playerScore += 1;
        player.textContent = playerScore;
    } else if (selection === computerChoice) {
        display.textContent = `you chose ${selection} and machine chose ${computerChoice}, it's a tie`;
        x += 1;
    };
};




