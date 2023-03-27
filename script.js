const playBtn = document.querySelectorAll(".playBtn");
const resetBtn = document.querySelector(".resetBtn");
const conditions = document.querySelector(".conditions");
const header = document.querySelector('.btn-container-header')
const winner = document.querySelector(".winner");
const score = document.querySelector(".score");
// A regEx to accept input only for rock paper and scissors:
const inputReg = /^(Rock|Paper|Scissors)$/;
let playerScore = 0;
let computerScore = 0;

// Play button listener:
playBtn.forEach((element) => {
  element.addEventListener("click", (event) => {
    // const userChoice = capitalize(prompt("Choose your weapon:", ""));
    const userChoice = element.textContent;
    //Check if input matches the regEx:
    // if (!inputReg.test(userChoice)) {
    //   alert("You can only choose from 'Rock', 'Paper', 'Scissors'");
    //   winner.textContent = "";
    //   return;
    // }
    playRound(userChoice, getComputerChoice());
  });
});

//Reset button listener:
resetBtn.addEventListener("click", resetGame);

//Check the score and stop the game if the score reached 5:
function winCondition(winText) {
  const isGameOver = playerScore + computerScore;
  winner.textContent = winText;
  score.innerHTML = `You: ${playerScore}, Computer: ${computerScore}`
    .replace("You", "<strong>You</strong>")
    .replace("Computer", "<strong>Computer</strong>");
  if (isGameOver === 5) {
    // alert(winnerName());
    winner.textContent = winnerName();
    playBtn.forEach((element) => {
      element.classList.add("gameOver");
    });
    resetBtn.classList.add("resetActive");
  }

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
  //Display Player and computer choices:
  conditions.innerHTML =
    `You: ${playerSelection}, Computer: ${computerSelection}`
      .replace("You", "<strong>You</strong>")
      .replace("Computer", "<strong>Computer</strong>");
  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      playerScore++;
      winCondition("Paper beats Rock!");
    } else if (computerSelection === "Scissors") {
      computerScore++;
      winCondition("Scissors beat Paper!");
    } else winCondition("tie!");
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      playerScore++;
      winCondition("Rock beats Scissors!");
    } else if (computerSelection === "Paper") {
      computerScore++;
      winCondition("Paper beats Rock!");
    } else winCondition("tie!");
  }
  if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      playerScore++;
      winCondition("Scissors beat Paper!");
    } else if (computerSelection === "Rock") {
      computerScore++;
      winCondition("Rock beats Scissors!");
    } else winCondition("tie!");
  }
}

// Reset game score and empty the fields:
function resetGame() {
  winner.textContent = "Choose Your Weapon:";
  score.textContent = "";
  conditions.textContent = "";
  playerScore = computerScore = 0;

  playBtn.forEach((element) => {
    element.classList.remove("gameOver");
  });
  // playBtn.classList.remove("gameOver");
  resetBtn.classList.remove("resetActive");
}

// Capitalize the first letter of your input:
function capitalize(str) {
  str = str.toLowerCase();
  return str.charAt(0).toUpperCase() + str.substring(1);
}

// Get a winner if the score reached 5:
function winnerName() {
  if (playerScore > computerScore) {
    return "You won!";
  } else {
    return "Computer won!";
  }
}
