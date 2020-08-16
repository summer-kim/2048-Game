const table = document.getElementsByTagName("table")[0];
var data = [];

function init() {
  var fragment = document.createDocumentFragment();
  [1, 2, 3, 4].forEach(function () {
    const rowdata = [];
    data.push(rowdata);
    const tr = document.createElement("tr");
    [1, 2, 3, 4].forEach(function () {
      rowdata.push(0);
      const td = document.createElement("td");
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
}

function createNum() {
  var tempArr = [];
  data.forEach(function (rowdata, i) {
    rowdata.forEach(function (coldata, j) {
      tempArr.push([i, j]);
    });
  });
  randomValue = tempArr[Math.floor(Math.random() * tempArr.length)];
  table.children[randomValue[0]].children[randomValue[1]].textContent = 2;
  data[randomValue[0]][randomValue[1]] = 2;
}

init();
createNum();

var startDrag = false;
var iAmDragging = false;
var startPosition;

var targetStart;
var targetEnd;

table.addEventListener("mousedown", function (e) {
  startDrag = true;
  startPosition = [e.clientX, e.clientY];
  targetStart = e;
});

table.addEventListener("mousemove", function () {
  if (startDrag) {
    iAmDragging = true;
  }
});

table.addEventListener("mouseup", function (e) {
  var direction;
  if (iAmDragging) {
    lastPosition = [e.clientX, e.clientY];
    differenceX = lastPosition[0] - startPosition[0];
    differenceY = startPosition[1] - lastPosition[1];
    if (differenceY > differenceX) {
      if (differenceY > -differenceX) {
        direction = "up";
      } else {
        direction = "left";
      }
    } else if (differenceY < differenceX) {
      if (differenceY < -differenceX) {
        direction = "down";
      } else {
        direction = "right";
      }
    }
    targetEnd = e;
    moveBlock(direction);
  }
  startDrag = false;
  iAmDragging = false;
});

function moveBlock(direction) {
  switch (direction) {
    case "up":
      var newData = [[], [], [], []];
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            newData[j].push(colData);
          }
        });
      });
      [1, 2, 3, 4].forEach(function (rowData, i) {
        [1, 2, 3, 4].forEach(function (colData, j) {
          data[i][j] = newData[j][i] || 0;
        });
      });
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            table.children[i].children[j].textContent = data[i][j];
          } else {
            table.children[i].children[j].textContent = "";
          }
        });
      });
      createNum();
      console.log("up");
      break;
    case "left":
      newData = [[], [], [], []];
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            newData[i].push(colData);
          }
        });
      });
      [1, 2, 3, 4].forEach(function (rowData, i) {
        [1, 2, 3, 4].forEach(function (colData, j) {
          data[i][j] = newData[i][j] || 0;
        });
      });
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            table.children[i].children[j].textContent = data[i][j];
          } else {
            table.children[i].children[j].textContent = "";
          }
        });
      });
      createNum();
      console.log("left");
      break;
    case "down":
      newData = [[], [], [], []];
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            newData[j].push(colData);
          }
        });
      });
      [1, 2, 3, 4].forEach(function (rowData, i) {
        [1, 2, 3, 4].forEach(function (colData, j) {
          data[3 - i][j] = newData[j][i] || 0;
        });
      });
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            table.children[i].children[j].textContent = data[i][j];
          } else {
            table.children[i].children[j].textContent = "";
          }
        });
      });
      createNum();
      console.log("down");
      break;
    case "right":
      newData = [[], [], [], []];
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            newData[i].push(colData);
          }
        });
      });
      [1, 2, 3, 4].forEach(function (rowData, i) {
        [1, 2, 3, 4].forEach(function (colData, j) {
          data[i][3 - j] = newData[i][j] || 0;
        });
      });
      data.forEach(function (rowData, i) {
        rowData.forEach(function (colData, j) {
          if (colData) {
            table.children[i].children[j].textContent = data[i][j];
          } else {
            table.children[i].children[j].textContent = "";
          }
        });
      });
      createNum();
      console.log("right");
      break;
  }
}
