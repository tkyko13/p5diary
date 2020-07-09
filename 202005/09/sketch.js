// 5/9 ら、ライフライン

let _cellSize = 30;
let _numX, _numY;
let _cellArray;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  _numX = floor(width / _cellSize);
  _numY = floor(height / _cellSize);
  _cellArray = [_numY];
  for (let i = 0; i < _numX; i++) {
    _cellArray[i] = [_numX];
  }
  restart();

  // strokeWeight(5);
  // stroke(0, 50);
}

function restart() {
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y] = new Cell(x, y);
    }
  }
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      let above = y - 1;
      let below = y + 1;
      let left = x - 1;
      let right = x + 1;
      if (above < 0) {
        above = _numY - 1;
      }
      if (below == _numY) {
        below = 0;
      }
      if (left < 0) {
        left = _numX - 1;
      }
      if (right == _numX) {
        right = 0;
      }
      _cellArray[x][y].addNeighbour(_cellArray[left][above]);
      _cellArray[x][y].addNeighbour(_cellArray[left][y]);
      _cellArray[x][y].addNeighbour(_cellArray[left][below]);
      _cellArray[x][y].addNeighbour(_cellArray[x][below]);
      _cellArray[x][y].addNeighbour(_cellArray[right][below]);
      _cellArray[x][y].addNeighbour(_cellArray[right][y]);
      _cellArray[x][y].addNeighbour(_cellArray[right][above]);
      _cellArray[x][y].addNeighbour(_cellArray[x][above]);
    }
  }
}

function draw() {
  background(200);
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y].calcNextState();
    }
  }
  translate(_cellSize / 2, _cellSize / 2);
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y].drawMe();
    }
  }
}

function mousePressed() {
  restart();
}

function Cell(ex, why) {
  this.x = ex * _cellSize;
  this.y = why * _cellSize;
  if (random(2) > 1) {
    this.nextState = true;
  } else {
    this.nextState = false;
  }
  this.state = this.nextState;
  this.neighbours = [];
}

Cell.prototype.addNeighbour = function (cell) {
  this.neighbours.push(cell);
};

Cell.prototype.calcNextState = function () {
  let liveCount = 0;
  for (let i = 0; i < this.neighbours.length; i++) {
    if (this.neighbours[i].state == true) {
      liveCount++;
    }
  }
  if (this.state == true) {
    if (liveCount == 2 || liveCount == 3) {
      this.nextState = true;
    } else {
      this.nextState = false;
    }
  } else {
    if (liveCount == 3) {
      this.nextState = true;
    } else {
      this.nextState = false;
    }
  }
};

Cell.prototype.drawMe = function () {
  this.state = this.nextState;
  if (this.state) {
    let around = this.getAround(false);
    for (let i = 0; i < around.length - 1; i++) {
      if (around[i]) line(this.x, this.y, around[i].x, around[i].y);
    }
  }
};

Cell.prototype.getAround = function (wrap) {
  let x = this.x / _cellSize;
  let y = this.y / _cellSize;
  let around = [];
  let above = y - 1;
  let below = y + 1;
  let left = x - 1;
  let right = x + 1;

  if (wrap) {
    if (above < 0) above = _numY - 1;
    if (below == _numY) below = 0;
    if (left < 0) left = _numX - 1;
    if (right == _numX) right = 0;
    around.push(_cellArray[left][above]);
    around.push(_cellArray[left][y]);
    around.push(_cellArray[left][below]);
    around.push(_cellArray[x][below]);
    around.push(_cellArray[right][below]);
    around.push(_cellArray[right][y]);
    around.push(_cellArray[right][above]);
    around.push(_cellArray[x][above]);
  } else {
    if (above >= 0 || wrap) {
      around.push(_cellArray[x][above]);
      if (left >= 0 || wrap) around.push(_cellArray[left][above]);
      if (right < _numX || wrap) around.push(_cellArray[right][above]);
    }
    if (below < _numY || wrap) {
      around.push(_cellArray[x][below]);
      if (left >= 0 || wrap) around.push(_cellArray[left][below]);
      if (right < _numX || wrap) around.push(_cellArray[right][below]);
    }
  }

  return around;
};
