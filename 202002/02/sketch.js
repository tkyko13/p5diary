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
