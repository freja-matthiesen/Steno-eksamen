'use-strict'

const questions = [
    {
        question: "Hvilket nr illusterer social angst?", 
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: true },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Hvilket nr illusterer fobi angst?", 
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: true }
        ]
    },
    {
        question: "Hvilket nr illusterer seperations angst?", 
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "Hvilket nr illusterer generaliseret angst?", 
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz () {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Næste";
    showQuestion();
}

function showQuestion () {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
    });
}

function resetState () {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();
