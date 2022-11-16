let letters = "abcdefghijklmnopqrstuvwxyz";

let letterArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

letterArray.forEach((letter) => {
  let span = document.createElement("span");
  span.className = "letter-box";
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  lettersContainer.appendChild(span);
});

const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scala",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "Parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Ghandi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);

let randomCatgNum = Math.floor(Math.random() * allKeys.length);

let randomCatgValue = allKeys[randomCatgNum];

let randomcatgValueValue = words[randomCatgValue];

let randomcatgValueValueNum = Math.floor(
  Math.random() * randomcatgValueValue.length
);

let chosenWord = randomcatgValueValue[randomcatgValueValueNum];

let category = document.querySelector(".game-info .category span");

let catgNode = document.createTextNode(randomCatgValue);

category.appendChild(catgNode);

let lettersGuess = document.querySelector(".letters-guess");
let chosenArr = Array.from(chosenWord);

chosenArr.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === " ") {
    emptySpan.className = "with-space";
  }

  lettersGuess.appendChild(emptySpan);
});

let arrOfSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;
let thDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {
  let wrongStatus = false;

  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");

    let clickedLetter = e.target.innerHTML.toLowerCase();

    let theLOwerChosenArr = Array.from(chosenWord.toLowerCase());

    theLOwerChosenArr.forEach((wordLetter, wordIndex) => {

      if (clickedLetter == wordLetter) {
        wrongStatus = true;

        arrOfSpans.forEach((span, spanIndex) => {
          if (spanIndex == wordIndex) {
            span.innerHTML = clickedLetter;
          }
        });
      }
    });
    //outside loop

    if (wrongStatus == false) {
      wrongAttempts++;
      thDraw.classList.add(`wrong-${wrongAttempts}`);
      document.getElementById("fail").play();
    } else {
      document.getElementById("success").play();
    }
  }
  let lettersCont = document.querySelector(".letters");

  if (wrongAttempts === 8) {
    lettersCont.classList.add("finished");
    endGame();
  }
});
let container = document.querySelector(".container");
function endGame() {
  let div = document.createElement("div");
  div.classList.add("popup");
  let divText = document.createTextNode(
    `Game over , The word Was '${chosenWord}'`
  );
  div.appendChild(divText);
  container.appendChild(div);
}
