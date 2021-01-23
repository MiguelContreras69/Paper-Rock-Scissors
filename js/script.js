let playerScore = 0;
let cpuScore = 0;
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
   modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
   if (event.target === modal) {
       toggleModal();
   }       
}

closeButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", restart);
window.addEventListener("click", windowOnClick);

function playRound(playerSelection, computerSelection) {
    let message;
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'paper':
                    message = 'You lose, Paper beats Rock';
                    cpuScore = cpuScore + 1;
                    break;
                case 'scissors':
                    message = 'You win, Rock beats Scissors';
                    playerScore = playerScore + 1;
                    break;

                default:
                    message = 'Choose the same, Tie'
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'scissors':
                    message = 'You lose, Scissors beats Paper';
                    cpuScore = cpuScore + 1;
                    break;
                case 'rock':
                    message = 'You win, Paper beats Rock';
                    playerScore = playerScore + 1;
                    break;

                default:
                    message = 'Choose the same, Tie'
                    break;
            }
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    message = 'You lose, Rock beats Scissors';
                    cpuScore = cpuScore + 1;
                    break;
                case 'paper':
                    message = 'You win, Scissors beats Paper';
                    playerScore = playerScore + 1;
                    break;

                default:
                    message = 'Choose the same, Tie'
                    break;
            }
            break;
    }

    // que aqui actualize el div del puntaje y el mensaje en pantalla
    console.log(message+'  '+playerScore+' - '+cpuScore)
    if(playerScore == 5 || cpuScore == 5){
        endGame();
    }

}

function endGame() {
    // modal appars and button to restart the game 
    toggleModal();
}

function restart() {
    playerScore = 0;
    cpuScore = 0;
    // restart the score marker and the div message of the screen 
    // and hide the modal
}


function game(idButton) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    console.log(playerSelection+' '+computerSelection);
    playRound(playerSelection,computerSelection);
}

function playerPlay(idButton) {
    playerSelection = '';
    console.log(idButton);
    return;
    switch (idButton) {
        case 'playerRock':
            playerSelection = 'rock';
            break;
        case 'playerPaper':
            playerSelection = 'paper';
            break;
        default:
            playerSelection = 'scissors';
            break;
    }
    return playerSelection;
}

function computerPlay() {
    let arrAnswers = ['rock', 'paper', 'scissors'];
    let index = 0;
    index = getRandomInt(0, 3);
    return arrAnswers[index];
}
// returns a random number include min and exclude max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}