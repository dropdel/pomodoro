"use strict";
const pomo = document.querySelector(".pomodoro");
const lbreak = document.querySelector(".lbreak");
const sbreak = document.querySelector(".sbreak");
const timer = document.querySelector("time");
function removeStyling(el) {
  el.style.background = "rgb(27, 21, 68)";
  el.style.opacity = "0.5";
  el.style.fontWeight = "lighter";
}
function bgHighlight(e) {
  removeStyling(pomo);
  removeStyling(lbreak);
  removeStyling(sbreak);
  e.target.style.background = "red";
  e.target.style.opacity = "1";
  e.target.style.fontWeight = "bolder";
  if (e.target.innerHTML.includes("pomodoro")) {
    timer.innerHTML = "25:00";
  } else if (e.target.innerHTML.includes("short break")) {
    timer.innerHTML = "5:00";
  } else {
    timer.innerHTML = "20:00";
  }
}
