'use-strict'

// Herunder henter vi de nødvendige id'er fra HTML 
const questions = [
    {
        question: "Hvor mange procent af børn og unge rammes af angst?", //spørgsmål 1
        //vi har et array af objekter, hvor hvert objekt indeholder et spørgsmål og svarmuligheder
        answers: [
            { text: "0-5%", correct: false },
            { text: "5-10%", correct: true },
            { text: "10-15%", correct: false },
            { text: "15-20%", correct: false }
        ]
    },
    {
        question: "Forekomsten af angst er dobbelt så høj hos drenge som hos piger?", // spørgsmål 2
        answers: [
            { text: "Rigtigt", correct: false },
            { text: "Forkert", correct: true }
        ]
    },
    {
        question: "Hvor meget er diagnoser blandt børn og unge steget med siden 2013?", // spørgsmål 3
        answers: [
            { text: "37%", correct: true },
            { text: "17%", correct: false },
            { text: "57%", correct: false },
            { text: "27%", correct: false }
        ]
    }
];

// Herunder henter vi de nødvendige id'er fra HTML hvor vi skal vise spørgsmålene og svarmulighederne
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const videreButton = document.getElementById('videre-btn');

let currentQuestionIndex = 0; // Variablen holder styr på hvilket spørgsmål der vises
let score = 0; // Variablen holder styr på hvor mange rigtige svar der er givet

// StartQuiz funktionen starter quiz på spg 1 og sætter score til 0
function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Næste";
    showQuestion(); // kalder funktionen showQuestion, som viser spørgsmål
}

// Herunder definerer vi en funktion, som viser spørgsmålene og svarmulighederne og nulstiller tidligere svar
function showQuestion () {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]; //henter det aktuelle spørgsmål
    let questionNo = currentQuestionIndex + 1; //beregnerer spørgsmålets nummer
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question; //viser spørgsmålet i HTML


    //laver en for each loop, som går igennem alle svarmulighederne og viser dem i HTML og styler knapperne
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) { //hvis svaret er korrekt, tilføjer vi en data attribut til knappen
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

// Herunder definerer vi en funktion, som nulstiller tidligere svar og skjuler knapperne
function resetState () {
    nextButton.style.display = 'none';
    videreButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Herunder definerer vi en funktion, som viser om svaret er korrekt eller forkert og opdaterer scoren
function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('korrekt');
        score++;
    } else {
        selectedBtn.classList.add('forkert');
    }

    //gennemgår alle knapperne og viser om svaret er korrekt eller forkert
    Array.from(answerButtons.children).forEach(button => { 
        if (button.dataset.correct === "true") {
            button.classList.add('korrekt');
        }
        button.disabled = true;// deaktiverer knapperne så de ikke kan trykkes på igen
    });
    nextButton.style.display = 'block'; //viser næste knap
    videreButton.style.display = 'none';

}

// Herunder definerer vi en funktion, som viser scoren og giver mulighed for at starte quizzen forfra
function showScore () {
    resetState();
    questionElement.innerHTML = `Du fik ${score} ud af ${questions.length} rigtige!`;
    nextButton.innerHTML = "Prøv igen";
    nextButton.style.display = 'block';
    videreButton.style.display = 'block';
}

function handleNextButton () {
    currentQuestionIndex++; // øger variablen med 1, så næste spørgsmål vises
    if (currentQuestionIndex < questions.length) {
        showQuestion(); // hvis der er flere spørgsmål, vises næste spørgsmål
    } else {
        showScore();// hvis der ikke er flere spørgsmål, vises score
    }
}

nextButton.addEventListener('click', () => { //når der klikkes på nextButton, kan der ske 2 ting
    if(currentQuestionIndex < questions.length){
        handleNextButton(); // hvis der er flere spørgsmål kaldes handleNextButton
    } else {
        startQuiz(); // hvis der ikke er flere spørgsmål, startes quizzen forfra
    }
    
    // Herunder definerer vi en funktion, som sender brugeren videre til quiz.html, som er quiz nr 2
    videreButton.addEventListener('click', () => {
        window.location.href = "quiz.html";
    });
});

startQuiz();
