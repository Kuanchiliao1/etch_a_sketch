const containerEl = document.getElementById("container")
const resetBtnEl = document.getElementById("reset")
const changeSizeBtnEl = document.getElementById("change-size")
let sideSquares = 6

function renderSquares(sideSquares) {
  const squareLength = Math.floor(window.getComputedStyle(containerEl).width.slice(0, -2) / String(sideSquares))
  const rowHeight = squareLength;
  const rowLength = squareLength * sideSquares;
  containerEl.innerHTML = ""
  
  for (let i = 0; i < sideSquares; i++) {
    containerEl.innerHTML += `
  <div class="row" id="row-${i + 1}" style="width: ${rowLength}px; height: ${rowHeight}px;" id=${i + 1}></div>
`
  const rowEl = document.getElementById(`row-${i + 1}`)
    for (let j = 0; j < sideSquares; j++) {
      rowEl.innerHTML += `
        <div class="square" id="${j + 1}"></div>
      `
    }
  }
}

containerEl.addEventListener("mouseover", (event) => {
  if (event.target.id) {
    event.target.classList.add("white")
  }
})

changeSizeBtnEl.addEventListener("click", (event) => {
  sideSquares = prompt("Enter size between 1 and 30")
  renderSquares(sideSquares)
})

resetBtnEl.addEventListener("click", (event) => {
  containerEl.innerHTML = ""
  renderSquares(sideSquares)
})

renderSquares(sideSquares)