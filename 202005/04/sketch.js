// 5/4 め、目分量

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawME(100, 100, 50, 100);
}

function drawME(x, y, w, h) {
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(x, y + h);
  vertex(x, y);
  vertex(x + w, y);
  vertex(x + w, y + h);
  endShape();

  const a = 1;
  line(x, y + h / 3 - a, x + w, y + h / 3 - a);
  line(x, y + (h * 2) / 3 - a * 2, x + w, y + (h * 2) / 3 - a * 2);
  line(x, y + h - a * 3, x + w, y + h - a * 3);
}
