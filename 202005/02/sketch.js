// 5/2 み、ミキサー

let balls = [];
let mFlg = false;
let borderY;
let juiceCol;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 1, 1, 1, 1);
  ellipseMode(CENTER);
  borderY = height;
  juiceCol = color(1);
}

function draw() {
  background(255);

  noStroke();
  balls.forEach((e, i) => {
    if (e.fall) {
      if (e.y > borderY) {
        e.sp = 1;
        e.sz -= 2;
        borderY -= 0.1;
        juiceCol = lerpColor(juiceCol, e.col, 0.01);
        if (e.sz <= 0) {
          balls.splice(i, 1);
        }
      } else e.sp++;
      e.y += e.sp;
    }
    fill(e.col);
    circle(e.x, e.y, e.sz);
  });

  fill(juiceCol);
  beginShape();
  vertex(0, borderY);
  for (let i = 0; i < width; i += 30) {
    // vertex(i, noise(frameCount / 100.0, i) * 5);
    vertex(i, borderY + noise(frameCount / 60.0, i / 400.0) * 20);
  }
  vertex(width, borderY);
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
}

function touchStarted() {
  balls.push({
    sz: 0,
    col: color(mouseX / width, 0.5, 0.9),
    sp: 0,
    fall: false,
    x: mouseX,
    y: mouseY,
  });
  mFlg = true;
}

function touchMoved() {
  const b = balls[balls.length - 1];
  b.sz = dist(b.x, b.y, mouseX, mouseY);
}

function touchEnded() {
  const b = balls[balls.length - 1];
  b.fall = true;
  mFlg = false;
}
