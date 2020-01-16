function createSquares() {
    const container = document.querySelector('#squares');
    for (let i = 0; i < 16; ++i) {
        for (let j = 0; j < 16; ++j) {
            const square = document.createElement('div');
            square.classList.add('square');
            //square.textContent = 'A';
            container.appendChild(square);
        }
        const newLine = document.createElement('br');
        container.appendChild(newLine);
    }
}

function changeBackgroundColor() {
    const squares = Array.from(document.querySelectorAll('.square'));
    squares.forEach(square => square.addEventListener('mouseover', function(e) {
        square.style.backgroundColor = 'white';
    }));
}
createSquares();
changeBackgroundColor();