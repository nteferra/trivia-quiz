const container = document.getElementById('container');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

function buildQuiz() {
    //store html output
    const output = [];

    //for each question
    myQuestions.forEach(

    )
}

function showResults() {

}

// build quiz on page load
buildQuiz()

submitBtn.addEventListener('click', showResults);

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