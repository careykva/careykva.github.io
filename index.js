const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const points =document.querySelector("#point")
const back = document.querySelector("#back")
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const container = document.querySelector(".container")
const results_box = document.querySelector(".results_box")
let shuffledQuestions, currentQuestionIndex
const POINT = 1
let point =0


let counter_text
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  startTimer(180)
  startTimerLine(0)

  
})
back.addEventListener("onclick", () =>{
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
 point=0
 
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}


function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      score += 1;
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  startTimer(180)
  startTimerLine(0)
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
  if (correct) {

    incrementScore (POINT)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    
  }
   else {
    element.classList.add('wrong')
  }
 
 } 
  

incrementScore =num => {
  point +=num
  points.innerText= point

}
  
  
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
function startTimer(time){
  counter = setInterval(timer, 1000);
  function timer(){
      timeCount.textContent = time; 
      time--; 
      
      if(time < 0){ 
          clearInterval(counter); 
          timeText.textContent = "Time Up";

      }
    }
  }

  function startTimerLine(time){
    counterLine = setInterval(timer, 180);
    function timer(){
       
        time_line.style.width = time + "px"; 
        if(time > 180 ){ 
            clearInterval(counterLine); 
        }
    }
}
function showResults(){
  container.classList.remove("quizbox")
  results_box.classlist.add("quiz reult")
  const scoreText = results_box.querySelector("score_text")
  if(UserScore>5){
    let scoreTag ="<span>congrats,you got <p>"+ userScore + "</p> out of <p>"+ questions.length +"</p></span>"
    scoreText.innerHtml = scoreTag
  }

}

const questions = [
    
    {
      question: 'What is capital of India?',
      answers: [
        { text: 'Gadhinaga', correct: false },
        { text: 'Surat', correct: false },
        { text: 'Delhi', correct: true },
        { text: 'Mumbai', correct: false }
      ]
    },
      {
        question: 'Where is the Great Pyramid of Giza?',
        answers: [
          { text: 'Egypt', correct: true },
          { text: 'China', correct: false },
          { text: 'Germany', correct: false },
          { text: 'Austraila', correct: false }
        ]
      },  
    {
        question: 'How many days are in a year?',
        answers: [
          { text: '1000', correct: false },
          { text: '563', correct: false },
          { text: '75', correct: false },
          { text: '365', correct: true }
        ]
      },  
   {
        question: 'Who was the first American president?',
        answers: [
          { text: 'Joe Biden', correct: false },
          { text: 'George Washington', correct: true },
          { text: 'Richard Nixon', correct: false },
          { text: 'Bill Clinton', correct: false }
        ]
      },  
      {
        question: 'Which planet in our Solar System is known for having a ring?',
        answers: [
          { text: 'Saturn', correct: true },
          { text: 'Jupiter', correct: false },
          { text: 'Mars', correct: false },
          { text: 'Earth', correct: false }
        ]
       }, 
        {
          question: ' Why do things fall when you drop them?',
          answers: [
            { text: 'Because of gravity', correct: true },
            { text: 'Because it is to heavy', correct: false },
            { text: 'I do not know', correct: false },
            { text: 'None of the above', correct: false }
          ]
        },
          {
            question: 'What colors are the stars on the American flag?',
            answers: [
              { text: 'White', correct: true },
              { text: 'Red', correct: false },
              { text: 'Black', correct: false },
              { text: 'Blue', correct: false }
            ]
          },  
        {
            question: 'How many continents are there in the world?',
            answers: [
              { text: 'Four', correct: false },
              { text: 'Twelve', correct: false },
              { text: 'Seven', correct: true },
              { text: 'Nine', correct: false }
            ]
          },  
       {
            question: ' Which country is home to the kangaroo?',
            answers: [
              { text: 'Canada', correct: false },
              { text: 'Austrilia', correct: true },
              { text: 'Russia', correct: false },
              { text: 'America', correct: false }
            ]
          },  
          {
            question: 'In which capital city of Europe would you find the Eiffel Tower?',
            answers: [
              { text: 'London', correct: false },
              { text: 'Moscow', correct: false },
              { text: 'Istanbul', correct: false },
              { text: 'Paris', correct: true }
            ]
    },
]


