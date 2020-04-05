let e = [];
let score = 0;
let img;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);

  loadImage("earth2.jpg", _img => {
    img = _img;
  });
}

function draw() {
  background(0);
  if (img) {
    image(img, 0, height - 500);
  }

  noFill();
  stroke(255);
  ellipse(mouseX, mouseY, 50, 50);
  line(mouseX - 20, mouseY, mouseX + 20, mouseY);
  line(mouseX, mouseY - 20, mouseX, mouseY + 20);

  if (frameCount % 30 == 0) {
    e.push(new Enemy());
  }
  e.forEach(e => {
    e.update();
    e.display();
  });
  e = e.filter(e => {
    if (e.isOut) score--;
    return !e.isOut;
  });
  print(e.length);

  text(score, 20, 20);
}

function mousePressed() {
  e.forEach(e => {
    if (e.isHit(mouseX, mouseY)) {
      e.hit();
      score++;
    }
  });
}

class Enemy {
  constructor() {
    this.x;
    this.y;
    this.dotSize = 3;
    this.w = this.dotSize * 11;
    this.h = this.dotSize * 8;
    this.isBreak = false;

    this.isBreaking = false;
    this.offX = 0;
    this.offY = 0;
    this.spx = 0;
    this.spy = 0;
    this.rx = 70;
    this.ry = 20;

    this.dot = [
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      1,
      1,
      0,
      1,
      1,
      0,
      0,
      0
    ];

    this.breakEffX;
    this.breakEffY;
    this.breakEffSize;
    this.breakStep = 0;
    this.x = width / 2 - this.w;
    this.y = this.h + 10;
    this.offX = random(50, width - 50);
    this.offY = this.y;

    this.march = 0;
    this.isOut = false;
    this.randSpx = random(0.01, 0.11);
    this.randSpy = random(0.01, 0.06);
    this.randMarch = random(0.3, 0.6);
  }

  update() {
    if (this.isBreak == false) {
      if (this.isBreaking == false) {
        this.spx += this.randSpx;
        this.spy += 0.04;
        this.march += 0.5;
        //spx += random(0.2);
        //spy += random(0.2);

        this.x = this.offX + cos(this.spx) * this.rx;
        this.y = this.offY + sin(this.spy) * this.ry;

        this.x = constrain(this.x, 0, width - this.w);
        this.y = constrain(this.y, 0, height - this.h);

        this.y += this.march;
      } else {
        this.breakStep++;
        if (this.breakStep > 255) {
          this.isBreak = true;
        }

        this.breakEffSize += 2;
        if (this.breakEffSize > 20) {
          this.breakEffSize = 0;
          this.breakEffX = this.x + random(this.w);
          this.breakEffY = this.y + random(this.h);
        }
      }
    }
    if (this.y > height) {
      this.isOut = true;
    }
  }

  display() {
    if (this.isBreak == false) {
      noStroke();

      if (this.isBreaking == false) {
        fill(255);
      } else {
        fill(255, 255 - this.breakStep);
      }
      for (let i = 0; i < 88; i++) {
        if (this.dot[i] == 1) {
          rect(
            this.x + (i % 11) * this.dotSize,
            this.y + int(i / 11) * this.dotSize,
            this.dotSize,
            this.dotSize
          );
        }
      }

      if (this.isBreaking == true) {
        print("breaking");
        ellipse(
          this.breakEffX,
          this.breakEffY,
          this.breakEffSize,
          this.breakEffSize
        );
      }
    }
  }

  isHit(_x, _y) {
    if (
      this.x < _x &&
      _x < this.x + this.w &&
      this.y < _y &&
      _y < this.y + this.h
    ) {
      return true;
    } else {
      return false;
    }
  }

  hit() {
    if (this.isBreaking == false) {
      this.breakEffX = this.x + random(this.w);
      this.breakEffY = this.y + random(this.h);
      this.breakEffSize = 0;
      this.breakStep = 0;
      this.isBreaking = true;
    }
  }
}
