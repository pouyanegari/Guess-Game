let randomNumber = Math.ceil(Math.random() * 100);

const clientGuessInput = document.querySelector("#clientGuess");
const submit = document.querySelector("#submit");

const clientPervGuesses = document.querySelector(".clientPervGuesses");
const clientShots = document.querySelector(".clientShots");
const rightOrWrong = document.querySelector(".rightOrWrong");
const highOrLow = document.querySelector(".highOrLow");

let counter = 1;
let resetButton;

submit.addEventListener("click", submitNumber);
function submitNumber() {
  let clientGuess = Number(clientGuessInput.value);
  if (counter === 1) {
    let randomNumber = Math.ceil(Math.random() * 100);
    clientPervGuesses.textContent = `Previous Guesses : `;
    clientShots.textContent = "";
  }
  clientPervGuesses.textContent += clientGuess + " - ";
  clientShots.textContent = "Your Chanses : " + (10 - counter);

  if (clientGuess === randomNumber) {
    rightOrWrong.textContent = "Damn Right ! You Made It My friend ;D !";
    rightOrWrong.style.backgroundColor = "green";
    highOrLow.textContent = "";
    endGame();
  } else if (counter === 10) {
    rightOrWrong.textContent = "You Lost The Game :(  !";
    rightOrWrong.style.backgroundColor = "red";
    highOrLow.textContent = "";
    endGame();
  } else {
    rightOrWrong.textContent = "Wrong babe ! Give it Another Try .";
    rightOrWrong.style.backgroundColor = "orange";
    if (clientGuess < randomNumber) {
      highOrLow.textContent = "(Hint) Use A Bigger Number Please";
    } else if (clientGuess > randomNumber) {
      highOrLow.textContent = "(Hint) Use A Smaller Number Please";
    }
  }

  counter++;
  clientGuessInput.value = "";
  clientGuessInput.focus();
}
function endGame() {
  clientGuessInput.disabled = true;
  submit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "From The Beggining ?";
  document.body.appendChild(resetButton);
  resetButton.classList.add("resetBtn");
  resetButton.addEventListener("click", resetGame);
}
function resetGame() {
  counter = 1;
  const answers = document.querySelectorAll(".answers .container p");
  for (i = 0; i < answers.length; i++) {
    answers[i].textContent = "";
  }
  document.body.removeChild(resetButton);
  clientGuessInput.disabled = false;
  submit.disabled = false;
  clientGuessInput.value = "";
  clientGuessInput.focus();
  rightOrWrong.style.backgroundColor = "white";
  randomNumber = Math.ceil(Math.random() * 100);
}
