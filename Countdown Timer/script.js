"use strict";

const countdown = function () {
  const myBirthday = new Date("6 Dec 2023");
  const currentDate = new Date();
  const millisecondsLeft = myBirthday - currentDate;
  const daysLeft = millisecondsLeft / (1000 * 60 * 60 * 24);
  const days = Math.floor(daysLeft);
  const hoursLeft = (daysLeft - days) * 24;
  const hours = Math.floor(hoursLeft);
  const minutesLeft = (hoursLeft - hours) * 60;
  const minutes = Math.floor(minutesLeft);
  const secondsLeft = (minutesLeft - minutes) * 60;
  const seconds = Math.floor(secondsLeft);
  document.querySelector("#seconds").textContent = seconds;
  document.querySelector("#mins").textContent = minutes;
  document.querySelector("#hours").textContent = hours;
  document.querySelector("#days").textContent = days;
};

let birthday = setInterval(countdown, 1000);
