function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colorMode(HSB, 1, 1, 1, 1);
  background(0, 0, 1, 1);
}

function draw() {
  if (mouseIsPressed) {
    fill(random(), 1, 1, 0.2);
    let d = dist(pmouseX, pmouseY, mouseX, mouseY);
    let a = random(-10 - d, 10 + d);
    let s = random(d, d * 2);

    ellipse(mouseX + a, mouseY + a, s, s);
  }
}

function keyPressed() {
  background(0, 0, 1, 1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
