const questions = [
    {
        question: "What is the capital of Nigeria?",
        answers: [
            { text: "Lagos", correct: false },
            { text: "Accra", correct: false },
            { text: "Abuja", correct: true },
            { text: "Cape Town", correct: false },
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Canberra", correct: true },
            { text: "Sydney", correct: false },
            { text: "Perth", correct: false },
            { text: "Melbourne", correct: false },
        ]
    },
    {
        question: "What is the largest country in Africa?",
        answers: [
            { text: "The Gambia", correct: false },
            { text: "Nigeria", correct: false },
            { text: "SouthAfrica", correct: false },
            { text: "Algeria", correct: true },
        ]
    },
    {
        question: "Which country is the most populous country in the world?",
        answers: [
            { text: "China", correct: false },
            { text: "U.S.A", correct: false },
            { text: "India", correct: true },
            { text: "Nigeria", correct: false },
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers: [
            { text: "Ottawa", correct: true },
            { text: "Toronto", correct: false },
            { text: "Ontario", correct: false },
            { text: "Montreal", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();