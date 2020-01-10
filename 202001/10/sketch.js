let n1, n2, colorN;
let x1 = 0,
  x2 = 0;
let sp1 = 1,
  sp2 = 1;
const loopNum = 5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  n1 = random(100);
  n2 = random(100);
  colorN = random();
  strokeWeight(1);
  colorMode(HSB, 1, 1, 1, 1);
}

function draw() {
  background(255, 0.01);
  for (let i = 0; i < loopNum; i++) {
    n1 += 0.1;
    n2 += 0.1;
    colorN += 0.001;
    x1 += sp1;
    x2 += sp2;
    if (x1 < 0 || width < x1) {
      // sp1 = -sp1;
      // sp2 = -sp2;
      x1 = 0;
      x2 = 0;
      n1 = random(100);
      n2 = random(100);
      colorN = random();
    }
    // if (x2 < 0 || width < x2) sp2 = -sp2;

    stroke(colorN % 1, 0.6, 0.8, 0.2);
    line(x1, noise(n1) * height, x2, noise(n2) * height);
  }
}
