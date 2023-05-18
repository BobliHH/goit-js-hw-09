import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let currentdate = Date.now();
const calendar = document.querySelector('datetime-picker');
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const selectedDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0].getTime() < currentdate) {
          alert("Please choose a date in the future")
        }
        else {
            selectedDate = selectedDates[0].getTime();
            console.log(selectedDates[0]);
            startBtn.disabled = false;
        }
  },
};