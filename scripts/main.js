"use strict";
const pomo = document.querySelector(".pomodoro");
const lbreak = document.querySelector(".lbreak");
const sbreak = document.querySelector(".sbreak");

document.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (e) => {
    removeStyling(pomo);
    removeStyling(lbreak);
    removeStyling(sbreak);
    e.path["0"].style.background = "red";
    e.path["0"].style.opacity = "1";
    e.path["0"].style.fontWeight = "bolder";
    console.log("ww");
  });
});

function removeStyling(el) {
  el.style.background = "rgb(27, 21, 68)";
  el.style.opacity = "0.5";
  el.style.fontWeight = "lighter";
}
