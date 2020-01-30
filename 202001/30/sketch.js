let cols;
let orders;
let x = 50;
let y = 0;
let ySp = 15;
let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1, 1, 1, 1);
  frameRate(10);

  init();
}

function init() {
  y = 0;
  ySp = random(10, 25);
  count = 0;
  const s = random(0.1, 0.8);
  const b = random(0.5, 1);
  cols = [randCol(s, b), randCol(s, b), randCol(s, b), randCol(s, b)];
  function randCol(s, b) {
    return color(random(), s, b, 0.8);
  }
  const o = [0, 1, 2, 3];
  const n = int(random(2, 5));
  orders = [];
  for (let i = 0; i < n; i++) {
    orders[i] = shuffle(o);
  }
}

function draw() {
  if (height < y) {
    x += 100;
    init();
  }

  if (width < x) {
    background(255);
    x = 50;
  }

  count++;
  if (count > orders.length - 1) {
    count = 0;
  }
  const pcount = count - 1 < 0 ? orders.length - 1 : count - 1;

  y += ySp;

  strokeWeight(5);
  // background(255);
  cols = mySort(orders[count], cols);
  // print(cols);
  cols.forEach((e, i) => {
    stroke(e);
    line(x + orders[pcount][i] * 10, y - ySp, x + orders[count][i] * 10, y);
  });
}

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function mySort(a, b) {
  let c = [];
  for (let i = 0; i < b.length; i++) {
    c[i] = b[a[i]];
  }
  return c;
}
