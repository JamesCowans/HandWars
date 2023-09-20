const options = document.querySelectorAll('.options');
const score = document.getElementById('scores');
const winnerArea = document.getElementById('winnerArea');
const reset = document.getElementById('reset-match');

const scoreBoard = {
    Player: 0,
    Computer: 0
};
//* function to play the game when user presses an option *//
function playGame(e) {

    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = whoWins(playerChoice, computerChoice);
    console.log(winner, playerChoice, computerChoice);

}
//* function works decides a random option for the computer *//
function getComputerChoice() {
    const rand = Math.random();
    if (rand < 0.23) {
        return 'rock';
    } else if (rand <= 0.42) {
        return 'paper';
    } else if (rand <= 0.67) {
        return 'scissors';
    } else if (rand <= 0.81) {
        return 'lizard';
    } else {
        return 'spock';
    }
}
//* logic to decide who wins based on options selected by user and computer*//
function whoWins(p, c) {
    if ((p === 'rock' && c === 'scissors') || (p === 'rock' && c === 'lizard')) {
        return 'You Win!!';
    } else if ((p === 'paper' && c === 'rock') || (p === 'spock' && c === 'rock')) {
        return 'You Win!!';
    } else if ((p === 'scissors' && c === 'paper') || (p === 'scissors' && c === 'lizard')) {
        return 'You Win!!';
    } else if ((p === 'lizard' && c === 'spock') || (p === 'lizard' && c === 'paper')) {
        return 'You Win!!';
    } else if ((p === 'spock' && c === 'scissors') || (p === 'spock' && c === 'rock')) {
        return 'You Win!!';
    } else if ((p === 'rock' && c === 'paper') || (p === 'spock' && c === 'paper')) {
        return 'You lose!!';
    } else if ((p === 'paper' && c === 'scissors') || (p === 'lizard' && c === 'scissors')) {
        return 'You lose!!';
    } else if ((p === 'spock' && c === 'lizard') || (p === 'paper' && c === 'lizard')) {
        return 'You lose!!';
    } else if ((p === 'scissors' && c === 'spock') || (p === 'rock' && c === 'spock')) {
        return 'You lose!!';
    } else if ((p === 'scissors' && c === 'rock') || (p === 'lizard' && c === 'rock')) {
        return 'You lose!!';
    } else if (p === c)
        return 'Its a Draw';

}
//* function to update the scores*//
function (scoreBoard) {
    if (winner === playerChoice) {

        scoreBoard.Player++;
    }
    else if (winner === computer) {
        scoreBoard.computer++;
    }
    console.log(scoreBoard);
}
//* starts the game when an the user selects and option*//
options.forEach(options => options.addEventListener('click', playGame));

