const scoreboardResults = document.getElementById("player__results");

const getScoreboard = () => {
  let users = getLocalStorage();
  users.forEach((users) => {
    let trElement = document.createElement("tr");
    let thElementName = document.createElement("th");
    let thElementTime = document.createElement("th");
    let thElementCurrent = document.createElement("th");

    thElementName.textContent = users.name;
    thElementTime.textContent = users.time;
    thElementCurrent.textContent = users.currentPlaying;
    trElement.appendChild(thElementName);
    trElement.appendChild(thElementTime);
    trElement.appendChild(thElementCurrent);
    scoreboardResults.appendChild(trElement);
  });
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("users"));
};

const updateScoreboard = () => {
  while (scoreboardResults.firstChild) {
    scoreboardResults.removeChild(scoreboardResults.lastChild);
  }
  getScoreboard();
};

export { getLocalStorage };
