class NoiseDrawer {
  constructor(_x, _y, _w, _h) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.xn = random(999);
    this.yn = random(999);
    this.col = color(random(255), random(255), random(255));
  }
  draw() {
    this.xn += 0.1;
    this.yn += 0.1;
    const s = (this.w + this.h) / 20;
    noStroke();
    fill(this.col);
    ellipse(
      this.x + noise(this.xn) * this.w,
      this.y + noise(this.yn) * this.h,
      s,
      s
    );
    // rect(this.x, this.y, this.w, this.h);
  }
}

let nds = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  pushNds(50, 0, 0, width, height);
}

function draw() {
  // background(255, 1);
  nds.forEach(e => {
    e.draw();
  });
}

function pushNds(_n, _x, _y, _w, _h) {
  if (0 >= int(random(_n))) {
    nds.push(new NoiseDrawer(_x, _y, _w, _h));
  } else {
    // const nextN = _n / 1.8 - 1;
    const nextN = _n / 3 - 1;

    const sepX = random(_w / 10, (_w * 9) / 10);
    const sepY = random(_h / 10, (_h * 9) / 10);
    pushNds(nextN, _x, _y, sepX, sepY);
    pushNds(nextN, _x + sepX, _y, _w - sepX, sepY);
    pushNds(nextN, _x, _y + sepY, sepX, _h - sepY);
    pushNds(nextN, _x + sepX, _y + sepY, _w - sepX, _h - sepY);
  }
}
