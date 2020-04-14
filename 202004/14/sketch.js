const mapCols = ["#0068B7", "#419CC0", "#A36840", "green"];

let map;
const step = 40;
let imgs = [];

function preload() {
  imgs[0] = loadImage("monster01.png");
  imgs[1] = loadImage("monster02.png");
  imgs[2] = loadImage("monster03.png");
  imgs[3] = loadImage("monster04.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  map = [];
  for (let y = 0; y < height; y += step) {
    map[int(y / step)] = [];
    for (let x = 0; x < width; x += step) {
      map[int(y / step)][int(x / step)] = 0;
    }
  }
  noStroke();
  imageMode(CENTER);
  frameRate(60);
}

function draw() {
  background(255);

  if (mouseIsPressed) {
    addMap(mouseX, mouseY, 3);
  }
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (getMap(x, y) < 20) {
        fill(mapCols[0]);
      } else if (getMap(x, y) < 40) {
        fill(mapCols[1]);
      } else if (getMap(x, y) < 60) {
        fill(mapCols[2]);
      } else {
        fill(mapCols[3]);
      }

      rect(x, y, step, step);
      if (isLifeGreenMap(x, y)) {
        image(imgs[int(noise(x, y) * 4)], x + step / 2, y + step / 2, 20, 20);
      }
    }
  }
}

function getMap(_x, _y) {
  return map[int(_y / step)][int(_x / step)];
}
function addMap(_x, _y, _n) {
  map[int(_y / step)][int(_x / step)] += _n;
}

function isLifeGreenMap(_x, _y) {
  const th = 60;

  if (getMap(_x, _y) < th) return false;

  let px = _x == 0 ? 0 : _x - step;
  let nx =
    _x == map[0].length * step - step ? map[0].length * step - step : _x + step;
  let py = _y == 0 ? 0 : _y - 1;
  let ny =
    _y == map.length * step - step ? map.length * step - step : _y + step;
  let count = 0;

  if (getMap(px, py) > th) count++;
  if (getMap(px, _y) > th) count++;
  if (getMap(px, ny) > th) count++;
  if (getMap(_x, py) > th) count++;
  if (getMap(_x, ny) > th) count++;
  if (getMap(nx, py) > th) count++;
  if (getMap(nx, _y) > th) count++;
  if (getMap(nx, ny) > th) count++;

  if (count > 2 && count < 5) {
    return true;
  }
  return false;
}
