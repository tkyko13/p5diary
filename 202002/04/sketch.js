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

var colorScheme = new ColorScheme(
  "https://coolors.co/1b998b-ed217c-2d3047-fffd82-ff9b71"
);

class CircleAnim {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    //進行方向
    this.angle = random(-180, 180);
    //進行スピード
    this.step = random(1, 5);
    this.noiseDetail = random(800);
    this.noiseScale = random(400, 800);
    // this.id = random(99);
    this.life = random(90, 130);
    this.size = int(random(3, 7)) * 15;
    this.col = colorScheme.get(floor(random(0, 5)));
  }
  draw(tick) {
    noiseDetail(this.noiseDetail);
    let n = noise(
      this.x / this.noiseScale,
      this.y / this.noiseScale,
      frameCount / this.noiseScale
    );
    this.angle += map(n, 0, 1, -5, 5);

    this.x += cos(this.angle) * this.step;
    this.y += sin(this.angle) * this.step;
    let size = map(
      sin(this.x + this.y + frameCount),
      -1,
      1,
      0,
      (this.size * this.life) / 50.0
    );

    push();
    translate(this.x, this.y);

    // fill(this.col + hex(100 - this.c, 2));
    fill(this.col + hex(50, 2));
    ellipse(0, 0, size, size);

    n = noise(
      this.x / this.noiseScale,
      this.y / this.noiseScale,
      frameCount / this.noiseScale
    );

    let nAngle = this.angle + map(n, 0, 1, -5, 5);
    let nx = cos(this.angle) * this.step;
    let ny = sin(this.angle) * this.step;
    let nSize = size / 2; //(map(sin(nx + ny + frameCount), -1, 1, 0, 1) * this.size) / 2.0;
    if (nSize < 0) nSize = 0;
    fill(255);
    ellipse(nx, ny, nSize, nSize);

    pop();

    this.life--;
    if (this.life < 0) {
      this.isFinish = true;
    }
  }
}

let cas = [];
let x, y;
let off;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  noStroke();
  x = width / 2;
  y = height / 2;
  off = random(99);
  background(0);
}

function draw() {
  background(0, 5);
  fill(255);
  text("Drag!!", 20, 20);

  // x = width / 2 + (noise(frameCount * 0.1) - 0.5) * 300;
  // y = height / 2 + (noise(frameCount * 0.1 + 100) - 0.5) * 300;

  // if (frameCount % 30 == 0) cas.push(new CircleAnim(x, y));
  if (mouseIsPressed) cas.push(new CircleAnim(mouseX, mouseY));

  cas.forEach(e => {
    e.draw(frameCount + off);
  });
  cas = cas.filter(e => {
    return !e.isFinish;
  });
}
