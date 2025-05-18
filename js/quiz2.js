'use-strict'

const questions = [
    {
        question: "Hvor mange procent af børn og unge rammes af angst?", 
        answers: [
            { text: "0-5%", correct: false },
            { text: "5-10%", correct: true },
            { text: "10-15%", correct: false },
            { text: "15-20%", correct: false }
        ]
    },
    {
        question: "Forekomsten af angst er dobbelt så høj hos drenge som hos piger?", 
        answers: [
            { text: "Rigtigt", correct: false },
            { text: "Forkert", correct: true }
        ]
    },
    {
        question: "Hvor meget er diagnoser blandt børn og unge steget med siden 2013?", 
        answers: [
            { text: "37%", correct: true },
            { text: "17%", correct: false },
            { text: "57%", correct: false },
            { text: "27%", correct: false }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const videreButton = document.getElementById('videre-btn');

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
    videreButton.style.display = 'none';
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
    videreButton.style.display = 'none';

}

function showScore () {
    resetState();
    questionElement.innerHTML = `Du fik ${score} ud af ${questions.length} rigtige!`;
    nextButton.innerHTML = "Prøv igen";
    nextButton.style.display = 'block';
    videreButton.style.display = 'block';
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
    
    videreButton.addEventListener('click', () => {
        window.location.href = "quiz.html";
    });
});

startQuiz();
