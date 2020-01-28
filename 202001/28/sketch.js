class Engine {
  constructor() {
    this.pos = 0;
    this.sp = 0;

    this.posLog = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.bound = null;
  }
  update() {
    const lim = 10;
    // print((lim + this.sp) / lim);
    // this.sp += random(-(lim + this.sp) / lim, (lim - this.sp) / lim);
    this.sp += random(-1, 1);
    this.sp = this.sp < -lim ? -lim : this.sp;
    this.sp = lim < this.sp ? lim : this.sp;
    // if (this.bound)
    //   if (this.pos < this.bound.min || this.bound.max < this.pos)
    //     this.sp = -this.sp;

    this.pos += this.sp;
    this.posLog.push(this.pos);
    this.posLog.shift();
  }
  setBound(_min, _max) {
    this.bound = { min: _min, max: _max };
  }
  addVec(vec) {
    this.sp += vec;
  }
}

class RandWaker {
  constructor(_c) {
    this.c = _c;
    this.x = new Engine();
    this.x.pos = width / 2;
    // this.x.setBound(0, width);
    this.y = new Engine();
    this.y.pos = height / 2;
    // this.y.setBound(0, height);
    this.r = new Engine();
    this.size = random(40, 60);
  }
  draw() {
    this.x.update();
    this.y.update();
    this.r.update();
    if (this.x < 0 || width < this.x) this.x;
    push();
    fill(0, 80);
    textSize(this.size);
    translate(this.x.pos, this.y.pos);
    rotate(this.r.pos / 20.0);
    text(this.c, 0, 0);
    pop();
  }
  toge(rws) {
    rws.forEach(e => {
      const v = 0.01;
      if (e.c == this.c) {
        if (e.x.pos < this.x.pos) {
          e.x.addVec(v);
          this.x.addVec(-v);
        } else {
          e.x.addVec(-v);
          this.x.addVec(v);
        }
        if (e.y.pos < this.y.pos) {
          e.y.addVec(v);
          this.y.addVec(-v);
        } else {
          e.y.addVec(-v);
          this.y.addVec(v);
        }
      }
    });
  }
}

const pcd = "PCD2020";
let rws = [];
let i = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  if (frameCount % 20 == 0) {
    if (pcd.length - 1 < i) i = 0;
    rws.push(new RandWaker(pcd.charAt(i)));
    i++;
  }

  background(255);
  rws.forEach(e => {
    e.draw();
    e.toge(rws);
  });

  if (rws.length > 100) rws.shift();
}
