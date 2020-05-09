// 5/3 む、無駄な抵抗

let upMans = [];
let r = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  rectMode(CENTER);
  colorMode(HSB, 1, 1, 1, 1);

  for (let i = 0; i < 20; i++) {
    upMans.push({
      x: random(width),
      y: random(height - 50),
      spx: random(-1, 1),
      spy: random(-1, 1),
      sz: 50,
      r: 180,
      spr: 0,
      noiseCount: random(999),
      col: color(random(), 0.9, 0.4, 0.8),
    });
  }
}

function draw() {
  background(255);

  upMans.forEach((e) => {
    // e.spx += noise(frameCount / 500, e.noiseOff) - 0.5;
    // e.x += e.spx;
    // if (e.x < 0 || width < e.x) e.spx = -e.spx;
    if (
      e.x - e.sz < mouseX &&
      mouseX < e.x + e.sz &&
      e.y - e.sz < mouseY &&
      mouseY < e.y + e.sz
    ) {
      e.spr++;
    } else {
      e.x = noise(e.noiseCount) * width;
      e.noiseCount += 0.002;
      e.spr = -2;
    }

    if (e.r > 360) {
      e.r = 360;
      e.spr = -e.spr / 2;
    } else if (e.r < 180) {
      e.r = 180;
      e.spr = 0;
    }
    e.r += e.spr;

    fill(e.col);
    push();
    translate(e.x, e.y);
    ellipse(0, 0, 30, 30);
    rect(0, 44, 30, 50, 5);
    //arm
    push();
    translate(-20, 24);
    rotate(e.r);
    rect(0, -12, 10, 34, 5);
    pop();
    push();
    translate(20, 24);
    rotate(-e.r);
    rect(0, -12, 10, 34, 5);
    pop();
    pop();
  });
}
