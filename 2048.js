const grid = document.querySelector(".grid");
const score = document.querySelector(".score");
const width = 4;
let data = [];

function init() {
  for (let i = 0; i < width * width; i++) {
    var div = document.createElement("div");
    div.innerHTML = 0;
    grid.appendChild(div);
    data.push(div);
  }
  createRandomly();
  createRandomly();
}

function createRandomly() {
  num = Math.floor(Math.random() * data.length);
  if (data[num].innerHTML === "0") {
    data[num].innerHTML = 2;
  } else {
    createRandomly();
  }
}

function ifMoveRight() {
  for (i = 0; i < data.length; i++) {
    if (i % width === 0) {
      t1 = data[i].innerHTML;
      t2 = data[i + 1].innerHTML;
      t3 = data[i + 2].innerHTML;
      t4 = data[i + 3].innerHTML;
      temp = [t1, t2, t3, t4];
      console.log(temp);
    }
  }
}

init();
ifMoveRight();
