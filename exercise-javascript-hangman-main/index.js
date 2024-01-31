const words = ["citronjuice", "marsipan", "mammut", "maskros", "kossa", "lövblåsare", "nyponbuske"];
let gamePlay = false;
const head = document.getElementById("head");
const body = document.getElementById("body");
const arms = document.getElementById("arms");
const legs = document.getElementById("legs");
const scaffold = document.getElementById("scaffold");


const button = document.querySelector(".start-btn");
button.addEventListener("click", (e) => {
  e.target.classList.add("hideButton");
  gamePlay = true;
  while (gamePlay) {
    const spliceWord = words.map((word) => word.replace(/ /g, "").split(""));
    const random = Math.floor(Math.random() * spliceWord.length);
    let i = random;
    console.log(spliceWord[i]);
    let wordArray = spliceWord[i].map((item) => item);
    console.log(wordArray);

    wordArray.forEach((letter) => {
      const newWordString = wordsToHtml(letter, letter.length - 1);
      let letters = document.querySelector(".letters");
      letters.insertAdjacentHTML("beforeend", newWordString);
    });
    window.addEventListener("keydown", function (e) {
      console.log(e.key);
      const keys = document.querySelector(".keys");
      keys.insertAdjacentText("beforebegin", e.key);
      const letterList = document.querySelectorAll(".letter");
      letterList.forEach((l) => {
        if (l.includes(e.key)) {
          legs.style.fill = "black";
          l.classList.add("displayLetter");
        }
      });
    });

    break;
  }
});
function wordsToHtml(wordArray, index) {
  return `
    <div class="letterContainer"> 
        <p class="letter"> ${wordArray[index]}</p>
    </div> 
    `;
}
