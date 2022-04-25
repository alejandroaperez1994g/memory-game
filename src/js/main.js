import { checkCards, resetGame } from "./cards.js";
const game_board = document.getElementById("game_board");

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

  cards.forEach((item) => {
    let card = document.createElement("div");
    let front = document.createElement("img");
    let back = document.createElement("div");

    card.classList.add("game-board__space");
    front.classList.add("game-board__front-card");
    back.classList.add("game-board__back-card");

    card.setAttribute("name", item.name);
    front.src = item.imgSrc;

    game_board.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.add("flipCard");
      checkCards(e);
    });
  });
};

shuffleCards();

export { getCards };
