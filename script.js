const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const perimeterOutput = document.getElementById('perimeter');
const areaOutput = document.getElementById('area');
const diagonalOutput = document.getElementById('diagonal');

function validateKeyPress(event) {
    const char = event.key;

    if (
        (char < '0' || char > '9') &&
        char !== '.' &&
        char !== 'Backspace' &&
        char !== 'Delete' &&
        char !== 'ArrowLeft' &&
        char !== 'ArrowRight'
    ) {
        event.preventDefault();
    }
}

function validateInput(value) {
    return !isNaN(value) && value > 0;
}

function calculateRectangle() {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);

    if (!validateInput(length) || !validateInput(width)) {
        alert('Будь ласка, введіть коректні значення!');
        return;
    }

    const perimeter = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(length ** 2 + width ** 2).toFixed(4);

    perimeterOutput.textContent = perimeter;
    areaOutput.textContent = area;
    diagonalOutput.textContent = diagonal;
}

lengthInput.addEventListener('input', calculateRectangle);
widthInput.addEventListener('input', calculateRectangle);

lengthInput.addEventListener('keydown', validateKeyPress);
widthInput.addEventListener('keydown', validateKeyPress);

calculateRectangle();
