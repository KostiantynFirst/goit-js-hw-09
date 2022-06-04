import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector('button[data-start]');
// btnStart.disabled = true;
btnStart.addEventListener('click', () => {
    timer.start();

})

let deadLine = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      deadLine = Date.parse(selectedDates[0]);
      console.log(deadLine);
  },
};

flatpickr("#datetime-picker", options);


class Timer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

    }

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        
            const startTime = Date.now();
            const deltaTime = deadLine - startTime;
            const time = this.convertMs(deltaTime);
            this.onTick(time);
        
       
        this.intervalId = setInterval(() => {
            const startTime = Date.now();
            const deltaTime = deadLine - startTime;
            const time = this.convertMs(deltaTime);
            this.onTick(time);
            console.log(startTime);
            console.log(deadLine);
        }, 1000);

        if (deadLine === startTime) {
            clearInterval(this.intervalId);
            this.isActive = false;
            const time = this.convertMs(0)
            this.onTick(time);
        }

        // stop();

    }

    // stop() {
    //         clearInterval(this.intervalId);
    //         this.isActive = false;
    //         const time = this.convertMs(0)
    //         this.onTick(time);
        
    // }

    convertMs(ms) {
  // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

  // Remaining days
    const days = this.pad(Math.floor(ms / day));
  // Remaining hours
    const hours = this.pad(Math.floor((ms % day) / hour));
  // Remaining minutes
    const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
    const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

    pad(value) {
    return String(value).padStart(2, '0');
}
}

const timer = new Timer({
    onTick: updateClockFace
});


function updateClockFace({ days, hours, minutes, seconds }) {
    document.querySelector('span[data-days]').textContent = `${days}`;
    document.querySelector('span[data-hours]').textContent = `${hours}`;
    document.querySelector('span[data-minutes]').textContent = `${minutes}`;
    document.querySelector('span[data-seconds]').textContent = `${seconds}`;
}


