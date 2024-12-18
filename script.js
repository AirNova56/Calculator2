let currentNumber = '';
let previousNumber = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    if (currentNumber.length >= 10) return; // Ліміт цифр
    currentNumber += number;
    updateDisplay(currentNumber);
}

function chooseOperation(op) {
    if (currentNumber === '' && previousNumber === '') return;
    if (currentNumber === '') {
        operation = op;
        updateDisplay(`${previousNumber} ${operation}`);
        return;
    }
    if (previousNumber !== '') compute();
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay(`${previousNumber} ${operation}`);
}

function compute() {
    if (currentNumber === '' || previousNumber === '' || operation === null) return;
    let result;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                updateDisplay('Помилка');
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    previousNumber = result.toString();
    currentNumber = '';
    operation = null;
    updateDisplay(previousNumber);
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay('0');
}

function updateDisplay(value) {
    display.textContent = value;
}