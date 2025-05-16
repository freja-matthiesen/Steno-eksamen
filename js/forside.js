window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const tunnel = document.querySelector(".tunnel");
  const pige = document.getElementById("pige");

  const scaleSpeed = 200;
  const moveSpeed = 20;

  // Zoom med max-grænse
  const maxScale = 5;
  const scale = Math.min(maxScale, 1 + scrollY / scaleSpeed);

  // Flyt billedet nedad (positiv translateY)
  // Du kan justere 'moveDownSpeed' for hvor hurtigt billedet rykkes
  const moveDownSpeed = 3; 
  const translateY = scrollY / moveDownSpeed;

  tunnel.style.transform = `scale(${scale}) translateY(${translateY}px)`;

  // Flyt pigen opad som før
  const moveY = scrollY / moveSpeed;
  pige.style.transform = `translateX(-50%) translateY(-${moveY}px)`;

  if (scrollY > 550) {
    tunnel.src = "img/hvid-baggrund.png";  // Skift til nyt billede
    tunnel.style.width = "100%"; // Skift til 100% bredde
    pige.style.display = "none"; // Skjul pigen
  } else {
    tunnel.src = "img/hoved-til-brug.png";  // Original billede
    pige.style.display = "block"; // Skjul pigen
  }

});
