const words = ["citronjuice", "marsipan", "mammut", "maskros", "kossa", "lövblåsare", "nyponbuske"];
let gamePlay = false;
let wrongGuessCount = 0;
const head = document.getElementById("head");
const body = document.getElementById("body");
const arms = document.getElementById("arms");
const ground = document.getElementById("ground");
const legs = document.getElementById("legs");
const scaffold = document.getElementById("scaffold");
const imgParts = [];
imgParts.push(head, arms, legs, ground, body, scaffold);
//Make an array of each word in the array
const spliceWord = words.map((word) => word.replace(/ /g, "").split(""));

//Chose a random word
function getRandomWord(spliceWord) {
  const random = Math.floor(Math.random() * spliceWord.length);
  let i = random;
  return spliceWord[i];
}

// define word array
function addRandomWordToDom(spliceWord) {
  spliceWord.forEach((letter) => {
    const newWordString = wordsToHtml(letter, letter.length - 1);
    let letters = document.querySelector(".letters");
    letters.insertAdjacentHTML("beforeend", newWordString);
  });
}

const random = Math.floor(Math.random() * spliceWord.length);
let i = random;
const button = document.querySelector(".start-btn");
button.addEventListener("click", (e) => {
  e.target.classList.add("hideButton");
  gamePlay = true;
  while (gamePlay) {
    getRandomWord(i);
    console.log(spliceWord[i]);
    addRandomWordToDom(spliceWord);
    window.addEventListener("keydown", letterCheck);
    break;
  }
});
function wordsToHtml(spliceWord, index) {
  return `
    <div class="letterContainer">
        <p class="letter"> ${spliceWord[index]}</p>
    </div>
    `;
}

function letterCheck(e) {
  console.log(e.key);
  const keys = document.querySelector(".keys");
  keys.insertAdjacentText("beforebegin", e.key);
  const secretWord = Array.from(document.querySelectorAll(".letter"));
  let isGuessCorrect = false;
  secretWord.forEach((secretLetter) => {
    console.log(secretLetter.textContent);
    console.log(e.key);
    if (secretLetter.textContent.trim() === e.key) {
      secretLetter.style.display = "block";
      isGuessCorrect = true;
    }
  });
  if (!isGuessCorrect) {
    wrongGuessCount++;
    updatePictureAfterGuess(wrongGuessCount);
  }
}

function updatePictureAfterGuess(wrongGuessCount) {
  if (wrongGuessCount === 1) {
    imgParts[3].style.fillOpacity = "1";
  }
  if (wrongGuessCount === 3) {
    imgParts[0].style.fill = "black";
  }
  if (wrongGuessCount === 5) {
    imgParts[1].style.fill = "black";
  }
  if (wrongGuessCount === 7) {
    imgParts[2].style.fill = "black";
  }
  if (wrongGuessCount === 9) {
    imgParts[4].style.fill = "black";
  }
  if (wrongGuessCount === 10) {
    imgParts[5].style.fill = "black";
  }
}
// letter.textContent.trim() === e.key ? (letter.style.display = "block") : null;
