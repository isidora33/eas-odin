const mainDiv = document.querySelector("#container");

const containerSize = mainDiv.clientWidth; 
const gridSize = 16; 

const squareSize = containerSize / gridSize;

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
});
