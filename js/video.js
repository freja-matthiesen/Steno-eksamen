"use strict";

// Herunder henter vi de nødvendige id'er fra HTML
const video = document.getElementById("tunnel-video");
const startKnap = document.getElementById("start-knap");
const boksKnap = document.getElementById("boks");
const hTOp = document.getElementById("h2");

//vi tilføjer en event listener til knappen, så når den trykkes på, vil videoen starte og knappen forsvinde
startKnap.addEventListener("click", function () {
  video.src = "video/angstanfald/angstanfald.2.0.mp4";
  video.loop = false; //videoen skal ikke loope
  video.muted = false; //videoen skal ikke være muted 
  boksKnap.style.display = "none";
  h2.style.display = "none";
    video.play(); //videoen starter 

    // Når videoen er færdig, vil den gå videre til næste side
    video.onended = function () {
        window.location.href = "storytelling.html";
    };

});