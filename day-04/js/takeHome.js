// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number

// Ask user for 2 numbers
function askForNumbers() {
    const firstInput = prompt('submit any number');
    const secondInput = prompt('submit a different number')
};

askForNumbers;

// alert the bigger number
function convertInput() {
    const firstNumber = parseInt(firstInput);
    const secondNumber = parseInt(secondInput);
};

convertInput;

// edge case for NaN
// if (firstNumber || secondNumber !== typeof Int) {
//     confirm('You need to put numbers');
//     askForNumbers;
//     convertInput;
// }

// compare the numbers and alert the larger number
if (firstNumber > secondNumber) {
    alert(firstNumber);
} else if (secondNumber > firstNumber) {
    alert(secondNumber);
} else {
    alert('submit two DIFFERENT numbers');
};

