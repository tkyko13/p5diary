class ColorScheme {
  constructor(colorString) {
    this.colors = [];
    {
      let cc = colorString.split("/");
      let cs = cc[cc.length - 1].split("-");
      for (let i in cs) {
        this.colors.push("#" + cs[i]);
      }
    }
  }
  get(i) {
    return this.colors[i];
  }
  getRand() {
    return this.colors[int(random(this.colors.length))];
  }
}

var colorScheme = new ColorScheme(
  "https://coolors.co/app/bc96e6-f6c0d0-dee5e5-17b890-5e807f"
);

let ball = {};
let smokes = [];
let tx, ty, tc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // fill(0, 10);
  // noStroke();
  angleMode(DEGREES);

  ball = {
    x: width / 2,
    y: height / 2,
    sp: 0,
    ang: 0
  };
  tx = random(width);
  ty = random(height);
  tc = random(30, 60);
}

function draw() {
  tc--;
  if (tc < 0) {
    tx = random(width);
    ty = random(height);
    tc = random(10, 30);
  }

  const tang = atan2(ty - ball.y, tx - ball.x);
  const nextSp = dist(ball.x, ball.y, tx, ty) / 10.0;

  if (nextSp - ball.sp > 10) {
    smokes.push({
      x: ball.x,
      y: ball.y,
      size: (nextSp - ball.sp) / 3,
      alpha: 200,
      ang: tang - 180
    });
  }

  ball.ang = tang;
  ball.sp = nextSp;
  ball.x += cos(ball.ang) * ball.sp;
  ball.y += sin(ball.ang) * ball.sp;

  background(100);

  smokes.forEach(e => {
    noStroke();
    fill(255, e.alpha);
    e.alpha -= 7;
    e.size += 1.5;
    e.x += cos(e.ang) / 1.5;
    e.y += sin(e.ang) / 1.5;
    ellipse(e.x, e.y, e.size, e.size);
  });
  smokes = smokes.filter(e => {
    return e.alpha > 0;
  });

  push();
  translate(ball.x, ball.y);
  rotate(ball.ang);
  stroke(0);
  fill(255);
  ellipse(0, 0, 20 + ball.sp, 20);
  pop();
}
