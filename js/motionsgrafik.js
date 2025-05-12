
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

// pop-up til hjertet
heart.addEventListener("click", () => {
    showInfoPopup("Hjertebanken", "Hjertebanken er en klassisk fysisk reaktion på angst. Når man føler sig truet eller presset, går kroppen i alarmberedskab. Hjertet begynder at slå hurtigere for at sende blod ud i kroppen – også selvom der ikke er nogen reel fare.");
  });

// Afspil lyd ved hover ved gruppen
const crowd = document.getElementById("crowd");
const crowdtalksound = document.getElementById("crowdtalksound");

crowd.addEventListener("mouseenter", () => {
  crowdtalksound.currentTime = 0;
  crowdtalksound.play();
});

crowd.addEventListener("mouseleave", () => {
  crowdtalksound.pause();
  crowdtalksound.currentTime = 0;
});

//Pop-up til gruppen
crowd.addEventListener("click", () => {
    showInfoPopup("Store grupper", "En stor gruppe mennesker kan føles overvældende og give en følelse af ikke at kunne overskue situationen eller miste kontrollen.");
  });

// Afspil lyd ved hover ved ambulancen
const babu = document.getElementById("babu");
const babusound = document.getElementById("babusound");

babu.addEventListener("mouseenter", () => {
  babusound.currentTime = 0;
  babusound.play();
});

babu.addEventListener("mouseleave", () => {
  babusound.pause();
  babusound.currentTime = 0;
});

// Afspil lyd ved hover ved sirene
const sirene = document.getElementById("sirene");
const babusound1 = document.getElementById("babusound1");

sirene.addEventListener("mouseenter", () => {
  babusound1.currentTime = 0;
  babusound1.play();
});

sirene.addEventListener("mouseleave", () => {
  babusound1.pause();
  babusound1.currentTime = 0;
});