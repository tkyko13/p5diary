class Waker {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.spx = 0;
    this.spy = 0;
    this.isAppearing = false;
    this.isDisappearing = false;
    this.size = 20;
  }

  update() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
    this.x += this.spx;
    this.y += this.spy;
    this.spx -= this.spx / 10.0;
    this.spy -= this.spy / 10.0;
    if (this.isDisappearing) {
      this.size--;
      if (this.size <= 0) {
        //消えた
        this.isAppearing = true;
        this.isDisappearing = false;
        this.x = random(width);
        this.y = random(height);
      }
    } else if (this.isAppearing) {
      this.size++;
      if (this.size >= 20) this.isAppearing = false;
    }
  }

  suck(mx, my) {
    // this.spx += (mx - this.x) / 100.0;
    // this.spy += (my - this.y) / 100.0;

    let d = dist(mx, my, this.x, this.y);

    if (d < 40) {
      // 吸われた

      this.isDisappearing = true;
    } else {
      let r = atan2(my - this.y, mx - this.x);
      r += 0.5;
      this.spx += cos(r) * 1; //(d / 150.0);
      this.spy += sin(r) * 1; //(d / 150.0);
    }
  }

  draw() {
    fill(0, 60);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

let w = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 20; i++) {
    w.push(new Waker());
  }
  ellipseMode(CENTER);
}

function draw() {
  background(255);

  fill(0);
  ellipse(mouseX, mouseY, 50, 50);

  w.forEach(e => e.update());
  if (mouseIsPressed) w.forEach(e => e.suck(mouseX, mouseY));
  w.forEach(e => e.draw());
}
