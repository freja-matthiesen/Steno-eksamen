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
const videoSti = (navn) => `videoer/${navn}.mp4`;