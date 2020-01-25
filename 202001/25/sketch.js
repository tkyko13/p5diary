let millPow = 0;
let wsize;
const txt = "PCD2020";
function setup() {
  wsize = windowWidth < windowHeight ? windowWidth : windowHeight;
  const cnv = createCanvas(wsize, wsize);

  const wx = wsize == windowWidth ? 0 : (windowWidth - wsize) / 2;
  const wy = wsize == windowHeight ? 0 : (windowHeight - wsize) / 2;
  cnv.position(wx, wy);

  beansMill(millPow, 0, 0, wsize, wsize);
  textAlign(CENTER, CENTER);
  // textFont("ricty");
}

function draw() {
  if (frameCount % 60 == 0) {
    millPow = random(80);
    background(255);
    beansMill(millPow, 0, 0, wsize, wsize);
  }
}

function beansMill(_n, _x, _y, _w, _h) {
  if (0 >= int(random(_n))) {
    push();
    translate(_x + _w / 2, _y + _h / 2);
    // rotate(random(TWO_PI));
    noStroke();
    fill(random(255), random(255), random(255));
    rect(-_w / 2, -_h / 2, _w, _h);
    fill(255);
    textSize(min([_w, _h]));
    const c = txt.charAt(int(random(txt.length)));
    text(c, 0, 0);
    const t = pop();
  } else {
    const nextN = _n / 1.8 - 1;
    // const sepX = random();
    beansMill(nextN, _x, _y, _w / 2, _h / 2);
    beansMill(nextN, _x + _w / 2, _y, _w / 2, _h / 2);
    beansMill(nextN, _x, _y + _h / 2, _w / 2, _h / 2);
    beansMill(nextN, _x + _w / 2, _y + _h / 2, _w / 2, _h / 2);
  }
}
