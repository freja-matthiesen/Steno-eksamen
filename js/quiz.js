'use-strict'

const questions = [ // Array med objekter. Indehodler spørgsmål og korrekte svar 
    {
        question: "Hvilket nr illustrerer social angst?", // spørgsmål 1
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true }, // korrekt svar
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Hvilket nr illustrerer fobi angst?", // spørgsmål 2
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true } // korrekt svar
        ]
    },
    {
        question: "Hvilket nr illustrerer seperations angst?", // spørgsmål 3
        answers: [
            { text: "1", correct: true }, //korrekt svar
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Hvilket nr illustrerer generaliseret angst?",  // spørgsmål 4
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true }, //korrekt svar
            { text: "4", correct: false }
        ]
    }
];

// Opretter 3 konstant variabler, som henter elementer fra HTML-dokumentet
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0; // Variablen holder styr på hvilket spørgsmål der vises
let score = 0; // Variablen holder styr på hvor mange rigtige svar der er givet

// StartQuiz funktionen starter quiz på spg 1 og sætter score til 0
function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Næste"; 
    showQuestion(); // kalder funktionen showQuestion, som viser spørgsmål
}


function showQuestion () {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; // henter spørgsmål fra arrayet baseret på index
    let questionNo = currentQuestionIndex + 1; // første spg er 1 og ikke 0
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // opdaterer visning af spørgsmål i questionElement

    currentQuestion.answers.forEach(answer => { // forEach loopet --> opretter knapper for hvert svar
        const button = document.createElement('button');
        button.innerText = answer.text; 
        button.classList.add('btn'); 
        answerButtons.appendChild(button); //tilføjer knappen 'button' som barn til answerButtons
        if (answer.correct) { // hvis svaret er korrekt, tilføjes data attributten correct
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer); // når der klikkes på knappen, kaldes funktionen selectAnswer
    });
}

function resetState () { // nulstiller qiuz og fjerner tidligere svar
    nextButton.style.display = 'none';
    continueButton.style.display = 'none'; // skjuler continueButton
    while (answerButtons.firstChild) { // loopet kører så længe der er mindst et barn i answerButtons
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) { // hvis svaret er korrekt, tilføjes klassen korrekt og scoren øges med 1
        selectedBtn.classList.add('korrekt');
        score++; 
    } else { // hvis svaret er forkert, tilføjes klassen forkert
        selectedBtn.classList.add('forkert'); 
    }
    Array.from(answerButtons.children).forEach(button => { // opretter array fra answerButtons direkte børn og løber igennem hver knap 
        if (button.dataset.correct === "true") { // hvis knappen er korrekt, tilføjes klassen korrekt
            button.classList.add('korrekt');
        }
        button.disabled = true; // deaktiverer knapper, så de ikke kan klikkes på igen
    });
    nextButton.style.display = 'block';

}

const continueButton = document.getElementById('continue-btn');

continueButton.addEventListener('click', () => {
    window.location.href = '/video.html'; // når der klikkes på continueButton (videre), sendes brugeren til video.html
});

function showScore () { // viser score og giver mulighed for at starte quizzen forfra
    resetState();
    questionElement.innerHTML = `Du fik ${score} ud af ${questions.length} rigtige!`;
    nextButton.innerHTML = "Prøv igen";
    nextButton.style.display = 'block';
    continueButton.style.display = 'inline-block';
}

function handleNextButton () {
    currentQuestionIndex++; // øger variablen med 1, så næste spørgsmål vises
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // hvis der er flere spørgsmål, vises næste spørgsmål
    } else {
        showScore(); // hvis der ikke er flere spørgsmål, vises score
    }
}

nextButton.addEventListener('click', () => { //når der klikkes på nextButton, kan der ske 2 ting
    if(currentQuestionIndex < questions.length){ // hvis der er flere spørgsmål kaldes handleNextButton
        handleNextButton();
    } else { // hvis der ikke er flere spørgsmål, startes quizzen forfra
        startQuiz();
    }
});

startQuiz(); // kalder funktionen
