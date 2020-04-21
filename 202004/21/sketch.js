let backCol;
let crackPt = [];
let isCracking = false;
let eggH = 50,
  eggW = 60;
let crackY = eggH;
let isOpening = false;
let eggR = 0;
let isFalling = false;
let yolkY = 0;
let yolkYsp = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1, 1, 1, 1);
  backCol = color(random(), 0.2, 0.8);
  angleMode(DEGREES);
}

function draw() {
  if (isCracking) {
    if (crackY == eggH) {
      // first
      crackPt.push({ x: 0, y: crackY });
      crackY -= random(2, 10);
    } else if (crackY > 5) {
      // second~
      const crackX = crackPt.length % 2 == 0 ? random(-5, 0) : random(5);
      crackPt.push({ x: crackX, y: crackY });
      crackY -= random(2, 10);
    } else {
      // last
      crackPt.push({ x: 0, y: 0 });
      crackY = eggH;
      isCracking = false;
      isOpening = true;
    }
  }

  if (isOpening) {
    eggR += 5;
    if (eggR > 70) {
      isOpening = false;
      isFalling = true;
    }
  }

  if (isFalling) {
    yolkYsp += 0.5;
    yolkY += yolkYsp;
  }

  //
  background(backCol);

  // ellipse(width / 2, height / 2, eggW, eggH);
  translate(width / 2, height / 2);

  // yolk
  noStroke();
  fill(0, 0, 1, 0.2);
  ellipse(0, eggH / 2 + yolkY, eggH, eggH);
  fill("#FFDF85");
  ellipse(0, eggH / 2 + 5 + yolkY, eggH / 1.6, eggH / 1.6);

  // left
  push();
  fill(255);
  stroke(0);
  rotate(eggR);
  arc(0, eggH / 2, eggW, eggH, 90, 270);
  noFill();
  beginShape();
  crackPt.forEach((e) => {
    vertex(e.x, e.y + eggH / 2 - 25);
  });
  endShape();
  pop();

  push();
  fill(255);
  stroke(0);
  rotate(-eggR);
  arc(0, eggH / 2, eggW, eggH, 270, 90);
  noFill();
  beginShape();
  crackPt.forEach((e) => {
    vertex(e.x, e.y + eggH / 2 - 25);
  });
  endShape();
  pop();
}

function mousePressed() {
  backCol = color(random(), 0.2, 0.8);
  crackPt = [];
  isOpening = false;
  eggR = 0;
  isCracking = true;
  isFalling = false;
  yolkY = 0;
  yolkYsp = 0;
}
