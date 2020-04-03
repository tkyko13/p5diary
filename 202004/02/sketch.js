let angles = [];
let sp = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 3; i++) {
    angles.push(random(TWO_PI));
    sp.push(random(0.05));
  }
}

function draw() {
  background(255);

  fill(0, 50);
  textSize(width);

  for (let i = 0; i < 3; i++) {
    // textSize(width - i * 200);
    push();
    translate(width / 2, height / 2);
    rotate(angles[i]);
    text("い", 0, 0);
    pop();

    angles[i] += sp[i];
  }
}
