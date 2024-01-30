const words = ["citronjuice", "marsipan", "mammut", "maskros", "kossa", "lövblåsare", "nyponbuske"];
let gamePlay = false;
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
     
     const letters = document.querySelector("letters")
     
  const container = document.createElement("div");
  container.classList.add(box);
   letters.insertAdjacentHTML("beforebegin", container)
    const box = document.querySelector(".box");
       const l = document.createElement("p");
      l.innerText = string;
      box.insertAdjacentHTML("beforebegin", l);
    } )
    console.log(l);

    break;
  }
});
