class Mato {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.t = width * 2;
    this.sp = random(0.2, 1.4);
    this.cols = getSampleColors(3);
    this.r = random(TWO_PI);
    this.r2 = random(TWO_PI);
    this.r3 = random(TWO_PI);
  }
  draw() {
    if (this.t > 0) this.t -= this.sp;
    this.sp++;
    this.r += 0.05;
    this.r2 += 0.05;
    this.r3 += 0.05;

    push();
    translate(this.x, this.y);
    fill(this.cols[0]);
    rotate(this.r);
    rect(0, 0, this.t, this.t);
    fill(this.cols[1]);
    rotate(this.r2);
    rect(0, 0, this.t / 1.5, this.t / 1.5);
    fill(this.cols[2]);
    rotate(this.r3);
    rect(0, 0, this.t / 3, this.t / 3);
    pop();
  }
}

// let matos = [];
let m;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  if (m) m.draw();
}

function touchStarted() {
  m = new Mato(mouseX, mouseY);
}

function getSampleColors(n) {
  colorMode(HSB, 1, 1, 1, 1);
  let h = random();
  let cols = [];
  for (let i = 0; i < n; i++) {
    h += 1 / n;
    cols.push(color(h % 1, 0.3, 1));
  }
  return cols;
}
