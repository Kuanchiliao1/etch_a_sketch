const containerEl = document.getElementById("container")
const resetBtnEl = document.getElementById("reset")
const changeSizeBtnEl = document.getElementById("change-size")
let sideSquares = 6

function renderGrid(sideSquares) {
  containerEl.innerHTML = ""
  
  for (let i = 0; i < sideSquares; i++) {
    containerEl.appendChild(createRow())
  }
}

function createRow() {
  const rowEl = document.createElement("div")
  const squareLength = containerEl.clientWidth / sideSquares

  rowEl.classList.add("row")
  rowEl.style.width = squareLength * sideSquares + "px";
  rowEl.style.height = squareLength + "px";
  for (let i = 0; i < sideSquares; i++) {
    rowEl.appendChild(createSquare())
  }
  return rowEl
}

function createSquare() {
  const squareEl = document.createElement("div")
  squareEl.classList.add("square")
  return squareEl
}

containerEl.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square") && event.buttons !== 0) {
    event.target.classList.add("white")
  }
})

changeSizeBtnEl.addEventListener("click", () => {
  do {
    sideSquares = prompt("Enter size between 1 and 30")
  }
  while(sideSquares <= 0 || sideSquares > 30)
  
  renderGrid(sideSquares)
})

resetBtnEl.addEventListener("click", (event) => {
  containerEl.innerHTML = ""
  renderGrid(sideSquares)
})

renderGrid(sideSquares)