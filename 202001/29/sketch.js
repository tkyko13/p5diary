let nx, ny;
let nc;
let offX = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  nx = random(999);
  ny = random(999);
  nc = random(999);
  // frameRate(10);
  noStroke();
  // colorMode(HSB, 50, 10, 10);
}

function draw() {
  background(255);
  offX += 3;
  fill(0, 200);
  for (let y = 0; y < height; y += 5) {
    for (let x = offX; x < width + offX; x += 5) {
      let n = noise(x * 0.005 + nx, y * 0.005 + ny);
      n = int(n * 50);
      // const c = color(n, 8, 8);
      // if (n % 10 == 0) fill(0, 80);
      // else fill(255);
      // rect(x - offX, y, 5, 5);
      if (n % 10 == 0) rect(x - offX, y, 5, 5);
    }
  }
}
