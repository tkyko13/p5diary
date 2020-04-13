class Counter {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.num = 0;
    this.targetNum = 0;
    this.addN = 0;
    this.lessN = 0;
  }
  add(_n) {
    this.addN = _n;
    this.targetNum += _n;
  }
  less(_n) {
    this.lessN = _n;
    this.targetNum -= _n;
  }
  draw() {
    const diff = this.targetNum - this.num;
    if (diff > 0) {
      this.num += ceil(diff / 15);
      textSize(max([15, this.addN]));
      fill(0, 200, 0, map(diff, 0, this.addN, 0, 255));
      text(
        "+" + this.addN,
        this.x - 5,
        this.y - map(diff, this.addN, 0, 0, 100)
      );
    } else if (diff < 0) {
      this.num -= ceil(abs(diff) / 15);
      textSize(max([15, this.lessN]));
      fill(200, 0, 0, map(diff, 0, -this.lessN, 0, 255));
      text(
        "-" + this.lessN,
        this.x - 5,
        this.y + map(diff, -this.lessN, 0, 0, 100)
      );
    }
    textSize(20);
    fill(0);
    text(this.num, this.x, this.y);
  }
}

let c;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("helvetica");
  textSize(30);
  textAlign(CENTER, CENTER);
  c = new Counter();
}

function draw() {
  background(255);
  c.draw();
}

function mousePressed() {
  if (mouseY > height / 2) {
    c.less(int(random(100)));
  } else {
    c.add(int(random(100)));
  }
}
