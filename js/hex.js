// Array of all possible HEX Colors:
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Variables:
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Listen 'click' event of action button
btn.addEventListener('click', function() {
    changeStyles(formatHexNumber());
});

/*
 * Functions
 * This area're located all functions of JavaScript code:
*/

// Get random position of hex's array:
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

// Get and format random hex code
function formatHexNumber() {
    let hexColor = '#';

    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}

// Change CSS properties of HTML page
function changeStyles(hex) {
    color.textContent = hex;
    document.body.style.backgroundColor = hex;
}