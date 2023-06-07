var quizContainer = document.getElementById('quiz-container');
var questionEl = document.getElementById('question');
var choicesEl = document.getElementById('choices');
var submitButton = document.getElementById('submit-btn');
var timerEl = document.getElementById('timer');
var scoreEl = document.getElementById('score');

var quizQuestions = [
  {
    question: "Who is the fastest man ever?",
    choices: ["Asafa Powell", "Usain Bolt", "Justin Gatlin", "Tyson Gay"],
    answer: "Usain Bolt"
  },
  {
    question: "Who is the current UFC Middleweight Champion?",
    choices: ["Jon Jones", "Alex Pereira", "Leon Edwards", "Israel Adesanya"],
    answer: "Israel Adesanya"
  },
  {
    question: "How many Harry Potter books are there?",
    choices: ["4", "5", "6", "7"],
    answer: "7"
  },
  {
    question: "What is the capital of Slovakia?",
    choices: ["Bratislava", "Kiev", "Kosice", "Bucharest"],
    answer: "Bratislava"  
  },
  {
    question: "What year did Lewis Hamilton win his first Formula One World Championship?",
    choices: ["2006", "2007", "2008", "2009"],
    answer: "2008"  
  },
  {
    question: "Who is the Prime Minister of the UK?",
    choices: ["Rishi Sunak", "Boris Johnson", "David Cameron", "Tony Blair"],
    answer: "Rishi Sunak"  
  },
  {
    question: "How many NBA Championships have the Boston Celtics won?",
    choices: ["7", "8", "17", "18"],
    answer: "17"  
  },
  {
    question: "Where did the 1996 Summer Olympics take place?",
    choices: ["Los Angeles", "Atlanta", "Miami", "Seattle"],
    answer: "Atlanta"  
  },
  {
    question: "In which athletic competition does Wayde van Niekerk hold the World Record?",
    choices: ["200m race", "400m race", "800m race", "1500m race"],
    answer: "400m race"  
  },
  {
    question: "Which political party is currently in government in the UK?",
    choices: ["The Labour Party", "The Democrats", "The Republicans", "The Conservative Party"],
    answer: "The Conservative Party"
  }
];

var questionIndex = 0;
var score = 100;
var timer = 60;

function startTimer() {
  var intervalID = setInterval(function() {
    timer--;
    timerEl.textContent = timer;

    if (timer <= 0) {
      clearInterval(intervalID);
      showQuizResults();
    }
  }, 1000);
}

function displayQuestion() {
  var currentQuestion = quizQuestions[questionIndex];
  questionEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = '';
  currentQuestion.choices.forEach(function(choice) {
    var li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener('click', function(event) {
      handleChoiceSelection(event);
    });
    choicesEl.appendChild(li);
  });
}

function handleChoiceSelection(event) {
  var selectedChoice = event.target.textContent;
  var currentQuestion = quizQuestions[questionIndex];

  if (selectedChoice === currentQuestion.answer) {
    event.target.style.color = 'green';
    score += 5;
  } else {
    event.target.style.color = 'red';
    score -= 5;
  }

  scoreEl.textContent = "Score: " + score;

  questionIndex++;
  setTimeout(displayNextQuestion, 500);
}

function displayNextQuestion() {
  if (questionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  quizContainer.innerHTML = "<h1>Quiz Complete!</h1><p>You have finished the quiz.</p><p>Your final score is: " + score + "</p>";
}

function openNewPage() {
  window.location.href = "game.html";
}

startTimer();
displayQuestion();

submitButton.addEventListener('click', displayNextQuestion);
