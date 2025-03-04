const mainDiv = document.querySelector("#grid-container");
const sizePick = document.querySelector("#size-pick");
const confirmSize = document.querySelector('#confirm-size');
const sizePicker = document.querySelector('#size-picker');
const deleteMode = document.querySelector('#delete-mode');
const errorSize = document.querySelector('#error-size');
const randomColors = document.querySelector('#sketch-color');
const blackColor = document.querySelector('#black-color');

//generate random color 
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`; 
}

function makeSketchingGrid(gridSize = 16,color = 'black'){
    mainDiv.innerHTML = '';
    //making squares
    for(let i=0;i<gridSize;i++){
        for(let j=0;j<gridSize;j++){
        const square = document.createElement("div");
        square.classList.add("square");
        mainDiv.appendChild(square);
        }
    }
    const squares = document.querySelectorAll(".square"); 
    squares.forEach(square => {
    square.style.width = `calc(100% / ${gridSize})`;
    square.style.height = `calc(100% / ${gridSize})`;

    //drawing(hover effect)
    square.addEventListener('mouseover', function(){
        square.style.background = `${color}`
    }) 
    
    
});

//delete mode
deleteMode.addEventListener('click',()=>{
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.background = `white`;
        }) 
    })
})

//random colors
randomColors.addEventListener('click', ()=>{
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.background = getRandomColor();
        })
    });
} )

//black color mode
blackColor.addEventListener('click',()=>{
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.background = `black`;
        }) 
    })
})

}
makeSketchingGrid();

//sizing, reset buttons
let menu = document.querySelector('#controls');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'grid-size':
            sizePick.style.display = 'inline-block';
        break;
        case 'reset':
            makeSketchingGrid();
        break;
    }
});

//grid-size controls
const back = document.querySelector("#back");

back.addEventListener('click', () =>{
    sizePick.style.display = 'none';
})

confirmSize.addEventListener('click', () => {
    let chosenSize = sizePicker.value;
    if(chosenSize>0 && chosenSize<101 ){
        errorSize.innerText = '';
        makeSketchingGrid(chosenSize);
    }else{
        errorSize.innerText = '*Choose a number between 1 and 100';
    }
    
});