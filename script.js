const container = document.querySelector('#container');
const clear = document.querySelector('#clear');
const colorButton = document.querySelector('#colorButton');
const rainbowButton = document.querySelector('#rainbowButton');
const eraser = document.querySelector('#eraser');
let slider = document.querySelector('#myRange');
let output = document.querySelector('#output');

const MODES = {
    GREYSCALE: 'greyscale',
    COLOR: 'color',
    RAINBOW: 'rainbow',
    ERASER: 'eraser',
};

let mode = MODES.GREYSCALE;
let size = slider.value ** 2;
let drawMode = false;
output.innerHTML = slider.value;
draw();

slider.addEventListener('change',(e)=>{
    output.innerHTML = e.target.value;
    size = e.target.value ** 2;
    container.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
    removeChildNodes()
    draw();
});

clear.addEventListener('click',()=>{
    removeChildNodes();
    draw();
});

colorButton.addEventListener('click', ()=>{
    mode = MODES.COLOR;
});

eraser.addEventListener('click', ()=>{
    mode = MODES.ERASER;
});

rainbowButton.addEventListener('click',()=>{
    mode = MODES.RAINBOW;
});

document.querySelector('#colorSelector').addEventListener('change', (e)=>{
    MODES.COLOR = e.target.value;
});


function draw() {
    for (let i = 0; i < size; i++){
    let cell = document.createElement('div');
    container.appendChild(cell);
    cell.addEventListener('click', ()=>{
        drawMode = !drawMode;
        setBackgroundColor(cell);
    });
    cell.addEventListener("mouseenter", ()=>{
        if(drawMode){setBackgroundColor(cell)};
    } );
    }
}

function removeChildNodes(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}

function setBackgroundColor(cell){
    
    switch(mode){
        case MODES.GREYSCALE:
            cell.style.backgroundColor = 'black';
            break;
        case MODES.COLOR:
            cell.style.backgroundColor = MODES.COLOR;
            break;
        case MODES.ERASER:
            cell.style.backgroundColor = 'white';
            break;
        case MODES.RAINBOW:
            cell.style.backgroundColor = `rgb(${findRandomNumber()},${findRandomNumber()},${findRandomNumber()})`;
            break;
    }
}

function findRandomNumber(){
    return Math.floor(Math.random()*256);
}