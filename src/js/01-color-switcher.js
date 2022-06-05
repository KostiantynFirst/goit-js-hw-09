
const refs = {
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]"),
}

let timerId = null;


refs.btnStart.addEventListener('click', () => {
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;
      getRandomHexColor();
      timerId = setInterval(() => {
      getRandomHexColor();    
    }, 1000)
})

refs.btnStop.addEventListener('click', () => {
    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;
    clearInterval(timerId);

})


function getRandomHexColor() {
  return document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

