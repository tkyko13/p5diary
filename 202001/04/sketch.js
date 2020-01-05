let x, y;
let rot;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  frameRate(10);
  rot = [PI / 10, (PI * 9) / 10, (PI * 11) / 10, (PI * 19) / 10];
}

function draw() {
  let nr = rot[int(random(rot.length))];
  let nx = x + cos(nr) * 50;
  let ny = y + sin(nr) * 50;
  stroke(245, 80, 1);
  strokeWeight(3);
  line(x, y, nx, ny);
  x = nx;
  y = ny;
}

function mousePressed() {
  background(255);
  x = mouseX;
  y = mouseY;
}
