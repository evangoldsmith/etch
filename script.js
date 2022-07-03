const GRID_SIZE = 560
const grid = document.querySelector('.Grid');

function draw(n) {
    clear();
    for (let i = 0; i < n*n; i++) {
        makeCell(GRID_SIZE / n);
    }
}

function clear() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function makeCell(size) {
    const cell = document.createElement('div');
    cell.classList.add('Cell');
    cell.style.height = `${size-2}px`;
    cell.style.width = `${size-2}px`;

    cell.addEventListener('mouseover', () => {
        if (rainbow) {
            color = generateRandomColor();
        }
        cell.style.backgroundColor = color;
        cell.style.transition = '0.2s ease';
    });
    grid.appendChild(cell);
}

let color = 'black';
let size = 16;
let last = document.querySelector('#black');
let random = false;
let rainbow = false;
draw(16);

const size_select = document.querySelector('.Size-Select');
size_select.addEventListener('click', (event) => {
    if (event.target.role === 'button') {
        size = parseInt(event.target.id);
        draw(size);
    }
});

const color_select = document.querySelector('.Color-Select');
color_select.addEventListener('click', (event) => {
    if (event.target.role === 'button') {
        if (last) {
            last.style.border = 'none';
        }
        const btn = document.querySelector('#' + event.target.id);
        btn.style.border = 'solid white 1px';
        last = btn;
        if (event.target.id === 'rainbow') {
            rainbow = true;
            color = generateRandomColor();
        }
        else {
            rainbow = false;
            if (event.target.id === 'random') {
                color = generateRandomColor();
            }
            else {
                color = event.target.id;
            }   
        }
    }
});

const clear_grid = document.querySelector('#Clear');
clear_grid.addEventListener('click', () => {
    clear();
    draw(size)
});




    



