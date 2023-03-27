const playBtn = document.querySelector(".playBtn");
const resetBtn = document.querySelector(".resetBtn");
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");
// A regEx to accept input only for rock paper and scissors:
const inputReg = /^(Rock|Paper|Scissors)$/;
let playerScore = 0;
let computerScore = 0;

playBtn.addEventListener("click", () => {
  const userChoice = capitalize(prompt("Choose your weapon:", ""));
  //Check if input matches the regEx:
  if (!inputReg.test(userChoice)) {
    alert("You can only choose from 'Rock', 'Paper', 'Scissors'");
    winner.textContent = "";
    return;
  }
  playRound(userChoice, getComputerChoice());
});

function winCondition(winText) {
  winner.textContent = winText;
  score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;

  // Inserts a new element after a particular element:
  //   newEl.style.display="block"
  //   button.parentNode.insertBefore(newEl, button.nextSibling)
}

// Get a random computer choice:
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 100);

  if (rand <= 33) {
    return "Rock";
  } else if (rand <= 66) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

// Play a game round:
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      winCondition("Player won! Paper beats Rock!");
    } else if (computerSelection === "Scissors") {
      computerScore++;
      winCondition("Computer won! Scissors beat Paper!");
    } else winCondition("tie!");
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerScore++;
      winCondition("Player won! Rock beats Scissors!");
    } else if (computerSelection === "Paper") {
      computerScore++;
      winCondition("Computer won! Paper beats Rock!");
    } else winCondition("tie!");
  }
  if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      playerScore++;
      winCondition("Player won! Scissors beat Paper!");
    } else if (computerSelection === "Rock") {
      computerScore++;
      winCondition("Computer won! Rock beats Scissors!");
    } else winCondition("tie!");
  }
}

function game() {}

function resetGame() {
  winner.textContent = "";
  score.textContent = "";
  playerScore = computerScore = 0;
}

// Capitalize the first letter of your input:
function capitalize(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.substring(1);
}
