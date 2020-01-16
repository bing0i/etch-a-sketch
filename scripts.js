function createSquares(numberOfSquares = 16, size = 960) {
    let sizeOfSquare = size / numberOfSquares;
    const squares = document.querySelector('#squares');
    squares.style.width = size;
    squares.style.height = size;
    for (let i = 0; i < numberOfSquares; ++i) {
        for (let j = 0; j < numberOfSquares; ++j) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${sizeOfSquare}px`;
            square.style.height = `${sizeOfSquare}px`;
            square.style.backgroundColor = 'black';
            squares.appendChild(square);
        }
        const newLine = document.createElement('br');
        squares.appendChild(newLine);
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max)); 
}


function randomRGBColor() {
    return 'rgb(' + getRandomNumber(256) + ',' + getRandomNumber(256) + ',' + getRandomNumber(256)+ ')';
}

function getRGBValue(color) {
    let arrayOfColor = [];
    let result = color.substring(4, color.length - 1);
    let r = result.substring(0, result.indexOf(','));
    arrayOfColor.push(Number(r));
    result = result.substring(result.indexOf(',') + 1);
    let g = result.substring(0, result.indexOf(','));
    arrayOfColor.push(Number(g));
    result = result.substring(result.indexOf(',') + 1);
    let b = result;
    arrayOfColor.push(Number(b));
    return arrayOfColor;
}

function changeBackgroundColor() {
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('mouseover', function(e) {
        if (square.style.backgroundColor === 'black') {
            let color = randomRGBColor();
            square.style.backgroundColor = color;
        }
        else {
            let colorArray = getRGBValue(square.style.backgroundColor);
            for (let i = 0; i < 3; ++i)
                if (colorArray[i] <= 0) {
                    colorArray[i] = 0;
                    return;
                }
                else
                    colorArray[i] = colorArray[i] - colorArray[i] * 0.3;
            square.style.backgroundColor = 'rgb(' + colorArray[0] + ',' + colorArray[1] + ',' + colorArray[2] + ')';
        }
    }));
}

function deleteSquares() {
    let squares = document.querySelector('#squares');
    while (squares.firstChild) {
        squares.removeChild(squares.firstChild);
    }
}

function changeNumberOfSquares() {
    deleteSquares();
    let numberOfSquares = prompt('How many squares per side?');
    if (numberOfSquares === '' || numberOfSquares === null)
        createSquares();
    else
        createSquares(numberOfSquares, 960);
    changeBackgroundColor();
}

function resetSketchpad(color = 'black') {
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.style.backgroundColor = color);
}

createSquares();
changeBackgroundColor();
