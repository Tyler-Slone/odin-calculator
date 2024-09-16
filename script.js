let current = [];
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
