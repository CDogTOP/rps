// Start game with overarching function startGame; takes argument rounds to run game x amount of times
// Get computer's choice with function getComputerChoice; returns random choice from options array
let options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);
    return options[randomChoice]
}

// Get user's choice with prompt userChoice

let userChoice = prompt('Rock, Paper, or Scissors? ')

// Check if user wins with function playRound; takes userSelection and compSelection as arguments and returns outcome of the game

function playRound(userSelection, compSelection) {
    let outcome;
    if (userSelection === compSelection) {
        outcome = 'Tie';
    }
    else if (userSelection !== compSelection) {
        if ((userSelection === 'rock' && compSelection === 'paper') || 
        (userSelection === 'paper' && compSelection === 'scissors') || 
        (userSelection === 'scissors' && compSelection === 'rock')) {
            outcome = 'Loss';
        }
        else {
            outcome = 'Win';
        }
    }
    return outcome;
}

// Add points to corresponding score variable with givePoint function; takes outcome as argument and increases pt depending on value

let userScore = 0; let compScore = 0;

function givePoint(outcome) {
    if (outcome === 'Win') {
        userScore++;
    }
    else if (outcome === 'Loss') {
        compScore++;
    }
    console.log(`Score: ${userScore}, ${compScore}`)
}

givePoint(playRound(userChoice, getComputerChoice()));

// Check to see if counter variable reached amount of rounds; if yes break and display score/winner, otherwise keep playing