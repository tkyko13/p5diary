class Engine {
  constructor() {
    this.pos = 0;
    this.sp = 0;

    this.posLog = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  getPos() {
    const lim = 10;
    // this.sp += random(-(lim + this.sp) / lim, (lim - this.sp) / lim);
    this.sp += random(-1, 1);
    this.sp = this.sp < -lim ? -lim : this.sp;
    this.sp = lim < this.sp ? lim : this.sp;

    this.pos += this.sp;
    this.posLog.push(this.pos);
    this.posLog.shift();
    return this.pos;
  }
}

let x, y;
// let suica;
// let pasmo;
let offx, offy;
function preload() {
  // pasmo = loadImage("pasmo.png");
  // suica = loadImage("suica.jpg");
}

let sum = function(arr) {
  return arr.reduce(function(prev, current, i, arr) {
    return prev + current;
  });
};
let average = function(arr, fn) {
  return sum(arr, fn) / arr.length;
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = new Engine();
  y = new Engine();
  offx = random(999);
  offy = random(999);
}

function draw() {
  const wx = -(width / 2 - average(x.posLog));
  const wy = -(height / 2 - average(y.posLog));
  translate(width / 2 - average(x.posLog), height / 2 - average(y.posLog));
  background(255);

  noStroke();

  fill(0);
  for (let y = wy; y < wy + height; y += 5) {
    for (let x = wx; x < wx + width; x += 5) {
      if (noise(x / 100.0 + offx, y / 100.0 + offy) > 0.7) {
        rect(x, y, 5, 5);
      }
    }
  }

  fill(255, 0, 0);
  ellipse(x.getPos(), y.getPos(), 20, 20);
}
