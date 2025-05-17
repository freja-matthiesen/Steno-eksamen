"use strict";
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const billede = document.getElementById("tunnel");

  // Zoom-faktor
  const scale = 1 + scrollY / 500;
  // Flyt billedet nedad i forhold til scrollY (juster faktor efter behov)
  const translateY = scrollY * 1;  // prøv fx 0.5 - jo større tal, jo hurtigere ryger billedet nedad
  const pige = document.getElementById("pige");

  if (scrollY > 1600) {
    window.location.href = "motionsgrafik.html";
  } else if (scrollY > 1450) {
    billede.src = "img/hvid-baggrund.png";
    billede.style.width = "100%";
    pige.style.display = "none";
  } else if (scrollY > 500) {
    billede.src = "img/hoved-til-brug.png";
    pige.style.display = "block";
  }

  billede.style.transform = `translateY(${translateY}px) scale(${scale})`;


  const pigeTranslateY = scrollY * 0.5; // Juster denne værdi for at ændre hastigheden
  const pigeScale = 1 + scrollY / 3000;
  const svingBasis = Math.sin(scrollY / 120) * 20; 

  const svingMindre = Math.max(10 - scrollY / 100, 0); 
  const sving = svingBasis * svingMindre;


  pige.style.transform = `translate(${sving}px, ${pigeTranslateY}px) scale(${pigeScale})`;
});

