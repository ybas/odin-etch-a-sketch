let color = 'black';
let isDrawing = false;
let board = document.querySelector('.board');

function populateBoard(size) {
   let squares = board.querySelectorAll("div");
   squares.forEach((div) => div.remove());
   board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

   let amount = size * size;
   for (let i = 0; i < amount; i++) {
      let square = document.createElement('div');
      square.classList.add("cell");
      square.style.backgroundColor = "white";
      board.insertAdjacentElement("beforeend", square);
   }
}

populateBoard(16);

function changeSize(input) {
   if (input >= 2 && input <=100) {
      document.querySelector('.error').style.display = "none";
      populateBoard(input);
   } else {
      document.querySelector('.error').style.display = "flex";
   }
}

function colorSquare(cell) {
   if (isDrawing) {
      if (color === "random") {
         cell.style.backgroundColor= `hsl(${Math.random() * 360}, 100%, 50%)`;
      } else {
         cell.style.backgroundColor = color;
      }
   }
}

function changeColor(choice) {
   color = choice;
}

function resetBoard(){
   let squares = board.querySelectorAll("div");
   squares.forEach((div) => div.style.backgroundColor = "white");
}

board.addEventListener("pointerdown", (e) => {
   isDrawing = true;
   if (e.target.classList.contains("cell")) {
      colorSquare(e.target);
   }
});

window.addEventListener("pointerup", (e) => {
   isDrawing = false;
});

board.addEventListener("pointerover", (e) => {
   if (!isDrawing) return;
   if (e.target.classList.contains("cell")) {
      colorSquare(e.target);
   }
});