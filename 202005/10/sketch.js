// 5/10 り、竜宮城

let fishs = [];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // blendMode(SUBTRACT);
  n = random(100);
  angleMode(DEGREES);

  for (let i = 0; i < 5; i++) {
    fishs[i] = {
      x: random(-width / 2, width / 2),
      y: random(-height / 2, height / 2),
      z: random(-1000, 0),
      spx: random(-5, -3),
    };
  }
}

function draw() {
  background(0, 139, 139);

  // scale(0.3);
  // rotateX(90);
  for (let i = 0; i < 5; i++) {
    fishs[i].x += fishs[i].spx;
    if (fishs[i].x < -width / 2 - 100) {
      fishs[i].x = width / 2 + 10;
      fishs[i].z = random(-500, 500);
    }
    drawFish(fishs[i].x, fishs[i].y, fishs[i].z, frameCount * 10);
  }
}

function drawFish(_x, _y, _z, _n) {
  push();
  translate(_x, _y, _z);
  fill(255);
  beginShape();

  ellipse(40, -10, 10, 10);
  for (let i = 0; i <= 180; i += 2) {
    vertex(+i, +sin(i) * 50, 0);
  }
  for (let i = 180; i > 0; i -= 2) {
    vertex(+i, +sin(i) * -50, 0);
  }
  endShape();

  beginShape();
  for (let i = 0; i <= 90; i += 2) {
    vertex(+180 + i / 2, +sin(i) * 40, cos(_n + i * 2) * 20);
  }
  vertex(+180 + 90 / 2, 0, cos(_n + 90 * 2) * 20);
  for (let i = 90; i > 0; i -= 2) {
    vertex(+180 + i / 2, +sin(i) * -40, cos(_n + i * 2) * 20);
  }
  endShape();
  pop();
}
