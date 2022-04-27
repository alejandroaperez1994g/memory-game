const user_input = document.getElementById("user_input");

const startGameButton = document.getElementById("start_game");

let userList = [];

const addUsers = () => {
  userList.push({ name: user_input.value, score: 0 });
  user_input.value = "";
};

export { addUsers, userList };
