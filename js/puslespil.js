'use-strict';

let correctPositions = { // Billederne i puslespillets korrekte plads
    "block1": "img1",
    "block2": "img2",
    "block3": "img3",
    "block4": "img4",
    "block5": "img5",
    "block6": "img6",
    "block7": "img7",
    "block8": "img8",
    "block9": "img9"
};

let currentPositions = { // Får værdien null fra starten, da brikkerne ikke er placeret endnu. Herved bruges værdien som placeholder, da den kan ændres. 
    "block1": null,
    "block2": null,
    "block3": null,
    "block4": null,
    "block5": null,
    "block6": null,
    "block7": null,
    "block8": null,
    "block9": null
};

onload = function () { // Når siden indlæses vil puslespilsbrikkerne blive blandet tilfældigt, så de ikke er i rækkefølge og hele tiden får en ny plads. 
   let parent = this.document.getElementById('drag');
   let frag = this.document.createDocumentFragment();
        while (parent.children.length) {
                frag.appendChild(parent.children[Math.floor (Math.random() * parent.children.length)]);
        }
        parent.appendChild(frag);
}

function drag(event) { // Når der trykkes på en brik, vil den blive trukket.
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) { // Henter data fra drag() funktionen og gemmer det i dropBoxen. Her opdateres positionen.
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let target = event.target;

    
    if (target.classList.contains("dropBox")) {
        target.appendChild(document.getElementById(data));
        currentPositions[data] = target.id;  // Opdaterer position

        setTimeout(checkPuzzleCompletion, 100);  // Forsinklelse på 100 ms, når puslespillet er færdigt --> Alle brikkerne er placeret i dropBoxene før popUp kommer frem
    }
}

function checkPuzzleCompletion() {
    // Tjekker om alle dropBoxe har fået en brik i sig
    let allFilled = true;
    for (let i = 1; i <= 9; i++) {
        let dropBox = document.getElementById('img' + i);
        if (dropBox.children.length === 0) {
            allFilled = false;
            break;
        }
    }

    // Tjekker for korrekt placering, hvis alle dropBoxe er fyldt
    if (allFilled) {
        let allCorrect = true;
        for (let block in currentPositions) {
            if (currentPositions[block] !== correctPositions[block]) {
                allCorrect = false;
                break;
            }
        }

        // Hvis puslespillet er samlet korrekt vises en alert
        if (allCorrect) {
            showCustomAlert("Tillykke du har samlet puslespillet korrekt", "img/samlet.png" );
        }
    }
    
}

function showCustomAlert(message) { // Viser en PopUp med tekst og et billede, når puslespillet er samlet korrekt.
    
    document.getElementById('alertMessage').textContent = message;

    document.getElementById('customAlert').style.display = "flex";

    document.getElementById('closeAlert').onclick = function() { //lukker for PopUp'en
        document.getElementById('customAlert').style.display = "none";
    }
}