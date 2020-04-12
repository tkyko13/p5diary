class Pendulum {
  constructor(_r) {
    this.x = width / 2;
    this.y = height / 4;
    this.r = _r;
    this.seed = random(9);
    this.rad = 0.3;
    this.ex = 0;
    this.ey = 0;
  }
  setPt(_x, _y) {
    this.x = _x;
    this.y = _y;
  }
  draw() {
    const n =
      animLoop.noise({ radius: this.rad, seed: this.seed }) * 2 + PI / 2;
    this.ex = this.x + cos(n) * this.r;
    this.ey = this.y + sin(n) * this.r;
    ellipse(this.ex, this.ey, this.r / 2, this.r / 2);
  }
}

let p = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  frameRate(30);
  createLoop({});
  // animLoop.noiseFrequency(0.4);
  for (let i = 0; i < 10; i++) {
    p.push(new Pendulum(100 - i * 10));
  }
}

function draw() {
  background(255);
  p.forEach((e, i, a) => {
    if (i != 0) {
      e.setPt(a[i - 1].ex, a[i - 1].ey);
    }
    e.draw();
  });
}
