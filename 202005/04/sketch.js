// 5/4 め、目分量

function setup() {
  const wh = windowWidth < windowHeight ? windowWidth : windowHeight;
  let cnv = createCanvas(wh, wh);

  background(255);
  func(5, 0, 0, wh);
}

// function draw() {}

function func(depth, x, y, wh) {
  if (random(5) < depth && depth > 0) {
    depth--;
    func(depth, x, y, wh / 2);
    func(depth, x + wh / 2, y, wh / 2);
    func(depth, x, y + wh / 2, wh / 2);
    func(depth, x + wh / 2, y + wh / 2, wh / 2);
  } else {
    print(depth);
    drawME(x + 5, y + 5, wh - 10, wh - 10);
  }
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
