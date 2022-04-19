// lets start with naming the variables 
// then creating the list of choices for the computer 
// also variables for the player score and computer score

let computerScore = 0; 
let userScore = 0; 
let computerChoice; 
let userChoice; 
let machineArray = ["rock", "paper", "scissors"]; 
let result; // this will return a value of the singleRound func so i can use it the game loop



// this will randomly pick randomly from the array 
function computerPlay() {
    computerSelect = machineArray[Math.floor(Math.random() * (machineArray.length))]; 
    return computerSelect; 
} 

function singleRound(userSelection, computerSelection) { 
    if (userSelection === computerSelection) {
        return "tie"; 
    } else if ((userSelection === "rock" && computerSelection === "scissors") ||
            (userSelection === "paper" && computerSelection === "rock") || 
            (userSelection === "scissors") && computerSelection === "paper")
    {
        return "player"; 
    } else if (((computerSelection === "rock" && userSelection === "scissors") ||
            (computerSelection === "paper" && userSelection === "rock") || 
            (computerSelection === "scissors") && userSelection === "paper")) {
        return "machine"; 
    } else {
        alert("Something went wrong. Check your spellling");
        alert(userSelection);
    }

} 



function game() {
    while (true) {
        userChoice = prompt("Rock, Paper, or Scissors? ").toLowerCase();
        computerChoice = computerPlay(); 
        result = singleRound(userChoice, computerChoice);
        // this will reset the values and the function call everytime in the loop

        if (result === "player") {
            alert(`You Chose ${userChoice}, and computer chose ${computerChoice}`);
            userScore++; 
            alert(`player score: ${userScore} -- Machine score: ${computerScore}`);
        } else if (result === "machine") {
            alert(`You Chose ${userChoice}, and computer chose ${computerChoice}`);
            computerScore++; 
            alert(`player score: ${userScore} -- Machine score: ${computerScore}`)
        } else if (result === "tie") {
            alert(`You Chose ${userChoice}, and computer chose ${computerChoice}`);
            alert("It's a tie"); 
        }

        if (userScore === 5) {
            alert("congrats you won. You make us proud!"); 
            break;
        } else if (computerScore === 5) {
            alert("machine won. You failed us!"); 
            break; 
        }
    }
}

game();
