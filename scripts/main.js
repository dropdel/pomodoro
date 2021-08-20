"use strict";
const pomo = document.querySelector(".pomodoro");
const lbreak = document.querySelector(".lbreak");
const sbreak = document.querySelector(".sbreak");

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (e) => {
    pomo.style.background = "rgb(27, 21, 68)";
    lbreak.style.background = "rgb(27, 21, 68)";
    sbreak.style.background = "rgb(27, 21, 68)";
    e.path["0"].style.background = "red";
    console.log("ww");
  });
});
