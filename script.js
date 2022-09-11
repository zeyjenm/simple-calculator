
// Calculator functions

function addition (a, b) {
    return a + b;
}

function subtraction (a, b) {
    return a - b;
}

function multiplication (a, b) {
    return a * b;
}

function division (a, b) {
    return a / b;
}

function calculate (a, b, operation) {
    if (operation === 'plus') {
        return addition(a, b);
    } 
    else if (operation === 'minus') {
        return subtraction(a, b);
    } 
    else if (operation === 'multiply') {
        return multiplication(a, b);
    }
    else if (operation === 'divide') {
        return division(a, b);
    }
}