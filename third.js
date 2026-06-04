let display = document.getElementById("display");
let expression = '';
let result = '0';
let justCalculated = false;
// Add value to display
function appendValue(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = " ";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
