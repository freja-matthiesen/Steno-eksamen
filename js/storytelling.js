"use strict";

// herunder henter vi de nødvendige id'er fra html
const video = document.getElementById("video");
const startKnap = document.getElementById("start-knap");
const valgMuligheder = document.getElementById("valget");
const valg1 = document.getElementById("valg1");
const valg2 = document.getElementById("valg2");

//her henter vi id'erne fra html ift de to sektioner med start og selve spillet
const startSide = document.getElementById("startside");
const spilSide = document.getElementById("spilside");

//herunder laver vi en sti til videoerne
const videoSti = (navn) => `video/storytelling/${navn}.mp4`;

//her laver vi selve spillets flow 
const spilFlow = {
    start: { fil: "start", valg: ["video2", "video6"], tekst: ["Lade hende være, det skal nok gå over af sig selv", "Du går hen til hende, og spørger hende, om hun er okay"]  },
    video2: { fil: "video2", valg: ["video4", "video3"], tekst: ["Du henter en lærer", "Du sætter dig hen til hende"] },
    video3: { fil: "video3", valg: ["video5", "video4"], tekst: ["Du prøver at få Emma til at trække vejret roligt ved selv at gøre det.", "Du henter en lærer"] }, 
    video4: { fil: "video4", valg: ["slut", "slut"] },
    video5: { fil: "video5", valg: ["slut", "slut"] },
    video6: { fil: "video6", valg: ["video7", "video9"], tekst: ["Du giver hende et kram", "Du prøver at snakke med hende og berolige hende"] },
    video7: { fil: "video7", valg: ["video4", "video8"], tekst: ["Du henter en lærer", "Du prøver at snakke med hende og berolige hende"] },
    video8: { fil: "video8", valg: ["slut", "slut"] },
    video9: { fil: "video9", valg: ["video10", "video4"], tekst: ["Du giver Emma et kram", "Du henter en lærer"] },
    video10: { fil: "video10", valg: ["slut", "slut"] },
    slut: { fil: "slut", valg: [] }
};

//sikrer at vi starter med den første scene
let aktuelScene = "start";

//funktion til at afspille en scene 
function afspilScene(sceneNavn) {
    aktuelScene = sceneNavn;
    const data = spilFlow [sceneNavn];

//videoens kilde sættes ind herunder
video.src = videoSti(data.fil);
video.play();

  // Skjul valgmuligheder indtil videoen er færdig
  valgMuligheder.style.display = "none";
  
  video.onended = () => {
    if (data.valg.length === 2) {
        valgMuligheder.style.display = "block";
        valg1.textContent = data.tekst[0]; // Sæt tekst på valg 1
        valg2.textContent = data.tekst[1];
    }
};


    // Når brugeren vælger et af de to valg
    valg1.onclick = () => afspilScene(data.valg[0]);
    valg2.onclick = () => afspilScene(data.valg[1]);
}

// Når man klikker på "Start"-knappen
startKnap.addEventListener("click", () => {
    startSide.style.display = "none";
    spilSide.style.display = "block";
    afspilScene(aktuelScene);
});






