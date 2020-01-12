class Horse {
  constructor(_id) {
    this.id = _id;
    this.img = null;
    this.n = random(99);
    this.step = 0;
    this.yokoN = random(99);
    this.yoko = 0;
    this.ty = 0;
    this.jump = 0;
    this.jumpSp = random(0.3, 0.8);

    loadImage("data/" + this.id + ".png", _img => {
      // 画面サイズによって
      this.img = _img;
    });
  }
  draw() {
    this.n += 0.02;
    this.yokoN += 0.01;
    this.yoko = (noise(this.yokoN) - 0.5) * 20;
    this.step += noise(this.n) / 100.0;
    this.step = this.step % TWO_PI;
    if (this.img) {
      this.jump += this.jumpSp + noise(this.n) / 100.0;
      if (this.jump < 0) {
        this.jump = 0;
        this.jumpSp = -this.jumpSp;
      } else if (8 < this.jump) {
        this.jump = 8;
        this.jumpSp = -this.jumpSp;
      }

      let w = width / 2.5;
      let h = w / 2.0;

      let x = cos(-this.step) * (w + this.yoko) + width / 2;
      let y = sin(-this.step) * (h + this.yoko) + height / 2;
      this.ty = y;
      y += this.jump;

      push();
      translate(x, y);
      if (PI < this.step && this.step < TWO_PI) scale(-1, 1); //rotateY(PI);
      image(this.img, -this.img.width / 2, -this.img.height);
      fill(255);
      if (PI < this.step && this.step < TWO_PI) {
        scale(-1, 1); //rotateY(PI);
        text("" + this.id, -10, -35);
      } else {
        text("" + this.id, 10, -35);
      }

      pop();
    }
  }
}

let horses = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 8; i++) {
    horses.push(new Horse(i + 1));
  }
}

function draw() {
  background(255);

  // smooth();
  // fill("#1f7f1f");
  // strokeWeight(30);
  // stroke(0);
  // ellipse(width / 2, height / 2, 600 * 1.1, 400 * 1.1);

  horses.sort((h1, h2) => {
    return h1.ty - h2.ty;
  });
  horses.forEach(h => {
    h.draw();
  });

  // 順位
  const roma = ["Ⅰ", "Ⅱ", "Ⅲ", "Ⅳ", "Ⅴ"];
  const cols = [
    "#FFFFFF",
    "#000000",
    "#dc143c",
    "#4169e1",
    "#FFFF00",
    "#006400",
    "#FFaa00",
    "#FF00FF"
  ];
  horses.sort((h1, h2) => {
    return h1.step - h2.step;
  });
  textAlign(CENTER, CENTER);
  textSize(18);
  for (let i = 0; i < 5; i++) {
    noStroke();
    fill("#00bfff");
    circle(30, 19 + i * 25, 24);
    fill(0);
    text(roma[i], 30, 20 + i * 25);
    fill(cols[horses[i].id - 1]);
    rect(45, 10 + i * 25, 20, 20);
    if (horses[i].id == 1 || horses[i].id == 5 || horses[i].id == 7) fill(0);
    else fill(255);
    text(horses[i].id, 55, 20 + i * 25);
  }
}
