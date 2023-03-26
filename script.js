const button = document.querySelector(".button");
const winner = document.querySelector(".winner");
// A regEx to accept input only for rock paper and scissors:
const inputReg = /^(Rock|Paper|Scissors)$/;

button.addEventListener("click", () => {
  const userChoice = capitalize(prompt("Choose your weapon:", ""));
  //Check if input matches the regEx:
  if (!inputReg.test(userChoice)) {
    alert("You can only choose from 'Rock', 'Paper', 'Scissors'");
    winner.textContent = "";
    return;
  }
  game(userChoice, getComputerChoice());
});

function winCondition(winText) {
  winner.textContent = winText;

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
function game(playerSelection, computerSelection) {
  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      winCondition("Player won! Paper beats Rock!");
    }
    if (computerSelection === "Scissors") {
      winCondition("Computer won! Scissors beat Paper!");
    }
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      winCondition("Player won! Rock beats Scissors!");
    }
    if (computerSelection === "Paper") {
      winCondition("Computer won! Paper beats Rock!");
    }
  }
  if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      winCondition("Player won! Scissors beat Paper!");
    }
    if (computerSelection === "Rock") {
      winCondition("Computer won! Rock beats Scissors!");
    }
  }
}

// Capitalize the first letter of your input:
function capitalize(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.substring(1);
}
