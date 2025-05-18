"use strict";
//lytter til scroll-eventet på vinduet
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;// Henter nuværende scroll-position i Y-retning
  const billede = document.getElementById("tunnel");// Henter billed-elementet med id "tunnel"

  //zoom faktor
  const scale = 1 + scrollY / 500;  // Beregner zoom-faktor til billede baseret på scroll
  const translateY = scrollY * 1;  // Beregner hvor langt billedet skal flyttes ned – højere faktor = hurtigere bevægelse nedad
  const pige = document.getElementById("pige");  //Henter pige-elementet med id "pige"

   // Skift side hvis scrollen når langt nok ned (automatisk redirect)
  if (scrollY > 1600) {
    window.location.href = "motionsgrafik.html";
     // Når scrollen er mellem 1450 og 1600
  } else if (scrollY > 1450) {
    billede.src = "img/hvid-baggrund.png";
    billede.style.width = "100%"; // Sørg for det fylder hele bredden
    pige.style.display = "none"; // Skjul "pige"-elementet
  // Når scrollen er mellem 500 og 1450
  } else if (scrollY > 500) {
    billede.src = "img/hoved-til-brug.png"; //billede
    pige.style.display = "block"; // Vis "pige"-elementet
  }
  // Anvend transform på billede: Flyt nedad og zoom
  billede.style.transform = `translateY(${translateY}px) scale(${scale})`;

  // Animation af "pige"-elementet:
  const pigeTranslateY = scrollY * 0.5;     // Flyt "pige" langsommere ned end billede
  const pigeScale = 1 + scrollY / 3000;     // Lidt langsommere zoom end billede
  // Giver "pige" et sving (side til side) baseret på sinusbølge
  const svingBasis = Math.sin(scrollY / 120) * 20; // Beregn basis svingning som er baseret på scroolY-position

 
  // Begrænser hvor meget "pige" svinger, så den svinger mindre jo mere man scroller
  const svingMindre = Math.max(10 - scrollY / 100, 0); 
  const sving = svingBasis * svingMindre;

  // Opdaterer "pige"-elementets position og størrelse, så hun bevæger sig lidt fra side til side, glider nedad og zoomer ind, når man scroller
  pige.style.transform = `translate(${sving}px, ${pigeTranslateY}px) scale(${pigeScale})`;
});

