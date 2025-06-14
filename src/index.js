// task 1
const getString = document.querySelector(".test");
let acc = 0;
const interval = setInterval(() => {
  getString.innerHTML = acc++;
  if (acc === 6) {
    clearInterval(interval);
  }
}, 1000);
// task 2
const getTitle = document.querySelector(".word");
const getBox = document.querySelector(".box2");

let scale = 1;
const maxScale = 2.5;
const step = 0.5;

const int2 = setInterval(() => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  getTitle.style.color = `rgb(${r}, ${g}, ${b})`;

  if (scale < maxScale) {
    scale += step;
    getBox.style.transform = `scale(${scale})`;
  }
}, 1000);
// task 3
const getBtn = document.querySelector(".btn");
const getStartBtn = document.querySelector(".start-btn");
const getCount = document.querySelector(".count");
const getTime = document.querySelector(".time");

let sec = 0;
let score = 0;
let int3;

function startGame() {
  clearInterval(int3);
  sec = 30;
  score = 0;

  getTime.textContent = sec;
  getCount.textContent = score;

  int3 = setInterval(() => {
    sec -= 1;
    getTime.textContent = sec;

    if (sec <= 0) {
      clearInterval(int3);
    }
  }, 1000);
}

function gameClick() {
  score += 1;
  getCount.textContent = score;
}

getStartBtn.addEventListener("click", startGame);
getBtn.addEventListener("click", gameClick);

// task4
const getBtnStart = document.querySelector(".time-start-btn");
const getInput = document.querySelector(".time-input");
const getMessage = document.querySelector(".message4");

function startTime() {
  const secondsInput = Number(getInput.value);
  getMessage.textContent = "Очікуємо.."

  setTimeout(() => {
    getMessage.textContent = `Пройшло ${secondsInput} секунд`;
    
  }, secondsInput * 1000)
}

getBtnStart.addEventListener("click", startTime)
