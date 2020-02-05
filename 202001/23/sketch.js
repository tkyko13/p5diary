let img;
let imgClone;
let mk;
let back;
let nx = 0;
let ny = 0;

const mess = "PCD\nTokyo\n2020";

const lensSize = 250;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nx = random(99);
  ny = random(99);

  img = createGraphics(width, height);
  myDraw(img, width / 4);

  mk = createGraphics(width, height);

  back = createGraphics(width, height);
  myDraw(back, width / 4);
  back.filter(BLUR, 10);
}

function draw() {
  nx += 0.015;
  ny += 0.015;
  let x = noise(nx) * width;
  let y = noise(ny) * height;

  background(200);
  image(back, 0, 0);
  drawGrass(x, y);
  mk.clear();
  mk.ellipse(x - lensSize / 2 - 30, y, lensSize, lensSize);
  mk.ellipse(x + lensSize / 2 + 30, y, lensSize, lensSize);

  (imgClone = img.get()).mask(mk.get());
  image(imgClone, 0, 0);
}

function myDraw(cnv, size) {
  cnv.textAlign(CENTER, CENTER);

  // print(size);
  cnv.textSize(size);
  cnv.textLeading(size / 1.5);
  cnv.text(mess, width / 2, height / 2);
}

function drawGrass(x, y) {
  strokeWeight(10);
  fill(255);
  ellipse(x - lensSize / 2 - 30, y, lensSize, lensSize);
  ellipse(x + lensSize / 2 + 30, y, lensSize, lensSize);
  noFill();
  arc(x, y, 100, 100, -(PI * 3) / 4, -PI / 4);
  line(x + lensSize + 30, y, x + lensSize + 80, y);
  line(x - lensSize - 30, y, x - lensSize - 80, y);
}
