// 5/11 る、ルール
let worker = [];
let mx, my;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30, 5);

  if (mouseIsPressed) {
    mx = mouseX;
    my = mouseY;
    const c = random() < 0.5 ? color("#01FFFF") : color("#FF2F41");
    const n = random(9);
    worker.push({
      x: mx,
      y: my,
      px: mx,
      py: my,
      col: c,
      nOff: n,
    });
  }

  worker.map((e) => {
    e.x += getMyNoise("x", frameCount, 5, 10);
    e.y += getMyNoise(e.nOff, frameCount + e.nOff, -5, 5);

    stroke(e.col);
    strokeWeight(1);
    line(e.x, e.y, e.px, e.py);

    e.px = e.x;
    e.py = e.y;

    if (width < e.x) e.out = true;
  });
  worker = worker.filter((e) => {
    return !e.out;
  });
}

function mousePressed() {
  mx = mouseX;
  my = mouseY;
}

function getStepRand(min, max, step) {
  return min + int(random((max - min) / step)) * step;
}

const rand = {};
function getMyRandom(key, min, max) {
  if (!rand[key]) rand[key] = random();
  return min + rand[key] * (max - min);
}

function getMyNoise(key, step, min, max) {
  return min + noise(getMyRandom(key, 0, 100), step / 100) * (max - min);
}
