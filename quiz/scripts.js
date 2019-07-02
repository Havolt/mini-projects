//Current Question data
let score = 0;
let questionCount = 1;

let dragData = '';

//Data for all questions
const questionData = [
    {
        question: "Where would you find the Empire State building?",
        options: [
            "New York",
            "Los Angeles",
            "San Francisco",
            "New Orleans"
        ],
        answer: 0,
    },
    {
        question: "Identify the components of a PC",
        options: [
            "Processor",
            "Memory",
            "Hard Disk",
            "CD-ROM Drive",
            "Printer",
        ],
        answer: [0,1,2,3]
    },
    {
        question: "___ is a character in the film \"The Matrix\"",
        options: [
            "R2D2",
            "Neo",
            "Ripley"
        ],
        answer: 1
    }
];

//Gets question and creates it based on input number
function initQuestion(num) {
    document.querySelector('.main__question__quest').innerHTML = questionData[num].question;
}

//Checks Radio
function checkRadio() {
    let foundChecked = false;
    let correctAnswer = false;
    for(let i = 0; i < document.querySelectorAll('.main__question__answers--1__input').length; i++) {
        if(document.querySelectorAll('.main__question__answers--1__input')[i].checked) {
            foundChecked = true;
            if(i == questionData[0].answer) {
                correctAnswer = true;
            }
            break;
        } 
    }
    if(foundChecked && correctAnswer) {
        score += 10;
        toggleHidden('.main__question__answers--1', '.main__question__complete', '.main__question__butt', '.main__question__quest');
        questionResponse('That\'s right.', 'lightgreen');
    } else if(foundChecked) {
        toggleHidden('.main__question__answers--1', '.main__question__complete', '.main__question__butt', '.main__question__quest');
        questionResponse('That\'s not it.', 'pink');
    } else {
        alert('You must select an answer');
    }
}

//Checks checkboxes
function checkCheckbox() {
    let foundChecked = false;
    let wrongAnswer = false;
    let answers = [];
    for(let i = 0; i < document.querySelectorAll('.main__question__answers--2__input').length; i++) {
        if(document.querySelectorAll('.main__question__answers--2__input')[i].checked) {
            foundChecked = true;
            answers.push(i);
        } 
    }
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == 4) {
            wrongAnswer = true;
            break;
        }
    }
    if(!foundChecked) {
        alert('You must select at least one box.');
    } else if (wrongAnswer) {
        toggleHidden('.main__question__answers--2', '.main__question__complete', '.main__question__butt', '.main__question__quest');
        questionResponse('That\'s not it.', 'pink');
    } else if(answers.length == 4) {
        toggleHidden('.main__question__answers--2', '.main__question__complete', '.main__question__butt', '.main__question__quest');
        questionResponse('That\'s right.', 'lightgreen');
        score += 25;
    } else {
        score += answers.length * 5;
        toggleHidden('.main__question__answers--2', '.main__question__complete', '.main__question__butt', '.main__question__quest');
        questionResponse('You\'re partly right.', 'lightblue');
    }
}

//CheckDrag
function checkDrag() {
    
    if(document.querySelector('.main__question__quest--drag__main').value == questionData[2].answer) {
        toggleHidden('.main__question__answers--3', '.main__question__complete', '.main__question__butt', '.main__question__quest--drag');
        questionResponse('That\'s right.', 'lightgreen');
        score += 10;
    } else if(!document.querySelector('.main__question__quest--drag__main').value && document.querySelector('.main__question__quest--drag__main').value != 0) {
        alert('You must drag an option to the box');
    } else {
        toggleHidden('.main__question__answers--3', '.main__question__complete', '.main__question__butt', '.main__question__quest--drag');
        questionResponse('That\'s not it.', 'pink');
    }
}

//Response to users answer
function questionResponse(res, color) {
    document.querySelector('.main__question__complete__response').innerHTML = res;
    document.querySelector('.main__question__complete__response').style.background = color;
}

//Gets next question
function nextQuestion() {
    if(questionCount == 1) {
        document.querySelector('.main__question__butt').removeEventListener('click', checkRadio, true);
        document.querySelector('.main__question__butt').addEventListener('click', checkCheckbox, true);
        toggleHidden('.main__question__answers--2',  '.main__question__complete', '.main__question__butt', '.main__question__quest');
    } else if(questionCount == 2) {
        document.querySelector('.main__question__butt').removeEventListener('click', checkCheckbox, true);
        document.querySelector('.main__question__butt').addEventListener('click', checkDrag, true);
        toggleHidden('.main__question__answers--3',  '.main__question__complete', '.main__question__butt', '.main__question__quest--drag');
    } else if(questionCount == 3) {
        toggleHidden('.main', '.results')
        enterResults(score);
    }
    if(questionCount != 3) {
        document.querySelector('.main__question__quest').innerHTML = questionData[questionCount].question;
    }

    questionCount++;
}

function enterResults() {
    document.querySelector('.results__result').innerHTML = `${score}/45`
}

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(num) {
    dragData = num;
    
}

function drop(ev) {
    ev.preventDefault();
    document.querySelector('.main__question__quest--drag__main').innerHTML = questionData[2].options[dragData];
    document.querySelector('.main__question__quest--drag__main').value = dragData;
  }



//Toggles items to .hidden class through arguments passed in text e.g #app, .main
function toggleHidden(targ) {
    for(let i = 0; i < arguments.length; i++) {
        document.querySelector(arguments[i]).classList.toggle('hidden');
    }
}


(function initApp() {
    document.querySelector('.main__question__butt').addEventListener('click', checkRadio, true);
})()