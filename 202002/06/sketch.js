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
  "https://coolors.co/app/bc96e6-f6c0d0-dee5e5-17b890-5e807f"
);

let x, y, r, size, addRot;
let footLeft = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // fill(0, 10);
  noStroke();
  angleMode(DEGREES);

  const pt = getRoundPt();
  x = pt.x;
  y = pt.y;
  r = atan2(height / 2 - y, width / 2 - x);
  size = random(20, 80);
  addRot = random(-5, 5);
  cSize = 0;
  fill(colorScheme.getRand() + hex(250, 2));
}

function draw() {
  // background(255);

  if (cSize < size - 0.1) {
    cSize += (size - cSize) / 2.0;
    push();
    translate(x, y);
    rotate(r + random(-10, 10));

    let cy = 0;
    if (footLeft) cy = -size / 2 + random(5);
    else cy = size / 2 + random(5);

    ellipse(0, cy, cSize, cSize / 1.5);
    pop();
  } else if (x < 0 || width < x || y < 0 || height < y) {
    const pt = getRoundPt();
    x = pt.x;
    y = pt.y;
    r = atan2(height / 2 - y, width / 2 - x);
    size = random(30, 50);
    addRot = random(-5, 5);
    cSize = 0;
    fill(colorScheme.getRand() + hex(250, 2));
  } else {
    footLeft = !footLeft;
    x += cos(r) * size * random(1, 1.5);
    y += sin(r) * size * random(1, 1.5);
    r += addRot;
    cSize = 0;
  }
}

function getRoundPt() {
  let ret;
  const r = random();
  if (r < 0.25) ret = { x: random(width), y: 0 };
  else if (r < 0.5) ret = { x: random(width), y: height };
  else if (r < 0.75) ret = { x: 0, y: random(height) };
  else ret = { x: width, y: random(height) };
  return ret;
}
