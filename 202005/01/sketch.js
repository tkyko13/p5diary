// 5/1 ま、回る
// https://timg.azurewebsites.net/yuukikikuchi　ここから100日後に死ぬワニ画像取得

let wani1, wani2;
let ry = 0,
  rz = 0;
function preload() {
  wani1 = loadImage("wani.png");
  wani2 = loadImage("wani2.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  imageMode(CENTER);
  angleMode(DEGREES);

  createEasyCam();

  // suppress right-click context menu
  document.oncontextmenu = function () {
    return false;
  };
}

function draw() {
  background(30);
  lights();

  ry += noise(frameCount) * 30;
  rz += noise(frameCount + 10) * 30;

  push();
  translate(-width / 3, 0, -100);
  rotateX(90);
  rotateY(ry);
  image(wani1, 0, 0);
  pop();

  push();
  translate(width / 3, 0, -100);
  rotateX(90);
  rotateZ(rz);
  image(wani2, 0, 0);
  pop();
}
