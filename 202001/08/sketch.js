let n1, n2;
function setup() {
  createCanvas(windowWidth, windowHeight);
  n1 = random(100);
  n2 = random(100);
  strokeWeight(5);
}

function draw() {
  n1 += 0.015;
  n2 += 0.015;
  stroke(random(255), random(255), random(255));
  line(noise(n1) * width, 0, noise(n2) * width, height);
}
