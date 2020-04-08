class Audience {
  constructor() {
    this.x = random(50, width - 50);
    this.y = random(50, height - 200);
    this.movY = 0;
    this.tempo = 0;
    this.count = random();
  }

  draw() {
    this.count += this.tempo / (10000 + random(100));
    this.movY = cos(this.count) * 50;

    if (this.movY > 0) {
      this.movY = 0;
    }
    ellipse(this.x, this.y + this.movY, 20, 20);
  }
}

let as = [];
let tempo = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    as.push(new Audience());
  }
}

function draw() {
  background(255);

  ellipse(mouseX, mouseY, 10, 10);

  tempo += dist(mouseX, mouseY, pmouseX, pmouseY);
  tempo = tempo / 1.008;

  as.forEach((e) => {
    e.tempo = tempo;
    e.draw();
  });
}
