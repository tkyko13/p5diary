class Shi {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.z = 0; //random(-50, -20);
    this.c = "つし".charAt(int(random(2))); //"つしいこり".charAt(int(random(6)));
    this.r = [random(PI), random(PI), random(PI)];
    this.rSp = [random(0.2), random(0.2), random(0.2)];
    this.col = color(0);
  }
  draw() {
    this.r[0] += this.rSp[0];
    this.r[1] += this.rSp[1];
    this.r[2] += this.rSp[2];

    push();
    fill(this.col);
    translate(this.x, this.y, this.z);
    rotateX(this.r[0]);
    rotateY(this.r[1]);
    rotateZ(this.r[2]);
    text(this.c, 0, 0);
    pop();
  }
  hit() {
    if (this.c == "つ") this.col = color(255, 0, 0);
    else this.col = color(0, 0, 255);
    for (let i = 0; i < 3; i++) {
      this.r[i] = 0;
      this.rSp[i] = 0;
    }
  }
}

let font;
let shis = [];
function preload() {
  font = loadFont("logotypejp_mp_m_1.1.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont(font);
  textSize(30);
  fill(0);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 50; i++) {
    shis.push(new Shi());
  }
}

function draw() {
  background(255);

  translate(-width / 2, -height / 2);
  shis.forEach((e) => e.draw());
}

function mousePressed() {
  const sz = 20;
  const mx = mouseX; // - width / 2;
  const my = mouseY; // - height / 2;
  shis.forEach((e) => {
    if (e.x - sz < mx && mx < e.x + sz && e.y - sz < my && my < e.y + sz)
      e.hit();
  });
}
