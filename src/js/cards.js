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

export { checkCards };
