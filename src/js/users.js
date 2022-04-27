import { getLocalStorage } from "./score-board.js";

const user_input = document.getElementById("user_input");

const startGameButton = document.getElementById("start_game");

let userList = [];

const addUsers = () => {
  userList.push({ name: user_input.value, score: 0, currentPlaying: "" });
  user_input.value = "";
};

const addUsersToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(userList));
};

const nextPlayer = () => {
  let users = getLocalStorage();
  users[0].currentPlaying = "Current Playing";
};

export { addUsers, userList, addUsersToLocalStorage };
