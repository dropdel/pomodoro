"use strict";
const pomo = document.querySelector(".pomodoro");
const lbreak = document.querySelector(".lbreak");
const sbreak = document.querySelector(".sbreak");
const timer = document.querySelector("time");
const player = document.querySelector("#play");
let minute = { val: 0 };
let second = { val: 0 };
let interval;
// Properly organized.
function removeStyling(el) {
  el.style.background = "rgb(27, 21, 68)";
  el.style.opacity = "0.5";
  el.style.fontWeight = "lighter";
}
// Properly organized.
function bgHighlight(e) {
  removeStyling(pomo);
  removeStyling(lbreak);
  removeStyling(sbreak);
  e.target.style.background = "red";
  e.target.style.opacity = "1";
  e.target.style.fontWeight = "bolder";
  clearInterval(interval);
  player.innerHTML = "play";
  console.log(minute.val, second.val);
  if (e.target.innerHTML.includes("pomodoro")) {
    timer.innerHTML = "25:00";
  } else if (e.target.innerHTML.includes("short break")) {
    timer.innerHTML = "5:00";
  } else {
    timer.innerHTML = "20:00";
  }
}
play.addEventListener("click", () => {
  if (player.innerHTML.includes("play")) {
    player.innerHTML = "pause";
    if (timer.innerHTML.includes("25:00")) {
      minute.val = 24;
      second.val = 60;
      interval = setInterval(countDown, 1000, minute);
    } else if (timer.innerHTML.includes("5:00")) {
      minute.val = 4;
      second.val = 60;
      interval = setInterval(countDown, 1000, minute);
    } else if (timer.innerHTML.includes("20:00")) {
      minute.val = 19;
      second.val = 60;
      interval = setInterval(countDown, 1000, minute);
    } else {
      interval = setInterval(countDown, 1000, minute);
    }
  } else {
    clearInterval(interval);
    player.innerHTML = "play";
  }
});

function countDown(min) {
  if (minute.val === 0 && second.val === 0) {
    alert("done!");
    clearInterval(interval);
  }
  if (second.val === 0) {
    minute.val--;
    second.val = 59;
  } else {
    second.val--;
  }
  if (second.val < 10) {
    timer.innerHTML = `${minute.val}:0${second.val}`;
  } else {
    timer.innerHTML = `${minute.val}:${second.val}`;
  }
}
