let displayValue = '';

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = '';
    }
    displayValue += value;
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    document.getElementById('display').innerText = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        document.getElementById('display').innerText = displayValue;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
