"use strict";

const video = document.getElementById("tunnel-video");
const startKnap = document.getElementById("start-knap");
const boksKnap = document.getElementById("boks");
const hTOp = document.getElementById("h2");

startKnap.addEventListener("click", function () {
  video.src = "video/angstanfald/angstanfald.2.0.mp4";
  video.loop = false;
  video.muted = false;
  boksKnap.style.display = "none";
  h2.style.display = "none";
    video.play();
});