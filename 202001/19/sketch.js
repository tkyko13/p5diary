let millPow = 0;
let wsize;
function setup() {
  wsize = windowWidth < windowHeight ? windowWidth : windowHeight;
  const cnv = createCanvas(wsize, wsize);

  const wx = wsize == windowWidth ? 0 : (windowWidth - wsize) / 2;
  const wy = wsize == windowHeight ? 0 : (windowHeight - wsize) / 2;
  cnv.position(wx, wy);

  beansMill(millPow, 0, 0, wsize, wsize);
  textSize(20);
  text("マウスドラッグでコービー豆を挽ける", 0, 22);
}

function draw() {
  // print(millPow);
  if (mouseIsPressed) {
    if (millPow < 100) {
      millPow += dist(mouseX, mouseY, pmouseX, pmouseY) / 100.0;
    }

    if (frameCount % 40 == 0) {
      background(255);
      beansMill(millPow, 0, 0, wsize, wsize);
    }
  } else {
    millPow = 0;
  }
}

function beansMill(_n, _x, _y, _w, _h) {
  if (0 >= int(random(_n))) {
    push();
    translate(_x + _w / 2, _y + _h / 2);
    rotate(random(TWO_PI));

    fill("#7b5544");
    strokeWeight(1);
    ellipse(0, 0, _w - 2, _w * 0.7 - 2);
    strokeWeight(_w / 20.0);
    strokeCap(SQUARE);
    line(-_w / 2 + 2, 0, _w / 2 - 2, 0);
    pop();
  } else {
    const nextN = _n / 1.8 - 1;
    beansMill(nextN, _x, _y, _w / 2, _h / 2);
    beansMill(nextN, _x + _w / 2, _y, _w / 2, _h / 2);
    beansMill(nextN, _x, _y + _h / 2, _w / 2, _h / 2);
    beansMill(nextN, _x + _w / 2, _y + _h / 2, _w / 2, _h / 2);
  }
}
