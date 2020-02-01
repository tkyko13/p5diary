let l, r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 100);

  l = new Gatherer(random(999));
  r = new Gatherer(random(999));
}

function draw() {
  background(color("#16172622"));

  l.update();
  l.show();
  r.update();
  r.show();
}

class Gatherer {
  constructor(tick) {
    this.tick = tick;
    this.length = 150;
    this.strokeWidth = 7; //random(1, 10)
    this.angSp = 0.01;
  }

  update() {
    this.tick++;

    this.length = 50 + noise(this.tick * 0.03) * 130;

    // this.angSp = noise(this.tick + 100) * 0.005;
    let ang = (noise(this.tick * this.angSp + 1000) * 10 * TAU) % TAU;

    this.join = createVector(
      width * noise(this.tick * 0.01),
      height * noise(this.tick * 0.01 + 1000)
    );
    this.tip = createVector(
      this.join.x + this.length * cos(ang),
      this.join.y + this.length * sin(ang)
    );

    let colorFactor =
      (noise(this.join.x * 0.002, this.join.y * 0.002, this.tick * 0.01) * 10) %
      2;
    if (colorFactor > 1) colorFactor = 2 - colorFactor;
    this.darkCol = lerpColor(color("#078F00"), color("#3351FF"), colorFactor); //lerpColor5((noise(this.start.x * 0.002, this.start.y * 0.002) * 10) % 1)
    this.lightCol = lerpColor(color("#98FA66"), color("#8FF4FF"), colorFactor);
  }

  show() {
    blendMode(ADD);
    for (let i = 0; i < 10; i++) {
      strokeWeight(this.strokeWidth * exp((i + 1) / 10) * 2);
      let col = this.darkCol;
      col.setAlpha(1);
      stroke(col);
      // line(this.curStart.x, this.curStart.y, this.curEnd.x, this.curEnd.y);
      line(this.join.x, this.join.y, this.tip.x, this.tip.y);
    }
    blendMode(BLEND);
    for (let i = 5; i > 0; i--) {
      strokeWeight((this.strokeWidth * i) / 5);
      stroke(lerpColor(this.lightCol, this.darkCol, i / 5));
      // line(this.curStart.x, this.curStart.y, this.curEnd.x, this.curEnd.y);
      line(this.join.x, this.join.y, this.tip.x, this.tip.y);
    }
  }
}
