
// Afspil lyd ved hover ved hjertet
const heart = document.getElementById("heart");
const heartbeatSound = document.getElementById("heartbeatSound");

heart.addEventListener("mouseenter", () => {
  heartbeatSound.currentTime = 0;
  heartbeatSound.play();
});

heart.addEventListener("mouseleave", () => {
  heartbeatSound.pause();
  heartbeatSound.currentTime = 0;
});

