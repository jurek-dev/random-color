const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var trigger = false;

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    playBlink();
});
document.addEventListener('keypress', function() {
    playBlink();
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function formatHexNumber() {
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    return hexColor;
}

function changeStyles(hex) {
    document.body.style.backgroundColor = hex;
}

function blinkHex() {
    changeStyles(formatHexNumber());
}

function playBlink() {
    if(trigger == false) {
        console.log('You turned blink on');
        timer = setInterval(blinkHex, 100);
        trigger = true;
    } else {
        console.log('You turned blink off');
        trigger = false;
        clearInterval(timer);
    }
}