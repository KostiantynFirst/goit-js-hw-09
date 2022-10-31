
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let timer = null;

const chageBodyColor = () => {
    body.style.backgroundColor = getRandomHexColor();
}

const startSwitcher = () => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    chageBodyColor();
    timer = setInterval(() => {
        chageBodyColor();
        console.log('startSwitcher')
    }, 1000)
}

const stopSwitcher = () => {
    buttonStart.disabled = false;
    buttonStop.disabled = true;
    clearInterval(timer);
}

buttonStart.addEventListener("click", startSwitcher);
buttonStop.addEventListener("click", stopSwitcher);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }