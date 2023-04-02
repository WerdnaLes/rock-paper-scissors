const playBtn = document.querySelectorAll(".playBtn");
const resetBtn = document.querySelector(".resetBtn");
const conditions = document.querySelector(".conditions");
const header = document.querySelector(".btn-container-header");
const score = document.querySelector(".score");
const rock = document.querySelector(".rock");
const weapon = document.querySelectorAll(".weapon");
// A regEx to accept input only for rock paper and scissors:
const inputReg = /^(Rock|Paper|Scissors)$/;
const player = `You`;
const computer = `Computer`;
let playerScore = 0;
let computerScore = 0;

// Play button listener:
playBtn.forEach((element) => {
  element.addEventListener("click", () => {
    const userChoice = element.textContent;
    playRound(userChoice, getComputerChoice());
  });
});

// rock.addEventListener("click", () => {
//   const value = rock.attributes.name.value;
//   playRound(value, getComputerChoice());
// });

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
  const isGameOver = playerScore + computerScore;
  header.textContent = winText;
  score.innerHTML = `<strong>You:</strong> ${playerScore}, <strong>Computer:</strong> ${computerScore}`;
  if (isGameOver === 5) {
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
  conditions.innerHTML = `<strong>${player}:</strong> ${playerSelection}<br> <strong>${computer}:</strong> ${computerSelection}`;
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
  header.textContent = "Choose Your Weapon:";
  score.textContent = "";
  conditions.textContent = "";
  playerScore = computerScore = 0;

  weapon.forEach((element) => {
    element.classList.remove("gameOver");
  });
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
    return `${player} won!`;
  } else {
    return `${computer} won`;
  }
}
