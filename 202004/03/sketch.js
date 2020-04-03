class Moku {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.spx = random(-1, 1);
    this.spy = random(-5 * n, -2 * n);
    this.isDead = false;

    this.size = 40;
  }

  draw() {
    this.x += this.spx;
    this.y += this.spy;
    this.spy += 0.02;

    fill(0);
    ellipse(this.x, this.y, this.size, this.size);

    if (this.y > height - 30) this.isDead = true;
  }
  drawWhite() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size - 2, this.size - 2);
  }
}

let mokus = [];
let n = 0;
let nOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nOffset = random(99);
}

function draw() {
  background(255);

  n = noise(nOffset);
  nOffset += 0.02;

  if (frameCount % 10 == 0) mokus.push(new Moku());

  mokus = mokus.filter(e => {
    return !e.isDead;
  });
  mokus.forEach(e => e.draw());
  mokus.forEach(e => e.drawWhite());
}
