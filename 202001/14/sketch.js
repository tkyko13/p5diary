class NoiseBall {
  constructor(_x, _y) {
    this.centerX = _x;
    this.centerY = _y;
    this.xn = random(99);
    this.yn = random(99);
    this.rn = random(99);
    this.wn = random(99);
    this.hn = random(99);
    this.r = random(TWO_PI);
    this.sp = 0;
    this.col = color(random(255), 100, 200);
  }
  addSpeed(_sp) {
    this.sp += _sp;
  }
  draw() {
    // if (this.sp < 100) {
    this.sp = this.sp / 1.01;
    // }

    this.xn += 0.01;
    this.yn += 0.01;
    this.rn += 0.01;
    this.wn += 0.01;
    this.hn += 0.01;

    this.r += noise(this.rn) / 100.0;
    this.r += this.sp;
    let w = noise(this.wn) * width;
    let h = 30 + noise(this.hn) * 100;
    let x = this.centerX + cos(this.r) * w;
    let y = this.centerY + sin(this.r) * h;
    let size = 20 - (this.centerY - y) / 20.0;

    // noStroke();
    // fill(this.col);
    circle(x, y, size);
  }
}

let nb = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB);
  for (let i = 0; i < 20; i++) {
    nb[i] = new NoiseBall(width / 2, height / 2);
  }
}

function draw() {
  background(255);

  let d = dist(pmouseX, pmouseY, mouseX, mouseY);
  nb.forEach(e => {
    e.addSpeed(d / 20000.0);
    e.draw();
  });
}
