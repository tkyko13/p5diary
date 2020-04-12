class Kumeran {
  constructor(_x, _y, _d, _r) {
    this.x = _x;
    this.y = _y;
    this.d = _d / 5;
    this.r = _r;
    this.rSp = random() < 0.5 ? 0.1 : -0.1;
    this.rot = 0;
  }

  draw() {
    this.x += cos(this.r) * this.d;
    this.y += sin(this.r) * this.d;

    this.r += this.rSp;
    this.d = this.d / 1.01;

    this.rot += this.rSp * 4;
    this.rSp /= 1.004;

    if (this.d < 0) {
      this.d = 0;
      return;
    }

    push();
    translate(this.x, this.y);
    rotate(this.rot);

    text("く", 0, 0);
    pop();
  }
}

let ks = [];
let pressPt = null;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255);

  if (pressPt) {
    line(pressPt.x, pressPt.y, mouseX, mouseY);
  }

  ks.forEach((e) => e.draw());
}

function mousePressed() {
  pressPt = createVector(mouseX, mouseY);
}

function mouseReleased() {
  let d = dist(mouseX, mouseY, pressPt.x, pressPt.y);
  let r = atan2(pressPt.y - mouseY, pressPt.x - mouseX);
  ks.push(new Kumeran(mouseX, mouseY, d, r));

  pressPt = null;
}
