const container = document.querySelector('#container');
let drawMode = false;

for (let i = 0; i < 256; i++){
    let cell = document.createElement('div');
    container.appendChild(cell);
    cell.addEventListener('click', ()=>{drawMode = !drawMode;});
    cell.addEventListener("mouseenter", ()=>{
        if(drawMode){cell.style.backgroundColor = 'black';};
    } );
}

