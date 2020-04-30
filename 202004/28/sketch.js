//ふ、吹雪

let objs = [];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(10, 10, 30);

  // ambientLight(255);
  // lights();
  pointLight(color(255, 255, 255), 0, 0, 500);
  // directionalLight(color(255, 255, 255), 0, 0, -1);
  // spotLight(0, 250, 0, 0, 0, 100, 0, 0, -1);

  if (frameCount % 3 == 0) {
    objs.push(createObj());
  }

  objs.forEach((e) => {
    drawObj(e);
  });
  objs = objs.filter((e) => {
    return e.isView;
  });
  // print(objs.length);
}

function createObj() {
  return {
    x: random(-width / 3, width / 3),
    y: -random(height),
    z: random(-1000, -900),
    nx: random(100),
    ny: random(100),
    nz: random(100),
    isView: true,
  };
}

function drawObj(o) {
  o.x += 5 - noise(o.nx) * 10;
  o.nx += 0.01;
  o.y += -5 + noise(o.ny) * 15;
  o.ny += 0.01;
  o.z += 15 + noise(o.nz) * 20;
  o.nz += 0.01;

  push();
  fill(255);
  translate(o.x, o.y, o.z);
  ellipse(0, 0, 20, 20);
  if (o.px) {
    translate(o.x - o.px, o.y - o.py, o.z - o.pz);
    ellipse(0, 0, 20, 20);
  }
  pop();

  o.px = o.x;
  o.py = o.y;
  o.pz = o.z;

  if (o.z > 500) {
    o.isView = false;
  }
}

const rand = {};
function getRand(key) {
  return rand[key] ? rand[key] : (rand[key] = random());
}
