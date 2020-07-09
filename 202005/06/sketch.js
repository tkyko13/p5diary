// 5/6 や、ヤマタノオロチ

let heads = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 10, 10, 10, 10);
  for (let i = 0; i < 9; i++) {
    heads[i] = [];
  }
}

function draw() {
  background(255);

  noFill();
  strokeWeight(3);
  for (let i = 0; i < 9; i++) {
    let h = heads[i];
    h.push({
      x: getMyNoise("x" + i) * width,
      y: getMyNoise("y" + i) * height,
      sp: getMyNoise("sp" + i),
      r: getMyNoise("r" + i),
    });

    for (let j = 0; j < h.length - 1; j++) {
      const e = h[j];
      if (e.x > width || e.y < 0 || height < e.y) h.shift();
      else break;
    }

    stroke(i, 6, 9, 8);
    beginShape();
    ellipse(h[h.length - 1].x, h[h.length - 1].y, 15, 15);
    h.forEach((e) => {
      let r = -90 + e.r * 180;
      e.x += cos(r) * e.sp * 5;
      e.y += sin(r) * e.sp * 5;
      vertex(e.x, e.y);
    });
    endShape();
  }

  // print(heads.length);
}

const n = {};
function getMyNoise(key) {
  if (!n[key]) n[key] = { r: random(100), step: 0 };
  n[key].step += 0.004;
  return noise(n[key].r, n[key].step);
}
