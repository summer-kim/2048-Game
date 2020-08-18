const grid = document.querySelector(".grid");
const score = document.querySelector(".score");
const width = 4;
let data = [];

function init() {
  for (let i = 0; i < width * width; i++) {
    var div = document.createElement("div");
    div.innerHTML = 0;
    grid.appendChild(div);
  }
}

init();
