class EMark {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
    this.size = random(1, 100);
    this.rot = int(random(0, 4));
    this.state = 0; //1:まる　2:ばつ
    this.ty = _y;
  }
  draw() {
    if (this.ty < this.y) {
      this.y += -30;
      if (this.y < this.ty) this.y = this.ty;
    }

    textSize(this.size);
    push();
    translate(this.x, this.y);
    if (this.state == 1) {
      strokeWeight(5);
      noFill(0);
      stroke(255, 0, 0);
      ellipse(0, 0, 100, 100);
    } else if (this.state == 2) {
      strokeWeight(5);
      stroke(0, 0, 255);
      line(-40, -40, 40, 40);
      line(-40, 40, 40, -40);
    }
    push();
    rotate(this.rot * (PI / 2));
    stroke(0);
    strokeWeight(1);
    fill(0);
    text("E", 0, 0);
    pop();
    pop();
  }
  anser(_rot) {
    if (this.rot == _rot) {
      this.state = 1;
    } else {
      this.state = 2;
    }
  }
  toUp() {
    this.ty = this.y - 150;
  }
}

let es = [];
function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("Helvetica");

  for (let i = 0; i < 2; i++) {
    es[i] = new EMark(width / 2, height - (i + 1) * (height / 6));
  }

  rectMode(CENTER);
}

function draw() {
  background(255);

  textAlign(CENTER, CENTER);
  es.forEach(e => {
    e.draw();
  });

  stroke(0, 90);
  noFill();
  strokeWeight(3);
  rect(es[1].x, es[1].y, 110, 110);

  textAlign(LEFT, CENTER);
  textSize(20);
  fill(0);
  strokeWeight(0);
  text("「E」の空いている\n 向きへスワイプ！", es[1].x + 100, es[1].y);
}

let touchPtX = 0;
let touchPtY = 0;
function touchStarted() {
  touchPtX = mouseX;
  touchPtY = mouseY;
}

function touchEnded() {
  let rad = atan2(mouseY - touchPtY, mouseX - touchPtX);
  // rad += PI / 4;
  // rad = rad % TWO_PI;
  //right
  if (-PI / 4 < rad && rad < PI / 4) es[1].anser(0);
  //up
  else if ((-PI * 3) / 4 < rad && rad < -PI / 4) es[1].anser(3);
  //down
  else if (PI / 4 < rad && rad < (PI * 3) / 4) es[1].anser(1);
  // left
  else es[1].anser(2);
  es.unshift(new EMark(width / 2, height));
  if (es.length > 5) es.pop();
  es.forEach(e => {
    e.toUp();
  });
}
