const container = document.querySelector('#container');
let drawMode = false;
let slider = document.querySelector('#myRange');
let output = document.querySelector('#output');
let size = slider.value ** 2;
output.innerHTML = slider.value;
draw();

slider.addEventListener('change',(e)=>{
    output.innerHTML = e.target.value;
    size = e.target.value ** 2;
    container.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
    removeChildNodes()
    draw();
});

function draw() {
    for (let i = 0; i < size; i++){
    let cell = document.createElement('div');
    container.appendChild(cell);
    cell.addEventListener('click', ()=>{drawMode = !drawMode;});
    cell.addEventListener("mouseenter", ()=>{
        if(drawMode){cell.style.backgroundColor = 'black';};
    } );
}
}

function removeChildNodes(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}




