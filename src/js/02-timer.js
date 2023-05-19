import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let currentDate = Date.now();
const calendar = document.querySelector('datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const selectedDate = null;
const flatpickrinput = document.querySelector('#datetime-picker');
const timer = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < currentDate) {
          alert("Please choose a date in the future")
        }
        else {
            selectedDate = selectedDates[0].getTime();
            console.log(selectedDates[0]);
            startBtn.disabled = false;
        }
  },
};

const picker = flatpickr(flatpickrinput, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addZeroBefore(Math.floor(ms / day));
    const hours = addZeroBefore(Math.floor((ms % day) / hour));
    const minutes = addZeroBefore(Math.floor(((ms % day) % hour) / minute));
    const seconds = addZeroBefore(Math.floor(((ms % day) % hour % minute) / second));
    
    return { days, hours, minutes, seconds };
}

const counter =  {
    start() {
        let intervalId = setInterval(() => {
            const remainingTime = selectedDate - currentDate;
            startBtn.disabled = true;
            flatpickr.disabled = true;
       })
    }
}

function updateTimer({ days, hours, minutes, seconds }) {
    dataDays = days;
    dataHours = hours;
    dataMinutes = minutes;
    dataSeconds = seconds;
}

function addZeroBefore(value) {
  return String(value).padStart(2, '0');
}

