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

//pop til ambulance
sirene.addEventListener("click", () => {
    showInfoPopup("Utryghed", "En ambulance med blink og lyd kan være en stærk trigger, især hvis man har oplevet noget traumatisk i forbindelse med sygdom eller ulykke.");
  });

//lyd til tanker
const thoughts = document.getElementById("thoughts");
const tankelyd = document.getElementById("tankelyd");

thoughts.addEventListener("mouseenter", () => {
  tankelyd.currentTime = 0;
  tankelyd.play();
});

thoughts.addEventListener("mouseleave", () => {
  tankelyd.pause();
  tankelyd.currentTime = 0;
});

// pop til tankemylder
thoughts.addEventListener("click", () => {
    showInfoPopup("Tankemylder", "Tankemylder dækker over de mange forstyrrende tanker, som kan føles svære at stoppe. Tankerne kører i ring og gør det svært at fokusere, slappe af eller falde i søvn.");
  });

// Afspil lyd ved hover muskel
const muscle = document.getElementById("muscle");
const ondtsound = document.getElementById("ondtsound");

muscle.addEventListener("mouseenter", () => {
  ondtsound.currentTime = 0;
  ondtsound.play();
});

muscle.addEventListener("mouseleave", () => {
  ondtsound.pause();
  ondtsound.currentTime = 0;
});

// pop-up til muskel
muscle.addEventListener("click", () => {
    showInfoPopup("Ømhed i kroppen", "Ømhed i musklerne opstår ofte, når kroppen er spændt i længere tid. Mange, der kæmper med angst, spænder ubevidst i skuldre, nakke eller ryg, hvilket over tid kan føre til ømhed og ubehag");
  });

// pop-up til iphone
phone.addEventListener("click", () => {
    showInfoPopup("Usikkerhed", "Selv noget så hverdagsagtigt som en iPhone kan være en trigger – måske fordi den forbindes med dårlige nyheder, sociale medier eller en konstant følelse af at skulle være på.");
  });

// Pop-op struktuering
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

const infoPopup = document.getElementById("infoPopup");
const infoTitle = document.getElementById("infoTitle");
const infoText = document.getElementById("infoText");
const closeInfoBtn = document.getElementById("closeInfoPopup");

// popup til display none, så den ikke vises når siden loader
window.addEventListener('DOMContentLoaded', () => {
  infoPopup.style.display = "none";
});

// pop-op til hjertet
function showInfoPopup(title, text) {
    infoTitle.textContent = title;
    infoText.textContent = text;
    infoPopup.style.display = "flex";
}

// Luk-knap til hjertet
closeInfoBtn.addEventListener("click", () => {
  infoPopup.style.display = "none";
});
