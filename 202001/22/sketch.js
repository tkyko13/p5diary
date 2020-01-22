let img;
let imgClone;

let mk;
let vel = {};

const mess = "PCD\nTokyo\n2020";

const lensSize = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  vel.x = random(width);
  vel.y = random(height);
  vel.spx = random(7, 13);
  vel.spy = random(7, 13);

  img = createGraphics(width, height);
  myDraw(img, width / 4);

  mk = createGraphics(width, height);

  (imgClone = img.get()).mask(mk.get());
}

function draw() {
  background(200);
  myDraw(this, width / 8);

  vel.x += vel.spx;
  vel.y += vel.spy;
  if (vel.x < 0 || width < vel.x) vel.spx = -vel.spx;
  if (vel.y < 0 || height < vel.y) vel.spy = -vel.spy;

  ellipse(vel.x - lensSize / 2, vel.y, lensSize, lensSize);
  ellipse(vel.x + lensSize / 2, vel.y, lensSize, lensSize);
  mk.clear();
  mk.ellipse(vel.x - lensSize / 2, vel.y, lensSize, lensSize);
  mk.ellipse(vel.x + lensSize / 2, vel.y, lensSize, lensSize);

  (imgClone = img.get()).mask(mk.get());
  image(imgClone, 0, 0);
}

function myDraw(cnv, size) {
  cnv.textAlign(CENTER, CENTER);

  cnv.textSize(size);
  cnv.textLeading(200);
  cnv.text(mess, width / 2, height / 2);
}
