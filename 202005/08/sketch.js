// 5/8 よ、余裕
let x = 0,
  y = 0,
  px,
  py,
  r,
  yoFlg = false;
let yoStartFrame = 0;
let nextR = 0;
let startR = 0;
let yoLineX, yoLineY;
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2 - 200;
  y = height / 2 - 200;
  px = x;
  py = y;
  r = 90;
  angleMode(DEGREES);
  yoStartFrame = int(getStepRand(100, 300, 15));

  noStroke();
  fill(0, 90);
}

function draw() {
  if (frameCount >= yoStartFrame) {
    // yo ing
    if (frameCount == yoStartFrame) {
      // yo start
      // print('yo start');
      nextR = r + 270;
      nextR = nextR % 360;
      startR = r;
      yoLineX = x + cos(startR - 180) * getStepRand(50, 100, 15);
      yoLineY = y + sin(startR - 180) * getStepRand(50, 100, 15);
    }

    if (frameCount >= yoStartFrame + 270 / 3) {
      // yo finish
      // print('yo finish');
      r = nextR;
      yoStartFrame = frameCount + int(getStepRand(100, 300, 15));
    } else {
      // print('yo ing');
      r += 3;
      r = r % 360;
      yoLineX += cos(startR - 90) * 1;
      yoLineY += sin(startR - 90) * 1;

      ellipse(yoLineX, yoLineY, 2, 2);
    }
  }
  x += cos(r) * 1;
  y += sin(r) * 1;

  //line(x, y, px, py);
  ellipse(x, y, 2, 2);

  px = x;
  py = y;
}

function getStepRand(min, max, step) {
  return min + int(random((max - min) / step)) * step;
}
