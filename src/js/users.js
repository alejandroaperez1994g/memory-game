import { getLocalStorage } from "./score-board.js";

const user_input = document.getElementById("user_input");
const startGameButton = document.getElementById("start_game");

let currentPlayer = 0;
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
    addUsersToLocalStorage();
    console.log("Game Over");
  } else {
    if (currentPlayer > 0) {
      userList[currentPlayer - 1].currentPlaying = "";
    }
    userList[currentPlayer].currentPlaying = "Current Playing";
    currentPlayer++;
    addUsersToLocalStorage();
  }
};

export { addUsers, userList, addUsersToLocalStorage, nextPlayer };
