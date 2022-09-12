
// Calculator functions

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

const output = document.querySelector('#result');

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

console.log(calculate(1, 4, 'plus'));


