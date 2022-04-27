import { checkCards, resetGame } from "./cards.js";
import { startTimer, stopTimer } from "./timer.js";

const game_board = document.getElementById("game_board");
const start = document.getElementById("start");

// Button variables
const difficultyButtons = document.querySelectorAll('.button--difficulty');
const usernameButtons = document.querySelectorAll('.button--username');

// Page variables
const difficultyPage = document.querySelector('.difficulty');
const usernamePage = document.querySelector('.username');
const gamePage = document.querySelector('.game');


let currentPage = 'difficulty';

const getCards = () => [
  { imgSrc: "./src/assets/img/1.png", name: "c#" },
  { imgSrc: "./src/assets/img/2.png", name: "c++" },
  { imgSrc: "./src/assets/img/3.png", name: "c" },
  { imgSrc: "./src/assets/img/4.png", name: "go" },
  { imgSrc: "./src/assets/img/5.png", name: "java" },
  { imgSrc: "./src/assets/img/6.png", name: "js" },
  { imgSrc: "./src/assets/img/7.png", name: "php" },
  { imgSrc: "./src/assets/img/8.png", name: "python" },
  { imgSrc: "./src/assets/img/1.png", name: "c#" },
  { imgSrc: "./src/assets/img/2.png", name: "c++" },
  { imgSrc: "./src/assets/img/3.png", name: "c" },
  { imgSrc: "./src/assets/img/4.png", name: "go" },
  { imgSrc: "./src/assets/img/5.png", name: "java" },
  { imgSrc: "./src/assets/img/6.png", name: "js" },
  { imgSrc: "./src/assets/img/7.png", name: "php" },
  { imgSrc: "./src/assets/img/8.png", name: "python" },
];

const shuffleCards = () => {
  let cards = getCards();
  cards.sort(() => Math.random() - 0.5);

  let i = 1;

  cards.forEach((item) => {
    let card = document.createElement("div");
    let front = document.createElement("img");
    let back = document.createElement("div");

    card.classList.add("game-board__space");
    front.classList.add("game-board__front-card");
    back.classList.add("game-board__back-card");

    card.setAttribute("name", item.name);
    back.setAttribute("data", i);
    front.src = item.imgSrc;

    game_board.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("flipCard");
      checkCards(e);
    });
    i += 1;
  });
};

//Show cards for three secs
game_board.style.pointerEvents = "none";
start.addEventListener('click', () => {
    let nodelist = document.querySelector('#game_board').children;
    for(let i = 0; i < nodelist.length; i++){
        nodelist[i].classList.add("flipCard");
        nodelist[i].style.pointerEvents = "none";
    }
    setTimeout(() => {
        for(let i = 0; i < nodelist.length; i++){
            nodelist[i].classList.remove("flipCard");
            nodelist[i].style.pointerEvents = "all";
        }
    }, 3000);
    start.disabled = true;
});

// Add event listeners to buttons on difficulty page
difficultyButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    processClick(e);
  });
});

// Add event listeners to buttons on difficulty page
usernameButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
  processClick(e);
  });
});

// Function to handle button clicks, depending on page.
function processClick (e) {
  console.log(e)
   if (currentPage == 'difficulty') {
     difficultyPage.classList.add('hidden');
     usernamePage.classList.remove('hidden');
     currentPage = 'username';
   } else if (currentPage == 'username') {
    usernamePage.classList.add('hidden');
    gamePage.classList.remove('hidden');
    currentPage = 'game';
   }
   
}

shuffleCards();
export { getCards, shuffleCards };