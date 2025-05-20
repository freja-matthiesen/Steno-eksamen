"use strict";

const pige = document.getElementById("pige");

pige.style.position = 'absolute'; // Flytter hende præcist
let positionY = 0; // Start nederst på siden
const targetY = -window.innerHeight / 2 + pige.offsetHeight / 2-100; // Pigen flyttes op til midten af vinduet + 80px

pige.addEventListener("click", () => {
  // Start animationen
  moveUp();
});

function moveUp() {
  const speed = 5; // pixels per frame

  function step() {
    if (positionY > targetY) {
      positionY -= speed;
      pige.style.transform = `translateX(-50%) translateY(${positionY}px)`;
      requestAnimationFrame(step);
    } else {
      // Når vi pigen når midten
      document.body.style.transition = 'background-color 1s ease';
      document.body.style.backgroundColor = 'white';
      window.location.href = "motionsgrafik.html"; // Skift til den nye side
    }
  }

  step();
}