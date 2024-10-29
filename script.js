let current = '';
let previous = '';
let operator = '';

// All number buttons
const numberButtons = document.querySelectorAll('numbers');

// Operator buttons
const divisionButton = document.getElementById('divide');
const multiplicationButton = document.getElementById('multiply');
const subtractionButton = document.getElementById('subtract');
const addButton = document.getElementById('add');
const calculateButton = document.getElementById('calculate');

// Modifier elements
const positiveNegativeButton = document.getElementById('positiveNegative');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const decimalButton = document.getElementById('decimal');

// Display elements
const previousDisplay = document.getElementById('previous');
const currentDisplay = document.getElementById('current');

//Operator functions
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a * b;
}

// Calculate based on previous number, current number, and operator selected
function operate(operator, previous, current) {
	switch (operator) {
		case '+':
			return add(previous, current);
		case '-':
			return subtract(previous, current);
		case 'x':
			return multiply(previous, current);
		case '/':
			if (current === 0) {
				return null;
			} else {
				return divide(previous, current);
			}
	}
}
