const container = document.getElementById('container');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');
const nextBtn = document.getElementById('next');
const userAnswers = [];
let currentQuestionNumber = 0

const myQuestions = [
    {
        question: "What is the largest planet in the Galaxy?",
        answers: {
            a: "Earth",
            b: "Jupiter",
            c: "Uranus",
        },
        correctAnswer: "b",

    },
    {
        question: "Who proposed the law 'Every action has an equal and opposite reaction'?",
        answers: {
            a: "Newton",
            b: "Einstein",
            c: "Tesla",
        },
        correctAnswer: "a",

    },
    {
        question: "Who assassinated Abraham Lincoln in 1865?",
        answers: {
            a: "John Wilkes Booth",
            b: "John Jacob Jones",
            c: "Lee Harvey Oswald",
        },
        correctAnswer: "a",

    },
    {
        question: "Who discoverd biological cells?",
        answers: {
            a: "Marie Curie",
            b: "Robert Hooke",
            c: "Louis Pasteur",
        },
        correctAnswer: "b",

    },
    {
        question: "Who is known as the father of mathematics?",
        answers: {
            a: "Socrates",
            b: "Pythagoras",
            c: "Archimedes",
        },
        correctAnswer: "c",

    },
    {
        question: "Which continent is also a country?",
        answers: {
            a: "New Zealand",
            b: "Antarctica",
            c: "Australia",
        },
        correctAnswer: "c",

    },
 
    
]

function buildQuiz() {            
    //get current question
    const currentQuestion = myQuestions[currentQuestionNumber];

    //store possible answers
    const answers = [];

    //iterate over answers
    for(letter in currentQuestion.answers) {
        answers.push(
            `<label class="form-check-label choice">
                <input type="radio" class="form-check-input" name="question${currentQuestionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
        );
    }

    //add to output
    const output = 
        `<div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>`;

    // render the output
    container.innerHTML = output;
}

function showNext() {
    //get user answer for current question
    const answerContainer = container.querySelector('.answers');
    const selector = `input[name=question${currentQuestionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    userAnswers[currentQuestionNumber] = userAnswer;
    
    //Increment counter
    currentQuestionNumber++;

    //check if there are more questions
    if (currentQuestionNumber < myQuestions.length) {
        buildQuiz()
    } else {
        showResults()
    }
}

function showResults() {
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const userAnswer = userAnswers[questionNumber];

        //if correct
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        }
    });

    results.innerHTML = `${numCorrect} out of ${myQuestions.length}`;


}

// build quiz on page load
buildQuiz()

nextBtn.addEventListener('click', showNext)


