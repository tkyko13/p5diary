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
}

class CircleAnim {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    // this.id = random(99);
    this.c = 0;
    this.size = 20;
    this.col = color(random(), 0.6, 0.2, 0.5);
  }
  draw(tick) {
    this.x += noise(this.x, tick * 0.5) * 50 - 24;
    this.y += noise(this.y, tick * 0.5 + 100) * 50 - 25;
    this.size += (noise(tick * 0.01 + 200) - 0.5) * 5;

    push();
    translate(this.x, this.y);

    fill(this.col);
    ellipse(0, 0, this.size, this.size);

    pop();
    this.c++;
    if (this.c > 100) {
      this.isFinish = true;
    }
  }
}

let cas = [];
let x, y;
let off;

var colorScheme = new ColorScheme(
  "https://coolors.co/5386e4-7fc29b-b5ef8a-d7f171-817e9f"
);

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 1, 1, 1, 1);
  x = width / 2;
  y = height / 2;
  off = random(99);
}

function draw() {
  // background(255);
  x = width / 2 + (noise(frameCount * 0.1) - 0.5) * 300;
  y = height / 2 + (noise(frameCount * 0.1 + 100) - 0.5) * 300;

  if (frameCount % 30 == 0) cas.push(new CircleAnim(x, y));

  cas.forEach(e => {
    e.draw(frameCount + off);
  });
  cas = cas.filter(e => {
    return !e.isFinish;
  });
}
