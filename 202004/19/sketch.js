class WallObj {
  constructor(_r) {
    this.r = _r; // 1:left -1:right
    this.poly = [];
    this.isMove = false;
    this.col = color(random(255), random(255), random(255));
  }
  start() {
    this.isMove = true;
    this.poly = [];
    let x = 0;
    // first
    x = this.r == 1 ? -100 : width + 100;
    this.poly.push(createVector(x, 0));

    // second - last-1
    for (let y = random(100); y < height; y += random(100)) {
      if (this.r == 1) x = random(-100, 0);
      else x = random(width, width + 100);
      this.poly.push(createVector(x, y));
    }

    // last
    x = this.r == 1 ? -100 : width + 100;
    this.poly.push(createVector(x, height));
  }
  stop() {
    this.isMove = false;
  }
  draw() {
    fill(this.col);
    beginShape();
    this.poly.forEach((e) => {
      if (this.isMove) e.x += this.r * 3;
      vertex(e.x, e.y);
    });
    endShape(CLOSE);
  }
}

let lWall, rWall;
function setup() {
  createCanvas(windowWidth, windowHeight);
  collideDebug(true); //enable debug mode

  lWall = new WallObj(1);
  lWall.start();
  rWall = new WallObj(-1);
  rWall.start();
}
function draw() {
  background(255);

  lWall.draw();
  rWall.draw();
  const hit = collidePolyPoly(lWall.poly, rWall.poly, true);
  if (hit) {
    lWall.stop();
    rWall.stop();
  }
}
