class CircleAnim {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.c = 0;
    this.size = 0;
    this.targetSize = 50;
    this.ang = TWO_PI;
    this.isFinish = false;
    this.rot = -PI / 2; //random(TWO_PI);
    this.lits = [];
    this.litsA = 255;
    let r = random(3, 6);
    for (let i = 0; i < r; i++) {
      this.lits.push({
        x: 0,
        y: 0,
        tx: random(-20, 20),
        ty: random(-20, 20),
        size: random(5, 15)
      });
    }
  }
  draw() {
    this.c++;
    push();
    translate(this.x, this.y);
    rotate(this.rot);

    // if (this.size + 0.1 < this.targetSize) {
    if (this.c < 30) {
      this.size += (this.targetSize - this.size) / 5.0;
      stroke(0);
      ellipse(0, 0, this.size, this.size);
      // } else if (0.1 <= this.ang) {
    } else if (this.c < 55) {
      this.ang -= this.ang / 4.0;
      // this.size -= this.size / 5.0;
      stroke(0);
      arc(0, 0, this.size, this.size, 0, this.ang);
    } else if (this.c < 100) {
      this.litsA -= 7;
      stroke(0, this.litsA);
      for (let i = 0; i < this.lits.length; i++) {
        let l = this.lits[i];
        l.x += (l.tx - l.x) / 5.0;
        l.y += (l.ty - l.y) / 5.0;
        ellipse(l.x, l.y, l.size, l.size);
      }
    } else {
      this.isFinish = false;
    }
    pop();
  }
}

let cas = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // cas.push(new CircleAnim(random(width), random(height)));
  noFill();
}

function draw() {
  background(255);

  if (frameCount % 10 == 0)
    cas.push(new CircleAnim(random(width), random(height)));

  cas.forEach(e => {
    e.draw();
  });
  cas = cas.filter(e => {
    return !e.isFinish;
  });
}

// class Gatherer {
//   constructor(tick) {
//     this.tick = tick;
//     this.length = 150;
//     this.strokeWidth = 7; //random(1, 10)
//     this.angSp = 0.01;
//   }

//   update() {
//     this.tick++;

//     this.length = 50 + noise(this.tick * 0.03) * 130;

//     // this.angSp = noise(this.tick + 100) * 0.005;
//     let ang = (noise(this.tick * this.angSp + 1000) * 10 * TAU) % TAU;

//     this.join = createVector(
//       width * noise(this.tick * 0.01),
//       height * noise(this.tick * 0.01 + 1000)
//     );
//     this.tip = createVector(
//       this.join.x + this.length * cos(ang),
//       this.join.y + this.length * sin(ang)
//     );

//     let colorFactor =
//       (noise(this.join.x * 0.002, this.join.y * 0.002, this.tick * 0.01) * 10) %
//       2;
//     if (colorFactor > 1) colorFactor = 2 - colorFactor;
//     this.darkCol = lerpColor(color("#078F00"), color("#3351FF"), colorFactor); //lerpColor5((noise(this.start.x * 0.002, this.start.y * 0.002) * 10) % 1)
//     this.lightCol = lerpColor(color("#98FA66"), color("#8FF4FF"), colorFactor);
//   }

//   show() {
//     blendMode(ADD);
//     for (let i = 0; i < 10; i++) {
//       strokeWeight(this.strokeWidth * exp((i + 1) / 10) * 2);
//       let col = this.darkCol;
//       col.setAlpha(1);
//       stroke(col);
//       // line(this.curStart.x, this.curStart.y, this.curEnd.x, this.curEnd.y);
//       line(this.join.x, this.join.y, this.tip.x, this.tip.y);
//     }
//     blendMode(BLEND);
//     for (let i = 5; i > 0; i--) {
//       strokeWeight((this.strokeWidth * i) / 5);
//       stroke(lerpColor(this.lightCol, this.darkCol, i / 5));
//       // line(this.curStart.x, this.curStart.y, this.curEnd.x, this.curEnd.y);
//       line(this.join.x, this.join.y, this.tip.x, this.tip.y);
//     }
//   }
// }
