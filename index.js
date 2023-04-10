const containerEL = document.getElementById("container")

function renderSquares() {
  const numberOfSquares = 16 * 16;
  
  for (let i = 0; i < numberOfSquares; i++) {
    containerEL.innerHTML += `
      <div class="square" id=${i + 1}></div>
    `
  }
}

renderSquares()