class ColorScheme {
  constructor(colorString) {
    this.colors = [];
    {
      let cc = colorString.split("/");
      let cs = cc[cc.length - 1].split("-");
      for (let i in cs) {
        this.colors.push("#" + cs[i]);
      }
    }
  }
  get(i) {
    return this.colors[i];
  }
  getRand() {
    return this.colors[int(random(this.colors.length))];
  }
}

class CircleAnim {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.spx = 0;
    this.spSize = 0;
    this.goCount = int(random(15, 30));

    this.count = 0;
    this.baseSize = random(20, 80);
    this.size = this.baseSize;
    this.col = colorScheme.getRand();
    this.children = [];
    for (let i = 0; i < 5; i++) {
      this.children.push({
        x: _x,
        y: _y,
        size: this.size
      });
    }
  }
  draw() {
    this.size += (this.baseSize - this.size) / 10.0;
    this.x += this.spx;
    this.spx = this.spx / 1.1;

    fill(this.col + hex(100, 2));
    ellipse(this.x, this.y, this.size, this.size);
    // this.children.forEach(e => {
    //   ellipse(e.x, e.y, e.size, e.size);
    // });
    for (let i = 0; i < this.children.length; i++) {
      let e = this.children[i];
      ellipse(e.x, e.y, e.size, e.size);
    }

    this.children.forEach((e, i, a) => {
      let next = i == a.length - 1 ? this : a[i + 1];
      e.x += (next.x - e.x) / 1.01;
      e.y += (next.y - e.y) / 1.01;
      let tSize = next.size - i * 5 < 0 ? 0 : next.size - i * 5;
      e.size += (tSize - e.size) / 1.01;
    });

    if (frameCount % this.goCount == 0) this.go();
    if (this.x > width + 100) {
      this.x = 0;
      this.col = colorScheme.getRand();
      for (let i = 0; i < 5; i++) {
        this.children[i] = {
          x: this.x,
          y: this.y,
          size: this.size
        };
      }
      this.baseSize = random(20, 80);
      this.goCount = int(random(15, 30));
    }
  }
  go() {
    cas[0].size = this.baseSize * 2;
    cas[0].spx = this.baseSize / 5.0;
  }
}

let cas = [];
let x, y;
let off;

var colorScheme = new ColorScheme(
  "https://coolors.co/363537-0cce6b-dced31-ef2d56-ed7d3a"
);

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB, 1, 1, 1, 1);
  x = width / 2;
  y = height / 2;
  off = random(99);
  cas.push(new CircleAnim(x, y));
  noStroke();
  // stroke(0, 0.2);
}

function draw() {
  background(255);

  // if (frameCount % 30 == 0) cas.push(new CircleAnim(x, y));

  cas.forEach(e => {
    e.draw();
  });
  cas = cas.filter(e => {
    return !e.isFinish;
  });
}
