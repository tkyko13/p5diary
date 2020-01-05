class Mato {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.t = 1;
    this.sp = random(0.2, 1.4);
    this.cols = getSampleColors(3);
  }
  draw() {
    this.t += this.sp;
    this.sp++;
    fill(this.cols[0]);
    circle(this.x, this.y, this.t);
    fill(this.cols[1]);
    ellipse(this.x, this.y, this.t / 1.5, this.t / 1.5);
    fill(this.cols[2]);
    ellipse(this.x, this.y, this.t / 3, this.t / 3);
  }
}

// let matos = [];
let m;
function setup() {
  createCanvas(windowWidth, windowHeight);
  // noStroke();
}

function draw() {
  // background(255);
  // if (mouseIsPressed) matos.push(new Mato(mouseX, mouseY));
  // matos.forEach(e => {
  //   e.draw();
  // });
  // matos = matos.filter(e => {
  //   return e.t < 1000;
  // });
  // if (mouseIsPressed) m = new Mato(mouseX, mouseY);
  if (m) m.draw();
}

function touchStarted() {
  if (mouseIsPressed) m = new Mato(mouseX, mouseY);
}

function getSampleColors(n) {
  colorMode(HSB, 1, 1, 1, 1);
  let h = random();
  let cols = [];
  for (let i = 0; i < n; i++) {
    h += 1 / n;
    cols.push(color(h % 1, 1, 1, 0.1));
  }
  return cols;
}
