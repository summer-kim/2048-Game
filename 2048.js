const grid = document.querySelector(".grid");
const score = document.querySelector(".score");
const width = 4;
let table = [];

//filteredRow에서 바로 combine할수있게 수정하기

function init() {
  for (let i = 0; i < width * width; i++) {
    var div = document.createElement("div");
    div.innerHTML = 0;
    grid.appendChild(div);
    table.push(div);
  }
  createRandomly();
  createRandomly();
}

function createRandomly() {
  num = Math.floor(Math.random() * table.length);
  if (table[num].innerHTML === "0") {
    table[num].innerHTML = 2;
  } else {
    createRandomly();
  }
}

function ifMoveRight() {
  for (i = 0; i < table.length; i++) {
    if (i % width === 0) {
      t1 = table[i].innerHTML;
      t2 = table[i + 1].innerHTML;
      t3 = table[i + 2].innerHTML;
      t4 = table[i + 3].innerHTML;
      temp = [parseInt(t1), parseInt(t2), parseInt(t3), parseInt(t4)];

      filteredRow = temp.filter((num) => num);
      numOfZero = 4 - filteredRow.length;
      ZeroArray = Array(numOfZero).fill(0);
      ArrayMoved = ZeroArray.concat(filteredRow);

      table[i].innerHTML = ArrayMoved[0];
      table[i + 1].innerHTML = ArrayMoved[1];
      table[i + 2].innerHTML = ArrayMoved[2];
      table[i + 3].innerHTML = ArrayMoved[3];
    }
  }
}

function ifMoveLeft() {
  for (i = 0; i < table.length; i++) {
    if (i % width === 0) {
      t1 = table[i].innerHTML;
      t2 = table[i + 1].innerHTML;
      t3 = table[i + 2].innerHTML;
      t4 = table[i + 3].innerHTML;
      temp = [parseInt(t1), parseInt(t2), parseInt(t3), parseInt(t4)];

      filteredRow = temp.filter((num) => num);
      numOfZero = 4 - filteredRow.length;
      ZeroArray = Array(numOfZero).fill(0);
      ArrayMoved = ZeroArray.concat(filteredRow);

      table[i].innerHTML = ArrayMoved[3];
      table[i + 1].innerHTML = ArrayMoved[2];
      table[i + 2].innerHTML = ArrayMoved[1];
      table[i + 3].innerHTML = ArrayMoved[0];
    }
  }
}
function ifMoveUp() {
  for (i = 0; i < width; i++) {
    t1 = table[i].innerHTML;
    t2 = table[i + width].innerHTML;
    t3 = table[i + width * 2].innerHTML;
    t4 = table[i + width * 3].innerHTML;
    temp = [parseInt(t1), parseInt(t2), parseInt(t3), parseInt(t4)];

    filteredRow = temp.filter((num) => num);
    numOfZero = 4 - filteredRow.length;
    ZeroArray = Array(numOfZero).fill(0);
    ArrayMoved = ZeroArray.concat(filteredRow);

    table[i].innerHTML = ArrayMoved[3];
    table[i + width].innerHTML = ArrayMoved[2];
    table[i + width * 2].innerHTML = ArrayMoved[1];
    table[i + width * 3].innerHTML = ArrayMoved[0];
  }
}
function ifMoveDown() {
  for (i = 0; i < width; i++) {
    t1 = table[i].innerHTML;
    t2 = table[i + width].innerHTML;
    t3 = table[i + width * 2].innerHTML;
    t4 = table[i + width * 3].innerHTML;
    temp = [parseInt(t1), parseInt(t2), parseInt(t3), parseInt(t4)];

    filteredRow = temp.filter((num) => num);
    numOfZero = 4 - filteredRow.length;
    ZeroArray = Array(numOfZero).fill(0);
    ArrayMoved = ZeroArray.concat(filteredRow);

    table[i].innerHTML = ArrayMoved[0];
    table[i + width].innerHTML = ArrayMoved[1];
    table[i + width * 2].innerHTML = ArrayMoved[2];
    table[i + width * 3].innerHTML = ArrayMoved[3];
  }
}

function combineRow() {
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4 - 1; k++) {
      console.log(j, k);
      if (table[k].innerHTML === table[k + 1].innerHTML) {
        console.log(j, k, "done");
        table[k].innerHTML = 0;
        var value = table[k + 1].innerHTML;
        table[k + 1].innerHTML = parseInt(value) * 2;
      }
    }
  }
}
function combineCol() {
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4 - 1; k++) {
      let order = j + k * 4;
      if (table[order].innerHTML === table[order + 4].innerHTML) {
        table[order].innerHTML = 0;
        var value = table[order + 4].innerHTML;
        table[order + 4].innerHTML = parseInt(value) * 2;
      }
    }
  }
}

function directionOfKey(e) {
  if (e.keyCode === 39) {
    ifMoveRight();
    combineRow();
    ifMoveRight();
    createRandomly();
  } else if (e.keyCode === 37) {
    ifMoveLeft();
    combineRow();
    ifMoveLeft();
    createRandomly();
  } else if (e.keyCode === 38) {
    ifMoveUp();
    combineCol();
    ifMoveUp();
    createRandomly();
  } else if (e.keyCode === 40) {
    ifMoveDown();
    combineCol();
    ifMoveDown();
    createRandomly();
  }
}

init();
document.addEventListener("keyup", directionOfKey);
