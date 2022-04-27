import { getCards, shuffleCards } from "./main.js";
import { stopTimer, resetTime } from "./timer.js";
import { nextPlayer } from "./users.js";
import { updateScoreboard } from "./score-board.js";

const start = document.getElementById("start");

const checkCards = (e) => {
  let flipCard = e.target;
  flipCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const matchedCards = document.querySelectorAll(".flipCard");
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      setMatch(flippedCards);
    } else {
      resetDuo(flippedCards);
    }
  }
  if (matchedCards.length === 16) {
    setTimeout(() => {
      stopTimer();
      nextPlayer();
      updateScoreboard();
      resetGame();
    }, 2000);
  }
};

const setMatch = (flippedCards) => {
  flippedCards.forEach((element) => {
    element.classList.remove("flipped");
    element.style.pointerEvents = "none";
  });
};

const resetDuo = (flippedCards) => {
  game_board.style.pointerEvents = "none";
  flippedCards.forEach((element) => {
    element.classList.toggle("flipped");
    setTimeout(() => {
      element.classList.toggle("flipCard");
      game_board.style.pointerEvents = "all";
    }, 1000);
  });
};

const resetGame = () => {
  // let dataCards = getCards();
  // dataCards.sort(() => Math.random() - 0.5);
  // let frontOfCards = document.querySelectorAll(".game-board__front-card");
  // let cards = document.querySelectorAll(".game-board__space");

  // game_board.style.pointerEvents = "none";

  // dataCards.forEach((element, index) => {
  //   cards[index].classList.remove("flipCard");

  //   setTimeout(() => {
  //     frontOfCards[index].src = element.imgSrc;
  //     cards[index].setAttribute("name", element.name);
  //     cards[index].style.pointerEvents = "all";

  //     game_board.style.pointerEvents = "all";
  //   }, 1000);
  // });
  while (game_board.firstChild) {
    game_board.removeChild(game_board.lastChild);
  }
  shuffleCards();
  resetTime();
  start.disabled = false;
};

export { checkCards, resetGame };
