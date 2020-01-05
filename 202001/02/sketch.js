class Moku {
  constructor(_x, _y, _size) {
    this.x = _x;
    this.y = _y;
    this.maxSize = _size;
    this.cSize = 0;
  }
  draw() {
    if (this.maxSize > this.cSize) this.cSize += 1;
    noStroke();
    ellipse(this.x, this.y, this.cSize, this.cSize);
  }
}
class MyClass {
  constructor(_x, _y) {
    this.life = 500;
    this.x = _x;
    this.y = _y;
    this.mokuY = _y;
    this.mokus = [];
  }
  draw() {
    this.life--;
    if (this.life == 499) {
      this.mokus.push(new Moku(this.x, (this.mokuY -= 15), 10));
    } else if (this.life == 489) {
      this.mokus.push(
        new Moku(this.x - random(-15, 15), (this.mokuY -= 15), 15)
      );
    } else if (this.life == 479) {
      this.mokus.push(
        new Moku(this.x - random(-15, 15), (this.mokuY -= 15), 20)
      );
    } else if (this.life < 459 && this.life > 419) {
      this.mokus.push(
        new Moku(
          this.x - random(-60, 60),
          this.mokuY - random(15, 60),
          random(20, 40)
        )
      );
    }
    this.mokus.forEach(e => {
      e.draw();
    });
  }
}

let __myCache = {};
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  fill(255);
  text("Mouse Click!", 10, 10);
  if (!__myCache.myClasses) __myCache.myClasses = [];
  __myCache.myClasses.forEach(e => {
    e.draw();
  });

  __myCache.myClasses = __myCache.myClasses.filter(e => e.life > 0);
}

function mousePressed() {
  __myCache.myClasses.push(new MyClass(mouseX, mouseY));
}
