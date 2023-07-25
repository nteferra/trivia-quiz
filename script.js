const container = document.getElementById('container');
const results = document.getElementById('results');
const score = document.querySelector('.score')
const nextBtn = document.getElementById('next');
const reset = document.getElementById('reset')
const userAnswers = [];
let currentQuestionNumber = 0

//greeting
const greetDiv = document.createElement('div')
greetDiv.classList.add("greetDiv")



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



function greet() {
    document.querySelector('.hide').style.display = "none";
    // Create the text element
    const text = document.createElement("h1");
    text.id = "text";
    text.innerHTML = "Want to play a game?";
    text.style.marginBottom = "2rem";
    text.style.opacity = 0;
    text.style.transition = "opacity 0.5s ease-in-out";
    greetDiv.appendChild(text);
    document.body.appendChild(greetDiv)
  
    // Create the button element
    const button = document.createElement("button");
    button.classList.add("btn", "btn-secondary")
    button.id = "button";
    button.innerHTML = "Lets go!";
    button.style.opacity = 0;
    button.style.fontSize = "18pt"
    button.style.transition = "opacity 0.5s ease-in-out";
    button.style.pointerEvents = "none";
    greetDiv.appendChild(button);
    button.addEventListener('click', buildQuiz)
  
    setTimeout(function() {
      // Re-enable mouse/touch events on the button
      button.style.pointerEvents = 'auto';
      // Show the text and button
      text.style.opacity = 1;
      button.style.opacity = 1;
    }, 1000);

}

function buildQuiz() {            
    if (greetDiv.style.display !== "none") {
        greetDiv.style.display = "none";
    }
    if (results.style.display !== "none") {
        results.style.display = "none"
    }
    
    document.querySelector('.hide').style.display = "block";
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

function resetGame() {
    currentQuestionNumber = 0
    userAnswers.length = 0

    score.innerHTML = "";
    buildQuiz()
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
    document.querySelector('.hide').style.display = "none";
    results.style.display = "flex"
    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const userAnswer = userAnswers[questionNumber];

        //if correct
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
        }
    });

    score.innerHTML += `You got ${numCorrect} out of ${myQuestions.length} correct`;


}

nextBtn.addEventListener('click', showNext)


greet()
