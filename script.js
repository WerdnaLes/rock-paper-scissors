const playBtn = document.querySelectorAll(".playBtn");
const resetBtn = document.querySelector(".resetBtn");
const conditions = document.querySelector(".conditions");
const header = document.querySelector(".btn-container-header");
const score = document.querySelector(".score-container");
const rock = document.querySelector(".rock");
const weapon = document.querySelectorAll(".weapon");
const playerDisplay = document.querySelector(".player");
const computerDisplay = document.querySelector(".computer");
// A regEx to accept input only for rock paper and scissors:
const inputReg = /^(Rock|Paper|Scissors)$/;
const player = `You`;
const computer = `Computer`;
let playerScore = 0;
let computerScore = 0;

weapon.forEach((wpn) => {
  wpn.addEventListener("click", () => {
    wpn.classList.add("wpn-active");
    setTimeout(() => {
      wpn.classList.remove("wpn-active");
    }, 200);
    const value = wpn.attributes.name.value;
    playRound(value, getComputerChoice());
  });
});

//Reset button listener:
resetBtn.addEventListener("click", resetGame);

//Check the score and stop the game if the score reached 5:
function winCondition(winText) {
  // const isGameOver = playerScore + computerScore;
  header.textContent = winText;
  // score.innerHTML = `<lab>You:</lab> ${playerScore}, <strong>Computer:</strong> ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    // alert(winnerName());
    header.textContent = winnerName();
    weapon.forEach((element) => {
      element.classList.add("gameOver");
    });
    resetBtn.classList.add("resetActive");
  }
}

// Get a random computer choice:
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 100);

  if (rand <= 33) {
    return "rock";
  } else if (rand <= 66) {
    return "scissors";
  } else {
    return "paper";
  }
}

function displayScore(playerSelection, computerSelection) {
  // arguments.forEach(arg =>{
  //   arg.toLowerCase()
  // })

  playerDisplay.innerHTML = `<label for="player-weapon">You: ${playerScore}</label>
  <img class="weapon-image" name="player-weapon" src="./assets/${playerSelection}.png" alt="" />`;
  computerDisplay.innerHTML = `<label for="computer-weapon">Computer: ${computerScore}</label>
  <img class="weapon-image" name="computer-weapon" src="./assets/${computerSelection}.png" alt="" />`;
}

// Play a game round:
function playRound(playerSelection, computerSelection) {
  //Display Player and computer choices:
  // conditions.innerHTML = `<strong>${player}:</strong> ${playerSelection}<br> <strong>${computer}:</strong> ${computerSelection}`;
  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      winCondition("Paper beats Rock!");
    } else if (computerSelection === "scissors") {
      computerScore++;
      winCondition("Scissors beat Paper!");
    } else winCondition("tie!");
  }
  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      playerScore++;
      winCondition("Rock beats Scissors!");
    } else if (computerSelection === "paper") {
      computerScore++;
      winCondition("Paper beats Rock!");
    } else winCondition("tie!");
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      playerScore++;
      winCondition("Scissors beat Paper!");
    } else if (computerSelection === "rock") {
      computerScore++;
      winCondition("Rock beats Scissors!");
    } else winCondition("tie!");
  }
  displayScore(playerSelection, computerSelection);
}

// Reset game score and empty the fields:
function resetGame() {
  header.textContent = "Choose Your Weapon:";
  // score.textContent = "";
  // conditions.textContent = "";
  playerScore = computerScore = 0;

  playerDisplay.innerHTML = `<label for="player-weapon">You: ${playerScore}</label>
  <img class="weapon-image" name="player-weapon" src="./assets/qstn-mark.png" alt="" />`;
  computerDisplay.innerHTML = `<label for="computer-weapon">Computer: ${computerScore}</label>
  <img class="weapon-image" name="computer-weapon" src="./assets/qstn-mark.png" alt="" />`;

  weapon.forEach((element) => {
    element.classList.remove("gameOver");
  });
  resetBtn.classList.remove("resetActive");
}

// Get a winner if the score reached 5:
function winnerName() {
  if (playerScore === 5) {
    return `${player} won!`;
  } else {
    return `${computer} won`;
  }
}
