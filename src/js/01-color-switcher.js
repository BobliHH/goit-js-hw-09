const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let timer = null;

function onBtnStart() {
  startBtn.disabled = true;

  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
