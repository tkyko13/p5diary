// 5/5 も、目撃者

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  // ambientLight(30);
  spotLight(
    255,
    255,
    255,
    (getMyNoise("lx") * width) / 2,
    (getMyNoise("ly") * height) / 2,
    0,
    0,
    0,
    -100,
    180,
    2
  );

  noStroke();
  fill(255, 0, 0);
  push();
  translate(getMyNoise("sx") * width, getMyNoise("sy") * height, -200);
  // rotateX(90);
  sphere(100);
  pop();

  fill(255);
  translate(0, 0, -100);
  // rect(0, 0, 300, 300);
}

const n = {};
function getMyNoise(key) {
  if (!n[key]) n[key] = { r: random(100), step: 0 };
  n[key].step += 0.005;
  return (noise(n[key].r, n[key].step) - 0.5) * 2;
}
