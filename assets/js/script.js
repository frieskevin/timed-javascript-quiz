var main = document.querySelector('#main');
var questionContent = document.querySelector('#questionContent')
var rorH1 = document.querySelector('#rightOrWrong');
let questionCounter = 0;

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

var answerChecker = function() {
    
}

var cleanUp = function() {
     let questionEl = document.querySelector('.questionText');
     let buttonA = document.querySelector('.buttonA');
     let buttonB = document.querySelector('.buttonB');
     let buttonC = document.querySelector('.buttonC');
     let buttonD = document.querySelector('.buttonD');
    questionEl.remove();
    buttonA.remove();
    buttonB.remove();
    buttonC.remove();
    buttonD.remove();
}

var quizElAdder = function() {
    if (questionCounter > 0) {
        cleanUp();
    };
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

    questionContent.appendChild(questionEl);
    questionContent.appendChild(buttonA);
    questionContent.appendChild(buttonB);
    questionContent.appendChild(buttonC);
    questionContent.appendChild(buttonD);
};

var startQuiz = function() {
    const deleteStart = document.getElementById('start');
    deleteStart.remove();
    quizElAdder();
    questionCounter++;
};

var rightAnswer = function() {
    questionCounter++;
    quizElAdder();
    rorH1.textContent = 'Correct!';
    console.log('right');
};

var wrongAnswer = function() {
    questionCounter++;
    quizElAdder();
    rorH1.textContent = 'Incorrect!';
    console.log('wrong');
};

var taskButtonHandler = function(event) {
    var targetEl = event.target;
    if  (targetEl.className === 'buttonStart') { 
        startQuiz()
    } else if (((questionCounter === 0) && (targetEl.className === 'buttonA')) || 
        (questionCounter === 1 && targetEl.className === 'buttonC') || 
        (questionCounter === 2 && targetEl.className === 'buttonC') || 
        (questionCounter === 3 && targetEl.className === 'buttonB') || 
        (questionCounter === 4 && targetEl.className === 'buttonD') || 
        (questionCounter === 5 && targetEl.className === 'buttonA') || 
        (questionCounter === 6 && targetEl.className === 'buttonC') || 
        (questionCounter === 7 && targetEl.className === 'buttonA') || 
        (questionCounter === 8 && targetEl.className === 'buttonA') || 
        (questionCounter === 9 && targetEl.className === 'buttonA')) {
        rightAnswer()
    } else {
        wrongAnswer()
    }
};

main.addEventListener('click', taskButtonHandler);
