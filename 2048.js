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
