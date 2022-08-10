var main = document.querySelector('#main');
let questionCounter = 0;

// answer key 1-A, 2-C, 3-C, 4-B, 5-D, 6-A, 7-C, 8-A, 9-A, 10-A

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
    answerD: ['None of the above', 'None of the above', 'None of the above', 'None of the above', 'All of the above', 'constant', 'Integer', 'None of the above', 'None of the Above', 'None of the above']
};

var answerChecker = function() {
    
}

var startQuiz = function() {
    const deleteStart = document.getElementById('start');
    deleteStart.remove();
    let questionEl = document.createElement('h1');
    questionEl.className = 'questionText'
    questionEl.textContent = questionsObj.question[questionCounter];

    let buttonA = document.createElement('button');
    buttonA.className = 'button buttonA'
    buttonA.textContent = 'A. ' + questionsObj.answerA[questionCounter];

    let buttonB = document.createElement('button');
    buttonB.className = 'button buttonA'
    buttonB.textContent = 'B. ' + questionsObj.answerB[questionCounter];

    let buttonC = document.createElement('button');
    buttonC.className = 'button buttonA'
    buttonC.textContent = 'C. ' + questionsObj.answerC[questionCounter];

    let buttonD = document.createElement('button');
    buttonD.className = 'button buttonA'
    buttonD.textContent = 'D. ' + questionsObj.answerD[questionCounter];

    main.appendChild(questionEl);
    main.appendChild(buttonA);
    main.appendChild(buttonB);
    main.appendChild(buttonC);
    main.appendChild(buttonD);
    questionCounter++;
    console.log('snake');
};

var rightAnswer = function() {

};

var wrongAnswer = function() {

};

var taskButtonHandler = function(event) {
    var targetEl = event.target;
    if  (targetEl.className === 'button') { 
        startQuiz()
    } else if (targetEl.className === 'correct') {
        rightAnswer()
    } else if (targetEl.className === 'incorrect') {
        wrongAnswer()
    }
};

main.addEventListener('click', taskButtonHandler);
