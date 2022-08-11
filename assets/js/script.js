var main = document.querySelector('#main');
var questionContent = document.querySelector('#questionContent')
var rorH1 = document.querySelector('#rightOrWrong');
let questionCounter = 0;
var timerEl = document.getElementById('timer');
var timeLeft = 80
var score = 0

// answer key 0-A, 1-C, 2-C, 3-B, 4-D, 5-A, 6-C, 7-A, 8-A, 9-A

const questionsObj = {
    question: [
        'JavaScript is an ______ language.',
        'Which of the following keywords is used to define a variable in JavaScript?',
        'Which of the following methods is used to acces HTML elements using JavaScript?',
        'Upon encountering empty statements, what does the Javascript Interpreter do?',
        'Which of the following methods can be used to display data in some form using Javascript?',
        'How can a datatype be declared to be a constant type?',
        'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        'Which function is used to serialize an object into a JSON string in Javascript?',
        'How to stop an interval timer in Javascript?',
        'The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?'],
    answerA: ['Object-Oriented', 'var', 'getElementbyId', 'Throws an error', 'document.write', 'const', 'Boolean', 'stringify', 'clearInterval', 'Object Serialization'],
    answerB: ['Object-Based', 'let', 'getElementsByClassName', 'Ignores the statements', 'console.log', 'var', 'Undefined', 'parse', 'clearTimer', 'Object Encapsulation'],
    answerC: ['Procedural', 'Both A and B', 'Both A and B', 'Gives a warning', 'window.alert', 'let', 'Object', 'convert', 'intervalOver', 'Object Inheritance'],
    answerD: ['None of the above', 'None of the above', 'None of the above', 'None of the above', 'All of the above', 'constant', 'Integer', 'None of the above', 'None of the Above', 'None of the above'],
    answers: ['A', 'C', 'C', 'B', 'D', 'A', 'C', 'A', 'A', 'A']
};

var gameOver = function() {
    cleanUp();
    score = timeLeft;
    let scoreDisplay = document.createElement('h1');
    let inputLabel = document.createElement('label');
    inputLabel.htmlFor = 'initialInput';
    inputLabel.textContent = 'Enter Initials:'

    let initialInput = document.createElement('input');
    initialInput.id = 'initialInput';
    initialInput.className = 'initialInput';

    let buttonSub = document.createElement('button');
    buttonSub.className = 'button buttonSub';
    buttonSub.textContent = 'Submit';

    timerEl.remove();
    rorH1.remove();
    scoreDisplay.textContent = 'Your score is ' + score;

    questionContent.appendChild(scoreDisplay);
    questionContent.appendChild(inputLabel);
    questionContent.appendChild(initialInput);
    questionContent.appendChild(buttonSub);

    localStorage.setItem('highScore', JSON.stringify())
};

var timerStart = function() {
    var timer = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else if (timeLeft < 1 && score > 0) {
            timerEl.textContent = '';
            clearInterval(timer);
        } else {
            timerEl.textContent = '';
            clearInterval(timer);
            cleanUp();
            gameOver();
        }
    }, 1000);
}

var cleanUp = function() {
        let questionNumber = document.querySelector('.questionNum');
        let questionEl = document.querySelector('.questionText');
        let buttonA = document.querySelector('.buttonA');
        let buttonB = document.querySelector('.buttonB');
        let buttonC = document.querySelector('.buttonC');
        let buttonD = document.querySelector('.buttonD');
        if (buttonC.classList.contains('button')) {
        questionNumber.remove();
        questionEl.remove();
        buttonA.remove();
        buttonB.remove();
        buttonC.remove();
        buttonD.remove();
        }
};

var quizElAdder = function () {
    if (questionCounter < 10) {
        let questionNumber = document.createElement('h1');
        questionNumber.className = 'questionNum'
        questionNumber.textContent = 'Question ' + (questionCounter + 1) + ' out of 10.';

        let questionEl = document.createElement('h1');
        questionEl.className = 'questionText'
        questionEl.textContent = questionsObj.question[questionCounter];

        let buttonA = document.createElement('button');
        buttonA.className = 'button buttonA'
        buttonA.textContent = 'A. ' + questionsObj.answerA[questionCounter];

        let buttonB = document.createElement('button');
        buttonB.className = 'button buttonB'
        buttonB.textContent = 'B. ' + questionsObj.answerB[questionCounter];

        let buttonC = document.createElement('button');
        buttonC.className = 'button buttonC'
        buttonC.textContent = 'C. ' + questionsObj.answerC[questionCounter];

        let buttonD = document.createElement('button');
        buttonD.className = 'button buttonD'
        buttonD.textContent = 'D. ' + questionsObj.answerD[questionCounter];

        questionContent.appendChild(questionNumber);
        questionContent.appendChild(questionEl);
        questionContent.appendChild(buttonA);
        questionContent.appendChild(buttonB);
        questionContent.appendChild(buttonC);
        questionContent.appendChild(buttonD);
        if (questionCounter === 9) {
            questionCounter++;
        };
    };
};

var startQuiz = function() {
    const deleteStart = document.getElementById('start');
    deleteStart.remove();
    quizElAdder();
};

var rightAnswer = function() {
    cleanUp();
    questionCounter++;
    quizElAdder();
    rorH1.textContent = 'Correct!';
    console.log('right');
};

var wrongAnswer = function() {
    cleanUp();
    questionCounter++;
    quizElAdder();
    rorH1.textContent = 'Incorrect!';
    console.log('wrong');
    timeLeft = timeLeft - 10;
};

var highScores = function() {
    let inputEl = document.querySelector('#initialInput');
    let name = inputEl.textContent
    let 
}

var taskButtonHandler = function(event) {
    var targetEl = event.target;
    if  (targetEl.className === 'buttonStart') { 
        startQuiz();
        timerStart();
    //check if answer is correct and goes to rightAnswer function
    } else if ((questionCounter === 0 && targetEl.classList.contains('buttonA')) || 
        (questionCounter === 1 && targetEl.classList.contains('buttonC')) || 
        (questionCounter === 2 && targetEl.classList.contains('buttonC')) || 
        (questionCounter === 3 && targetEl.classList.contains('buttonB')) || 
        (questionCounter === 4 && targetEl.classList.contains('buttonD')) || 
        (questionCounter === 5 && targetEl.classList.contains('buttonA')) || 
        (questionCounter === 6 && targetEl.classList.contains('buttonC')) || 
        (questionCounter === 7 && targetEl.classList.contains('buttonA')) || 
        (questionCounter === 8 && targetEl.classList.contains('buttonA')) || 
        (questionCounter === 9 && targetEl.classList.contains('buttonA'))) {
        rightAnswer();
    //check if counter is at 10 indicating quiz is over and goes to gameOver function
    } else if (questionCounter >= 10 && targetEl.classList.contains('button')) {
        gameOver();
        console.log(score);
    // if wrong answer button is clicked goes to wrongAnswer function
    } else if (targetEl.classList.contains('buttonSub')) {
        highScores();
    } else if (targetEl.classList.contains('button')) {
        wrongAnswer();
    } 
};
// main event listener listening for clicks
main.addEventListener('click', taskButtonHandler);
