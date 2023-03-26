const button = document.querySelector(".button");
const winner = document.querySelector(".winner");

button.addEventListener("click", create);

function create() {
  winner.textContent = getComputerChoice();

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
