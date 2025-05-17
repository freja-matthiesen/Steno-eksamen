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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState () {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add('korrekt');
        score++;
    } else {
        selectedBtn.classList.add('forkert');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('korrekt');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';

}

function showScore () {
    resetState();
    questionElement.innerHTML = `Du fik ${score} ud af ${questions.length} rigtige!`;
    nextButton.innerHTML = "Prøv igen";
    nextButton.style.display = 'block';
}

function handleNextButton () {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
