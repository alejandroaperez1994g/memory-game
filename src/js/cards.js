import { getCards } from "./main.js";

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
      // DO SOMETHING ON WON
    }, 1000);
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
    }, 900);
  });
};

const resetGame = () => {
  let dataCards = getCards();
  dataCards.sort(() => Math.random() - 0.5);
  let frontOfCards = document.querySelectorAll(".game-board__front-card");
  let cards = document.querySelectorAll(".game-board__space");
  game_board.style.pointerEvents = "none";

  dataCards.forEach((element, index) => {
    cards[index].classList.remove("flipCard");

    setTimeout(() => {
      frontOfCards[index].src = element.imgSrc;
      cards[index].setAttribute("name", element.name);
      cards[index].style.pointerEvents = "all";

      game_board.style.pointerEvents = "all";
    }, 1000);
  });
};

export { checkCards, resetGame };
