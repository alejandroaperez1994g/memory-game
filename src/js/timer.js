//get the html element thath show the timer
const timerSpan = document.querySelector(".game__timer");

// set seconds and minutes variables
let seconds = 0;
let minutes = 0;
//set timer variable
let timer;

const startTimer = () => {
  timer = setInterval(() => {
    if (minutes === 0) {
      timerSpan.textContent = `${seconds} seconds`;
      console.log(seconds);
      seconds++;
      if (seconds > 59) {
        minutes++;
        seconds = 1;
      }
    } else {
      timerSpan.textContent = `${minutes} minutes ${seconds} seconds`;
      console.log(minutes, seconds);
      seconds++;
      if (seconds > 59) {
        minutes++;
        seconds = 1;
      }
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
};

export { startTimer, stopTimer };
