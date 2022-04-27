import { checkCards, resetGame } from "./cards.js";
import { startTimer, stopTimer } from "./timer.js";
import { updateScoreboard } from "./score-board.js";
import {
  addUsers,
  userList,
  addUsersToLocalStorage,
  nextPlayer,
} from "./users.js";

const game_board = document.getElementById("game_board");
const start = document.getElementById("start");

// Button, input variables
const difficultyButtons = document.querySelectorAll(".button--difficulty");
const user_input = document.getElementById("user_input");
const usernameButtons = document.querySelectorAll(".button--username");
const addUserButton = document.getElementById("add_user");
const playAgain = document.getElementById("button--play-again");
const scoreboardResults = document.getElementById("scoreboard_section");

// Page variables
const difficultyPage = document.querySelector(".difficulty");
const usernamePage = document.querySelector(".username");
const gamePage = document.querySelector(".game");
const erroMessage = document.getElementById("error_message");
const startGameSessionButton = document.getElementById("startGameSession");

let currentPage = "difficulty";

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
start.addEventListener("click", () => {
  let nodelist = document.getElementById("game_board").children;
  for (let i = 0; i < nodelist.length; i++) {
    nodelist[i].classList.add("flipCard");
    nodelist[i].style.pointerEvents = "none";
  }
  setTimeout(() => {
    for (let i = 0; i < nodelist.length; i++) {
      nodelist[i].classList.remove("flipCard");
      nodelist[i].style.pointerEvents = "all";
    }
    startTimer();
  }, 3000);
  start.disabled = true;
});

//---
playAgain.addEventListener('click', () => {
  difficultyPage.classList.remove("hidden");
  scoreboardResults.classList.add("hidden");
});

// Add event listeners to buttons on difficulty page
difficultyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    processClick(e);
  });
});

// Add event listeners to buttons on difficulty page
usernameButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    processClick(e);
  });
});

// Function to handle button clicks, depending on page.
function processClick(e) {
  if (e.target.id === "add_user" && user_input.value) {
      addUsers();
      console.log(userList);
  } else if (currentPage == "difficulty") {
      difficultyPage.classList.add("hidden");
      usernamePage.classList.remove("hidden");
      currentPage = "username";
  } else if (currentPage == "username") {
    if (userList.length > 0) {
        usernamePage.classList.add("hidden");
        gamePage.classList.remove("hidden");
        currentPage = "game";
        userList[0].currentPlaying = "Current Playing";
        addUsersToLocalStorage();
        updateScoreboard();
    } else {
        erroMessage.textContent = 'You must create a username.'
        erroMessage.classList.remove("invisible");
      setTimeout( () => {
        erroMessage.classList.add("invisible");
      }, 3000);
      
    }
  }
}

shuffleCards();
export { getCards, shuffleCards };
