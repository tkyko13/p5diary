//ほ、飽和

let a = 0;
let p = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // if (frameCount % 10 == 0) {
  p.push({
    x: width / 2,
    y: 0,
    spx: random(-3, 3),
    spy: random(2, 10),
    size: random(1.5, 2.5),
    melt: false,
  });
  // }

  background(255);

  // 液
  push();
  noStroke();
  fill(0, 191, 252, a);
  translate(width / 2, height / 2);
  beginShape();
  vertex(-100, -90);
  vertex(-100, 100);
  vertex(100, 100);
  vertex(100, -90);
  endShape();
  pop();

  // particle　粒
  p.forEach((e) => {
    strokeWeight(e.size);
    e.x += e.spx;
    e.y += e.spy;
    if (inBeaker(e.x, e.y)) {
      e.spx = e.spx / random(1, 1.1);
      e.spy = e.spy / random(1, 1.1);
      if (a < 255) {
        e.size -= 0.01;
        a += 0.001;
      }
      if (e.size < 0) e.melt = true;
      if (e.spy < 0.1) e.spy = 0.1;
      if (e.x < width / 2 - 98 || width / 2 + 98 < e.x) e.spx = -e.spx;
      if (height / 2 + 98 < e.y) e.spy = -e.spy;
    }
    point(e.x, e.y);
  });
  p = p.filter((e) => {
    if (e.melt) return false;
    if (height < e.y) return false;
    return true;
  });

  // ビーカー
  push();
  strokeWeight(2);
  noFill();
  translate(width / 2, height / 2);
  beginShape();
  vertex(-110, -100);
  vertex(-100, -85);
  vertex(-100, 100);
  vertex(100, 100);
  vertex(100, -100);
  endShape();
  strokeWeight(1);
  line(0, -50, 0, 50);
  line(-10, -50, +10, -50);
  line(-10, -30, +10, -30);
  line(-10, -10, +10, -10);
  line(-10, +10, +10, +10);
  line(-10, +30, +10, +30);
  line(-10, +50, +10, +50);
  pop();
}

function inBeaker(_x, _y) {
  return (
    width / 2 - 100 < _x &&
    _x < width / 2 + 100 &&
    height / 2 - 100 < _y &&
    _y < height + 100
  );
}
