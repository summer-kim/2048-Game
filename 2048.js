const grid = document.querySelector(".grid");
const score = document.querySelector(".your-score");
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
    table[num].style.backgroundColor = "rgb(142, 250, 53)";
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

      colorChecker(table[i]);
      colorChecker(table[i + 1]);
      colorChecker(table[i + 2]);
      colorChecker(table[i + 3]);
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

      colorChecker(table[i]);
      colorChecker(table[i + 1]);
      colorChecker(table[i + 2]);
      colorChecker(table[i + 3]);
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

    colorChecker(table[i]);
    colorChecker(table[i + width]);
    colorChecker(table[i + width * 2]);
    colorChecker(table[i + width * 3]);
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

    colorChecker(table[i]);
    colorChecker(table[i + width]);
    colorChecker(table[i + width * 2]);
    colorChecker(table[i + width * 3]);
  }
}

function combineRow() {
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4 - 1; k++) {
      let order = k + j * 4;
      if (table[order].innerHTML !== "0") {
        if (table[order].innerHTML === table[order + 1].innerHTML) {
          table[order].innerHTML = 0;
          var value = table[order + 1].innerHTML;
          table[order + 1].innerHTML = parseInt(value) * 2;
        }
      }
    }
  }
}
function combineCol() {
  for (let j = 0; j < 4; j++) {
    for (let k = 0; k < 4 - 1; k++) {
      let order = j + k * 4;
      if (table[order].innerHTML !== "0") {
        if (table[order].innerHTML === table[order + 4].innerHTML) {
          table[order].innerHTML = 0;
          var value = table[order + 4].innerHTML;
          table[order + 4].innerHTML = parseInt(value) * 2;
        }
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

function colorChecker(square) {
  if (square.innerHTML === "0") {
    square.style.backgroundColor = "yellowgreen";
    return;
  } else if (square.innerHTML === "2") {
    square.style.backgroundColor = "rgb(142, 250, 53)";
    return;
  } else if (square.innerHTML === "4") {
    square.style.backgroundColor = "yellow";
    return;
  } else if (square.innerHTML === "8") {
    square.style.backgroundColor = "rgb(255, 187, 0)";
    return;
  } else if (square.innerHTML === "16") {
    square.style.backgroundColor = "rgb(255, 153, 0)";
    return;
  } else if (square.innerHTML === "32") {
    square.style.backgroundColor = "rgb(255, 71, 15)";
    return;
  } else if (square.innerHTML === "64") {
    square.style.backgroundColor = "red";
    return;
  } else if (square.innerHTML === "128") {
    square.style.backgroundColor = "rgb(255, 95, 95)";
    return;
  } else if (square.innerHTML === "256") {
    square.style.backgroundColor = "rgb(255, 0, 149)";
    return;
  } else if (square.innerHTML === "512") {
    square.style.backgroundColor = "rgb(255, 158, 174)";
    return;
  }
}

init();
document.addEventListener("keyup", directionOfKey);
