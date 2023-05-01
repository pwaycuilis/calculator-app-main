let toggleButtons = document.querySelectorAll('.toggle-button');
let toggleArr = [...toggleButtons];

const themeToggle1 = document.querySelector('#theme-toggle-1');
const themeToggle2 = document.querySelector('#theme-toggle-2');
const themeToggle3 = document.querySelector('#theme-toggle-3');

const toggleSelector = document.querySelector('.theme-selector__toggles');

const elementsToChange = document.querySelectorAll('[data-toggle-position]');

console.log(toggleSelector.getAttribute('data-toggle-position'));
toggleArr.forEach((element, index) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";

        toggleArr.filter(function (item) {
            return item != element;
        }).forEach((item) => {
            item.style.opacity = "0";
        })
    })
})





themeToggle1.addEventListener("click", () => {
    elementsToChange.forEach(ele => {
        ele.setAttribute('data-toggle-position', "1");
    });
})

themeToggle2.addEventListener("click", () => {
    elementsToChange.forEach(ele => {

        ele.setAttribute('data-toggle-position', "2");
    });
})

themeToggle3.addEventListener("click", () => {
    elementsToChange.forEach(ele => {

        ele.setAttribute('data-toggle-position', "3");
    });
})





const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const plus = document.querySelector('#plus');
const multiply = document.querySelector('#multiply');
const divide = document.querySelector('#divide');
const equals = document.querySelector('#equals');

const decimal = document.querySelector('#decimal');
const del = document.querySelector('#del')
const reset = document.querySelector("#reset");

const displayContainer = document.querySelector('.calculator__display-container');
const inputDisplay = document.querySelector('.input-display');
let currentDisplay = '';
let currentNumDisplay = '';


let lastInput = '';
let expressionString = '';

const operatorSet = new Set(['+', '-', '/', '*']);



const insertCommas = (str) => {


    let decimalIndex = str.indexOf(".");

    if (decimalIndex == -1) {
        decimalIndex = str.length;
    }

    let resultWithCommas = '';
    let digitCounter = 0;
    for (let i=0; i<str.length; i++) {
        if ( (((decimalIndex - digitCounter) % 3 === 0) && (i > 0)) && i < decimalIndex){
            resultWithCommas += ',';
        }
        digitCounter++;
        resultWithCommas += str[i];
    }

    return resultWithCommas;
}

const appendOperator = (operator) => {

    if (operatorSet.has(lastInput)) {
        expressionString = expressionString.substring(0, expressionString.length-1);
        // expressionString.pop();
        // expressionString += operator;
        // lastInput = ''
        expressionString += operator;
        lastInput = operator;
    } else {
        expressionString += operator;
    }

    lastInput = operator
}

const appendDisplay = (num) => {




    if (currentDisplay === '0' || operatorSet.has(lastInput)) {
        // console.log('lastInput: ' + lastInput + ' resetting display');
        currentDisplay = '';
        currentNumDisplay = '';
    }


    

    expressionString += num;
    currentNumDisplay += num;
    currentDisplay += num;

    let displayWithCommas
    if (currentNumDisplay.length > 2) {
        displayWithCommas = insertCommas(currentNumDisplay);
    } else {
        displayWithCommas = currentDisplay;
    }

    lastInput = num;
    // inputDisplay.innerHTML = `<div>${currentDisplay} </div>`;
    inputDisplay.innerHTML = `<div>${displayWithCommas} </div>`;
    

    displayContainer.appendChild(inputDisplay);
}

zero.addEventListener('click', () => {
    appendDisplay('0');
})

one.addEventListener('click', () => {

    // console.log(parseInt('3+2'));
    // console.log('one');
    
    appendDisplay('1');

})

two.addEventListener('click', () => {
    appendDisplay('2');
})
three.addEventListener('click', () => {
    appendDisplay('3');
})
four.addEventListener('click', () => {
    appendDisplay('4');
})
five.addEventListener('click', () => {
    appendDisplay('5');
})
six.addEventListener('click', () => {
    appendDisplay('6');
})
seven.addEventListener('click', () => {
    appendDisplay('7');
})
eight.addEventListener('click', () => {
    appendDisplay('8');
})
nine.addEventListener('click', () => {
    appendDisplay('9');
})

decimal.addEventListener('click', () => {
    appendDisplay('.');
})

plus.addEventListener('click', () => {
    appendOperator('+');
})
multiply.addEventListener('click', () => {
    appendOperator('*');
})
divide.addEventListener('click', () => {
    appendOperator('/');
})



equals.addEventListener('click', () => {

    let result = eval(expressionString);
    console.log({expressionString});
    console.log({result});

    currentDisplay = '';
    currentNumDisplay = '';
    expressionString = '';

    let resultStr = result.toString();


    let resultWithCommas = insertCommas(resultStr);



    console.log({resultWithCommas})

    

    inputDisplay.innerHTML = `<div>${resultWithCommas} </div>`;
    
    displayContainer.appendChild(inputDisplay);




})

del.addEventListener('click', () => {

    currentDisplay = currentDisplay.slice(0, currentDisplay.length-1);
    currentNumDisplay = currentNumDisplay.slice(0, currentNumDisplay.length-1);

    expressionString = expressionString.slice(0, expressionString.length-1);


    let resultWithCommas = insertCommas(currentDisplay);
    // currentDisplay = '0';
    // inputDisplay.innerHTML = `<div>${currentDisplay} </div>`;
    inputDisplay.innerHTML = `<div>${resultWithCommas} </div>`;

    displayContainer.appendChild(inputDisplay);
})

reset.addEventListener('click', () => {
    expressionString = '';
    currentDisplay = '0';
    currentNumDisplay = '';

    inputDisplay.innerHTML = `<div>${currentDisplay} </div>`;

    displayContainer.appendChild(inputDisplay);
})