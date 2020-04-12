function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  let x = width / 2;
  let y = height / 2;
  stroke(70);
  fill("#ffb6c1");
  strokeWeight(20);
  ellipse(x, y, 200, 200);

  noStroke();
  fill(70);
  ellipse(x - 25, y - 20, 25, 50);
  ellipse(x + 25, y - 20, 25, 50);

  // strokeCap(ROUND);
  // line(x - 25, y - 40, x - 25, y);

  noStroke();
  fill(255);
  ellipse(x - 25, y - 30, 15, 20);
  ellipse(x + 25, y - 30, 15, 20);

  // strokeWeight(1);
  // stroke(70);
  fill("#dc143c");
  noStroke();
  beginShape(CLOSE);
  curveVertex(x - 10, y + 10);
  curveVertex(x - 15, y + 10);
  // curveVertex(x - 10, y + 30);
  // curveVertex(x + 10, y + 30);

  curveVertex(x - 10, y + 25);
  curveVertex(x, y + 30);
  curveVertex(x + 10, y + 25);

  curveVertex(x + 15, y + 10);
  curveVertex(x + 10, y + 10);
  endShape();

  ellipse(x - 50, y, 30, 15);
  ellipse(x + 50, y, 30, 15);
  // filter(BLUR, 3);
}
