function createSquares(numberOfSquares = 16, size = 880) {
    let sizeOfSquare = Math.trunc(size / numberOfSquares);
    console.log(sizeOfSquare);
    const squares = document.querySelector('#squares');
    squares.style.height = size.toString() + 'px';
    for (let i = 0; i < numberOfSquares; ++i) {
        for (let j = 0; j < numberOfSquares; ++j) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = sizeOfSquare.toString() + 'px';
            square.style.height = sizeOfSquare.toString() + 'px';
            square.style.backgroundColor = 'white';
            square.style.border = '0.5px solid #333333' /*somehow 0.5 fit perfectly*/
            squares.appendChild(square);
        }
        const newLine = document.createElement('br');
        squares.appendChild(newLine);
    }
    console.log(squares.style.height);
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
        if (square.style.backgroundColor === 'white') {
            let color = randomRGBColor();
            square.style.backgroundColor = color;
        }
        else {
            let colorArray = getRGBValue(square.style.backgroundColor);
            for (let i = 0; i < 3; ++i)
                if (colorArray[i] <= 0) {
                    colorArray[i] = 0;
                }
                else
                    colorArray[i] = 0.7 * colorArray[i];
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
    let numberOfSquares = prompt('How many squares per side?');
    if (numberOfSquares === '') {
        deleteSquares();
        createSquares();
    }
    else if (numberOfSquares === null)
        return;
    else {
        deleteSquares();
        createSquares(numberOfSquares, 880);
    }
    changeBackgroundColor();
}

function resetSketchpad(color = 'white') {
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.style.backgroundColor = color);
}

createSquares();
changeBackgroundColor();
