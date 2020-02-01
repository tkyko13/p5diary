let lines = [];
let lines2 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB, 255, 255, 255, 100);
}

function draw() {
  background(color("#161726"));

  lines.push(new Gatherer(frameCount));

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].update()) {
      lines[i].show();
    } else {
      lines.splice(i, 1);
      i--;
    }
  }
}

class Gatherer {
  constructor(tick) {
    this.goal = createVector(
      width * noise(tick * 0.02),
      height * noise(tick * 0.02 + 1000)
    );
    let ang = (noise(tick * 0.01 + 2000) * 10 * TAU) % TAU;
    let length = 250;
    this.start = createVector(
      this.goal.x + length * cos(ang),
      this.goal.y + length * sin(ang)
    );
    this.curStart = this.start.copy();
    this.curEnd = this.start.copy();
    this.endSpeed = 24;
    this.startSpeed = 0;
    this.velAng = p5.Vector.fromAngle(
      p5.Vector.sub(this.goal, this.start).heading(),
      1
    );
    this.strokeWidth = 7; //random(1, 10)
    let colorFactor =
      (noise(this.start.x * 0.002, this.start.y * 0.002, tick * 0.01) * 10) % 2;
    if (colorFactor > 1) colorFactor = 2 - colorFactor;
    this.darkCol = lerpColor(color("#078F00"), color("#3351FF"), colorFactor); //lerpColor5((noise(this.start.x * 0.002, this.start.y * 0.002) * 10) % 1)
    this.lightCol = lerpColor(color("#98FA66"), color("#8FF4FF"), colorFactor);
  }

  update() {
    if (
      p5.Vector.dist(this.start, this.goal) <
      p5.Vector.dist(this.start, this.curEnd) + this.endSpeed
    ) {
      this.endSpeed = 0;
    }
    let endVel = p5.Vector.mult(this.velAng, this.endSpeed);
    this.curEnd.add(endVel);
    let startVel = p5.Vector.mult(this.velAng, this.startSpeed);
    this.curStart.add(startVel);
    this.startSpeed += 1;
    if (
      p5.Vector.dist(this.start, this.curStart) <
      p5.Vector.dist(this.start, this.curEnd)
    ) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    blendMode(ADD);
    for (let i = 0; i < 10; i++) {
      strokeWeight(this.strokeWidth * exp((i + 1) / 10) * 2);
      let col = this.darkCol;
      col.setAlpha(1);
      stroke(col);
      line(this.curStart.x, this.curStart.y, this.curEnd.x, this.curEnd.y);
    }
    blendMode(BLEND);
    for (let i = 5; i > 0; i--) {
      strokeWeight((this.strokeWidth * i) / 5);
      stroke(lerpColor(this.lightCol, this.darkCol, i / 5));
      line(this.curStart.x, this.curStart.y, this.curEnd.x, this.curEnd.y);
    }
  }
}
