// Start game with overarching function startGame; takes argument rounds to run game x amount of times

function startGame(rounds) {

    let options = ['rock', 'paper', 'scissors'];
    let counter = 0; let gameRounds = rounds;
    
    // Get computer's choice with function getComputerChoice; returns random choice from options array

    function getComputerChoice() {
        let randomChoice = Math.floor(Math.random() * 3);
        return options[randomChoice];
    }

    // Check if user wins with function playRound; takes userSelection and compSelection as arguments and returns outcome of the game

    function playRound(userSelection, compSelection) {
        let outcome;
        if (userSelection === compSelection) {
            console.log(`USER PICKED: ${userSelection}, COMPUTER PICKED: ${compSelection}; TIE!!!`);
            outcome = 'Tie';
        }
        else if (userSelection !== compSelection) {
            if ((userSelection === 'rock' && compSelection === 'paper') || 
            (userSelection === 'paper' && compSelection === 'scissors') || 
            (userSelection === 'scissors' && compSelection === 'rock')) {
                console.log(`USER PICKED: ${userSelection}, COMPUTER PICKED: ${compSelection}; LOSS!!!`);
                outcome = 'Loss';
            }
            else {
                console.log(`USER PICKED: ${userSelection}, COMPUTER PICKED: ${compSelection}; WIN!!!`);
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
        console.log(`User Score: ${userScore}, Computer Score: ${compScore}`);
    }

    let finalResult;

    // As long as the counter (starts at 0) is less than the number of rounds, the game is run; only on valid inputs will the counter be incremented 

    while (counter < gameRounds) {

        // Get user's choice with prompt userChoice; will quit upon request, reask upon invalid input, and play upon valid value along with increment of counter

        let userChoice = prompt('Rock, Paper, or Scissors? ');
        if (userChoice === 'quit') {
            finalResult = 'quit';
            return;
        }
        else if (userChoice === null || userChoice === undefined || !options.includes(userChoice.toLowerCase())) {
            console.log("You're weird for that, choose something else");
        }
        else {
            givePoint(playRound(userChoice.toLowerCase(), getComputerChoice()));
            counter++;
        }
    }

    // If user did not quit the game midway through, conditional will display the winner after rounds have been played 

    if (finalResult !== 'quit') {
        if (userScore > compScore) {
            console.log('USER WINS!!!');
        }
        else if (compScore > userScore) {
            console.log('COMPUTER WINS!!!');
        }
        else {
            console.log('USER AND COMPUTER TIE!!!');
        }
    }

    // When score and winner is displayed, prompt asks if user would like to play again

    let playAgain = prompt('Would you like to play again? Type Y or N: ');
    if (playAgain === null || playAgain.toUpperCase() !== 'Y') {
        return;
    }
    else if (playAgain.toUpperCase() === 'Y') {
        welcomePlayer();
    }
}

function welcomePlayer() {
    console.clear();
    while (true) {

        // Prompt asks user how many rounds to play; loop runs until the user quits, reasks upon invalid value, and starts upon valid value with introduction console log

        let rounds = prompt("HELLO! Welcome to Rock, Paper, Scissors! How many rounds would you like to play?");
        if (rounds === 'quit') {
            break;
        } 
        else if (isNaN(rounds) || rounds === undefined || rounds === null || rounds === '') {
            alert('Please enter a valid value.');
        }
        else {
            console.log('For the best visual experience, dock the console to the bottom of the viewport!');
            startGame(rounds);
            break;
        }
    }
}

welcomePlayer();
console.log('Refresh to play again!');