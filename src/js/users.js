import { getLocalStorage } from "./score-board.js";

const user_input = document.getElementById("user_input");
const startGameButton = document.getElementById("start_game");
const timerSpan = document.querySelector(".game__timer");

let currentPlayer = 1;
let userList = [];

const addUsers = () => {
  userList.push({ name: user_input.value, score: 0, currentPlaying: "" });
  user_input.value = "";
};

const addUsersToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(userList));
};

const nextPlayer = () => {
  userList = getLocalStorage();
  if (currentPlayer === userList.length) {
    userList[currentPlayer - 1].currentPlaying = "";
    userList[currentPlayer - 1].score = timerSpan.textContent;
    addUsersToLocalStorage();
    console.log("Game Over");
  } else {
    userList[currentPlayer - 1].currentPlaying = "";
    userList[currentPlayer].currentPlaying = "Current Playing";
    userList[currentPlayer - 1].score = timerSpan.textContent;
    currentPlayer++;
    addUsersToLocalStorage();
  }
};

export { addUsers, userList, addUsersToLocalStorage, nextPlayer };
