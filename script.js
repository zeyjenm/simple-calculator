
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
    singleDigits: [],
};

let operatorStorage = {
    operator: [],
}

console.log(numStorage);
console.log(operatorStorage);

//Button reference storage

const equals = document.querySelector('#equals');
const output = document.querySelector('#result');

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.getAttribute('class') == 'operator') {
            let btnId = e.target.getAttribute('id');
            console.log(btnId);
            operatorStorage.operator.unshift(btnId);
            return btnId; 
        } 
        else if (e.target.getAttribute('class') == 'number') {
            let btnId = e.target.getAttribute('data-value');
            parseInt(btnId);
            console.log(btnId);
            numStorage.singleDigits.unshift(btnId);
            console.log(numStorage);
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


equals.addEventListener('click', (e) => {
    console.log(calculate(parseInt(numStorage.singleDigits[1]), parseInt(numStorage.singleDigits[0]), operatorStorage.operator[0]));
})
