
// Calculator sub-functions

function addition (a, b) {
    return result = a + b;
}

function subtraction (a, b) {
    return result = a - b;
}

function multiplication (a, b) {
    return result = a * b;
}

function division (a, b) {
    return result = a / b;
}

// Number storage

let numStorage = {
    digits: [],
};

console.log(numStorage);

//Button reference storage

const equals = document.querySelector('#equals');
const output = document.querySelector('#result');
const calculations = document.querySelector('#temp');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.getAttribute('class') == 'operator') {
            let btnId = e.target.getAttribute('id');
            numStorage.digits.unshift(btnId);
            let btnDisplay = e.target.getAttribute('data-value');
            calculations.textContent += btnDisplay + ' ';
            return btnId; 
        } 
        else if (e.target.getAttribute('class') == 'number') {
            let btnId = e.target.getAttribute('data-value');
            parseInt(btnId);
            numStorage.digits.unshift(btnId);
            calculations.textContent += btnId + ' ';
            return btnId; 
        }
    }) 
})


//Calculate function

function calculate (a, b, operation) {
    if (operation === 'plus') {
        let calculateResult = addition(a, b);
        output.textContent = calculateResult;
        return calculateResult;
    } 
    else if (operation === 'minus') {
        let calculateResult = subtraction(a, b);
        output.textContent = calculateResult;
        return calculateResult;
    } 
    else if (operation === 'multiply') {
        let calculateResult = multiplication(a, b);
        output.textContent = calculateResult;
        return calculateResult;
    }
    else if (operation === 'divide') {
        let calculateResult = division(a, b);
        output.textContent = calculateResult;
        return calculateResult;
    }
}

function getOperator (input) {
    if (input == 'plus' || input == 'minus' || input == 'multiply' || input == 'divide') {
        return true;
    }
    else {
        return false;
    }
}

equals.addEventListener('click', (e) => {
    // get index of operator
    let i = numStorage.digits.findIndex(getOperator);

    // get substring of first number
    let firstSlice = numStorage.digits.slice(i + 1);
    let first = firstSlice.reverse().join('');

    // get substring of second number
    let secondSlice = numStorage.digits.slice(0, i);
    let second = secondSlice.reverse().join('');

    console.log(calculate(parseInt(first), parseInt(second), numStorage.digits[i]));
})
