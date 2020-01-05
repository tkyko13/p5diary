let hirahiras = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  rectMode(CENTER);
  colorMode(HSB);
  noStroke();
}

function draw() {
  background(255);

  let mx = mouseX - width / 2;
  let my = mouseY - height / 2;
  fill(0);
  triangle(mx, my, mx + 8, my - 20, mx + 20, my - 8);

  hirahiras.forEach(e => {
    e.x += cos(e.r) * e.v;
    e.y += sin(e.r) * e.v;
    e.v = e.v / 1.05;
    if (e.v < 0) {
      e.v = 0;
    }
    e.y++;
    e.rx += 0.1;
    e.ry += 0.1;
    e.rz += 0.1;

    push();
    translate(e.x, e.y);
    rotateX(e.rx);
    rotateY(e.ry);
    rotateZ(e.rz);
    fill(e.col);
    rect(0, 0, 20, 20);
    pop();
  });
}

function mousePressed() {
  let l = random(10, 15);
  for (let i = 0; i < l; i++) {
    hirahiras.push({
      x: mouseX - width / 2,
      y: mouseY - height / 2,
      r: random(-PI / 10, -PI / 2.5),
      rx: random(0, TWO_PI),
      ry: random(0, TWO_PI),
      rz: random(0, TWO_PI),
      v: random(10, 15),
      col: color(random(255), 200, 200, 0.7)
    });
  }
}
