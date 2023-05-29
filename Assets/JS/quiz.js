const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const submitButton = document.getElementById('submit-btn');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');

const quizQuestions = [
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
    question: "How many NBA Chamionships have the Boston Celtics won?",
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
  },

];

let questionIndex = 0;
let score = 100;
let timer = 60;

