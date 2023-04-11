const containerEl = document.getElementById("container")

function renderSquares(sideSquares) {
  const numberOfSquares = sideSquares ** 2;
  const squareLength = Math.floor(window.getComputedStyle(containerEl).width.slice(0, -2) / String(sideSquares))

  containerEl.style.height = window.getComputedStyle(containerEl).width

  const rowHeight = squareLength;
  const rowLength = squareLength * sideSquares;
  
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
  console.log(event.target.id)
  if (event.target.id) {
    event.target.classList.add("white")
  }
})

renderSquares(5)