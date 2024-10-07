let display = document.getElementById('display');

// Function to append a value to the display
function append(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the square of the number
function square() {
    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = value * value;
    }
}

// Function to perform calculation when '=' is pressed
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
