const button = document.querySelector(".start-btn");
const usedLetters = document.querySelector(".used-letters");
const letters = document.querySelector(".letters");
const letterContainer = document.querySelector(".letterContainer");
const letter = document.querySelector(".letter");
const head = document.getElementById("head");
const arms = document.getElementById("arms");
const ground = document.getElementById("ground");
const legs = document.getElementById("legs");
const scaffold = document.getElementById("scaffold");
const overlay = document.querySelector(".overlay");
const images = document.querySelectorAll("path");

const imgParts = [head, arms, legs, ground, body, scaffold];
const words = ["citronjuice", "marsipan", "mammut", "maskros", "ko", "lövblåsare", "nyponbuske"];

let wrongGuessCount = 0;
let correctGuessCount = 0;

//Chose a random word
function getRandomWordFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// define word array
function addSecretWordToDom(secretWordArray) {
  const secretWordHtml = secretWordArray
    .map(
      (letter) => `
    <div class="letterContainer">
        <p class="letter">${letter}</p>
    </div>
    `
    )
    .join("");

  letters.innerHTML = secretWordHtml;
}

button.addEventListener("click", (e) => {
  images.forEach((image) => {
    image.style.fill = "#eee";
  });
  usedLetters.innerHTML = `<div> </div>`;
  e.target.classList.add("hideButton");
  wrongGuessCount = 0;
  correctGuessCount = 0;
  const secretWord = getRandomWordFromArray(words);
  const secretWordArray = secretWord.split("");
  console.log(secretWordArray);
  addSecretWordToDom(secretWordArray);
  window.addEventListener("keydown", letterCheck);
});

function letterCheck(e) {
  usedLetters.insertAdjacentText("beforeend", e.key);
  const secretWord = Array.from(document.querySelectorAll(".letter"));
  let isGuessCorrect = false;

  secretWord.forEach((secretLetter) => {
    console.log(secretLetter.textContent);
    console.log(e.key);
    if (secretLetter.textContent === e.key) {
      secretLetter.style.display = "block";
      isGuessCorrect = true;
      correctGuessCount++;
    }
  });
  if (!isGuessCorrect) {
    wrongGuessCount++;
    updatePictureAfterGuess(wrongGuessCount);
  }

  if (secretWord.length === correctGuessCount) {
    button.classList.remove("hideButton");
    button.innerText = "Try Again";
    usedLetters.innerHTML = `<div> <h1>Congratulations!!! You won!!</h1> </div>`;
  }
}

function updatePictureAfterGuess(wrongGuessCount) {
  if (wrongGuessCount === 0) {
    imgParts[3].style.fillOpacity = "0.2";
    imgParts[0].style.fill = "#eee";
    imgParts[1].style.fill = "#eee";
    imgParts[2].style.fill = "#eee";
    imgParts[4].style.fill = "#eee";
    imgParts[5].style.fill = "#eee";
  }
  if (wrongGuessCount === 1) {
    imgParts[3].style.fillOpacity = "1";
  }
  if (wrongGuessCount === 2) {
    imgParts[0].style.fill = "black";
  }
  if (wrongGuessCount === 3) {
    imgParts[5].style.fill = "black";
  }
  if (wrongGuessCount === 4) {
    imgParts[2].style.fill = "black";
  }
  if (wrongGuessCount === 5) {
    imgParts[1].style.fill = "black";
  }
  if (wrongGuessCount === 6) {
    imgParts[4].style.fill = "black";
    button.classList.remove("hideButton");
    button.innerText = "Try Again";
    usedLetters.innerHTML = `<div> <h1>Game over! :(</h1> </div>`;
  }
}
