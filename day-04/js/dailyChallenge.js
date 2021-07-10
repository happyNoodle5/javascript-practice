// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
const firstNumber = parseInt( prompt('submit any number') );
const secondNumber = parseInt( prompt('submit a different number') );

// Compare the two numbers
// Alert the larger number
if(firstNumber > secondNumber) {
    alert(firstNumber);
} else if(secondNumber > firstNumber) {
    alert(secondNumber);
} else {
    alert('submit two DIFFERENT numbers')
}