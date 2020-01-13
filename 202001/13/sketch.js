let cn,
  cnc = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);

  // colorMode(HSB, 255, 255, 255, 255);
  rectMode(CENTER);
  cn = random(9);
}

function draw() {
  background(255, 20);

  cn += 0.01;
  cnc += noise(cn) / 50.0;
  cnc = abs(cnc % 1);
  noStroke();
  colorMode(HSB, 1, 10, 10);
  fill(cnc, 8, 10);
  ellipse(width / 2, height / 2, 40, 40);
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, 40, 40);
  }

  colorMode(RGB);
  // const white = color(255, 255, 255, 255);
  // loadPixels();
  for (let y = 0; y < height; y += 10) {
    for (let x = 0; x < width; x += 10) {
      let c = color(get(x, y));
      // let c = get(x, y);

      // if (c != white) {
      let r = noise(x / 200.0, y / 200.0, frameCount / 100.0) * TWO_PI;
      let mvX = x + cos(r) * 10;
      let mvY = y + sin(r) * 10;
      // c.setAlpha(alpha(c) * 0.9);
      // fill(hue(c), saturation(c), brightness(c));
      fill(c);
      rect(mvX, mvY, 10, 10);
      // }

      // noStroke();
      // ellipse(x, y, 4, 4);
      // stroke(0);
      // line(x, y, mvX, mvY);

      // set(mvX, mvY, c);
    }
  }
  // updatePixels();
}
