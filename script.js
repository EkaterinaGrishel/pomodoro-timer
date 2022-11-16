
let seconds = 0;
let minutes = 25;
let timerId;
let time = document.querySelector("#pomodoro-time");
const buttonBreak = document.querySelector("#break");
const buttonResert = document.querySelector("#reset");
const buttonStart = document.querySelector("#start");

const start = () => {
  if (buttonStart.textContent === "stop") {
    clearInterval(timerId);
    buttonStart.textContent = "start";
  } else {
    buttonStart.textContent === "stop";
    timerId = setInterval(() => {
      buttonStart.textContent = "stop";

      if (seconds === 0 && minutes > 0) {
        minutes--;
        seconds = 60;
      };
      seconds--;

      if (seconds < 10 && minutes < 10) {
        time.innerHTML = "0" + minutes + ":" + "0" + seconds;
      } else if (seconds >= 10 && minutes < 10) {
        time.innerHTML = "0" + minutes + ":" + seconds;
      } else if (seconds < 10 && minutes > 10) {
        time.innerHTML = minutes + ":" + "0" + seconds;
      } else {
        time.innerHTML = minutes + ":" + seconds;
      };

      if (seconds <= 0 && minutes <= 0) {
        clearInterval(timerId);
        location.reload();
      };
    }, 10);
  }
};

buttonStart.addEventListener('click', start);
