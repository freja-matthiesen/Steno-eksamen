"use strict";
window.onscroll = function () {
    myScrollFunction();
  };
  
  // Funktion der styrer pigens bevægelse ved scrolling
  function myScrollFunction() {
    // Finder pigens HTML-element ved id'et "pige"
    const pige = document.getElementById("pige");
    // Finder scrollTop værdien, som er hvor langt siden er scrollet ned
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // Hvis scrollTop er større end 100, tilføj klassen "move-up" til pigen
    if (scrollTop > 100) {
      pige.classList.add("move-up"); //pigen flytter sig op
    } else {
      pige.classList.remove("move-up");//pigen går tilbage til start
    }
  }