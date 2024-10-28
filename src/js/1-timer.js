`use strict`
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

let userSelectedDate = null;
let timerInterval = null;
const BtnStart = document.querySelector("button[data-start]");
const timeContainer = document.querySelector(".timer")
const input = document.getElementById("datetime-picker");
const daysDisplay = document.querySelector("[data-days]");
const hoursDisplay = document.querySelector("[data-hours]");
const minutesDisplay = document.querySelector("[data-minutes]");
const secondsDisplay = document.querySelector("[data-seconds]");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0]; 
        console.log("Selected Date:", userSelectedDate.getTime());
        Timer.checkDate();
    },
};

flatpickr("#datetime-picker", options);
BtnStart.disabled = true;

class Timer {
    static checkDate() {
        if(userSelectedDate.getTime() < Date.now()){
            iziToast.show({
                title: 'Error',
                message: 'Please choose a date in the future',
                color: "red"
            });
            BtnStart.disabled = true;
        } else {
            BtnStart.disabled = false;
        }
    }

    static start() {
        BtnStart.disabled = true;
        input.disabled = true;
        timerInterval = setInterval(()=>{
            const currentTime = Date.now();
            const DeltaTime = userSelectedDate.getTime() - currentTime;

            if(DeltaTime <= 0){
                clearInterval(timerInterval);
                input.disabled = false;
                BtnStart.disabled = false; 
                return;
            }
            const { days, hours, minutes, seconds } = Timer.convertMs(DeltaTime);
            daysDisplay.textContent = Timer.addLeadingZero(days);
            hoursDisplay.textContent = Timer.addLeadingZero(hours);
            minutesDisplay.textContent = Timer.addLeadingZero(minutes);
            secondsDisplay.textContent = Timer.addLeadingZero(seconds);
        }, 1000);  
    }

    static convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        return { days, hours, minutes, seconds };
    }

    static addLeadingZero(value) {
                return String(value).padStart(2, "0");
            }
};
BtnStart.addEventListener("click", Timer.start.bind(Timer));