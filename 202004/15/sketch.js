let teImg;
function preload() {
  teImg = loadImage("te.png");
}

let img1z = -600;
let img2z = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  textAlign(CENTER, CENTER);
  imageMode(CENTER);
}

function draw() {
  background(255);

  push();
  translate(0, 200, img1z);
  image(teImg, 0, 0);
  pop();

  push();
  translate(0, 200, img2z);
  image(teImg, 0, 0);
  pop();

  img1z++;
  img2z++;
  if (img1z > 200) {
    img1z = img2z - 600;
  }
  if (img2z >= 200) {
    img2z = img1z - 600;
  }
  // print(img1z, img2z);
}
