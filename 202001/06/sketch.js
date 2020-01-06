let cnv;
let cx = 0,
  cy = 0,
  ex,
  ey,
  es = 20,
  cxSp = 0,
  cySp = 0,
  cxn,
  cyn;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  ex = width / 2;
  ey = height / 2;
  cxn = random(100);
  cyn = random(100);
  background(230);
  noStroke();
}

function draw() {
  // cxn += 0.02;
  // cyn += 0.02;
  let addCX = myRond2(cx); //(noise(cxn) - 0.5) * 10; //myuRond2(cxSp);
  let addCY = myRond2(cy); //(noise(cyn) - 0.5) * 10; //((cySp += myuRond2(cySp)));
  let addEX = myRond();
  let addEY = myRond();
  cx += addCX;
  cy += addCY;
  ex += addEX / 2.0 - addCX / 2.0;
  ey += addEY / 2.0 - addCY / 2.0;
  es = dist(addCX, addCY, addEX, addEY);

  fill(random(255), random(255), random(255), 80);
  circle(ex, ey, es);
  cnv.position(cx, cy);
}

function myRond() {
  const b = 5;
  return random(-b, b) * random(-b, b);
}

function myRond2(n) {
  const c = -n / 100.0;
  return random(-10 + c, 10 + c);
}
