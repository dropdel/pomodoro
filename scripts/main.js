"use strict";
const pomo = document.querySelector(".pomodoro");
const lbreak = document.querySelector(".lbreak");
const sbreak = document.querySelector(".sbreak");
const timer = document.querySelector("time");
const player = document.querySelector("#play");

let minute = { val: null };
let second = { val: null };

let interval;

function removeStyling(el) {
  el.map((a) => {
    a.style.background = "rgb(27, 21, 68)";
    a.style.opacity = "0.5";
    a.style.fontWeight = "lighter";
  });
}

function bgHighlight(e) {
  removeStyling([pomo, lbreak, sbreak]);
  // e.target.style.background = "#D01C1FFF";
  e.target.style.background = "rgb(63,94,251)";
  e.target.style.background = `radial-gradient(circle, rgba(63,94,251,1) 100%, rgba(252,70,107,1) 100%)`;
  e.target.style.opacity = "1";
  e.target.style.fontWeight = "bolder";
  clearInterval(interval);
  player.innerHTML = "play";
  if (e.target.innerHTML.includes("pomodoro")) {
    timer.innerHTML = "25:00";
  } else if (e.target.innerHTML.includes("short break")) {
    timer.innerHTML = "5:00";
  } else {
    timer.innerHTML = "20:00";
  }
}

function countDown() {
  if (minute.val === 0 && second.val === 0) {
    alert("Finished! Will be including an alarm sound soon!");
    clearInterval(interval);
  } else if (second.val === 0 && minute.val !== 0) {
    minute.val--;
    second.val = 59;
  } else if (second.val !== 0) {
    second.val--;
  }
  if (second.val < 10) {
    timer.innerHTML = `${minute.val}:0${second.val}`;
  } else {
    timer.innerHTML = `${minute.val}:${second.val}`;
  }
}

play.addEventListener("click", () => {
  if (player.innerHTML.includes("play")) {
    player.innerHTML = "pause";
    if (timer.innerHTML.includes("25:00")) {
      minute.val = 24;
      second.val = 60;
      interval = setInterval(countDown, 1000);
    } else if (timer.innerHTML.includes("5:00")) {
      minute.val = 4;
      second.val = 60;
      interval = setInterval(countDown, 1000);
    } else if (timer.innerHTML.includes("20:00")) {
      minute.val = 19;
      second.val = 60;
      interval = setInterval(countDown, 1000);
    }
  } else {
    clearInterval(interval);
    player.innerHTML = "play";
  }
});
