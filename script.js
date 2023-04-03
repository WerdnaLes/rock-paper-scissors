const resetBtn = document.querySelector(".resetBtn");
const conditions = document.querySelector(".conditions");
const header = document.querySelector(".weapon-container-header");
const score = document.querySelector(".score-container");
const weapon = document.querySelectorAll(".weapon");
const playerChoice = document.querySelector(".player");
const computerChoice = document.querySelector(".computer");

let playerScore = 0;
let computerScore = 0;

// Event listener for weapon images:
weapon.forEach((wpn) => {
  wpn.addEventListener("click", () => {
    wpn.classList.add("wpn-active");
    setTimeout(() => {
      wpn.classList.remove("wpn-active");
    }, 200);
    const weaponName = wpn.attributes.name.value;
    playRound(weaponName, getComputerChoice());
  });
});

//Reset button listener:
resetBtn.addEventListener("click", resetGame);

// Play a game round:
function playRound(playerSelection, computerSelection) {
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

//Check the score and stop the game if the score reached 5:
function winCondition(winText) {
  header.textContent = winText;
  if (playerScore === 5 || computerScore === 5) {
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
  playerChoice.innerHTML = `<label for="player-weapon">You: ${playerScore}</label>
  <img class="weapon-image" name="player-weapon" src="./assets/${playerSelection}.png" />`;
  computerChoice.innerHTML = `<label for="computer-weapon">Computer: ${computerScore}</label>
  <img class="weapon-image" name="computer-weapon" src="./assets/${computerSelection}.png" />`;
}

// Reset game score and empty the fields:
function resetGame() {
  header.textContent = "Choose Your Weapon:";
  playerScore = computerScore = 0;

  playerChoice.innerHTML = `<label for="player-weapon">You: ${playerScore}</label>
  <img class="weapon-image" name="player-weapon" src="./assets/qstn-mark.png"/>`;
  computerChoice.innerHTML = `<label for="computer-weapon">Computer: ${computerScore}</label>
  <img class="weapon-image" name="computer-weapon" src="./assets/qstn-mark.png"/>`;

  weapon.forEach((element) => {
    element.classList.remove("gameOver");
  });
  resetBtn.classList.remove("resetActive");
}

// Get a winner if the score reached 5:
function winnerName() {
  if (playerScore === 5) {
    return `You won!`;
  } else {
    return `Computer won`;
  }
}
