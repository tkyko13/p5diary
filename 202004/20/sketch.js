let rx = 0;
let corn = [];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  for (let x = 0; x < 36; x++) {
    corn[x] = [];
    for (let y = 0; y < 36; y++) {
      corn[x][y] = {
        x: x * 10 - 180,
        y: cos(y * 10) * 120,
        z: sin(y * 10) * 120,
        spy: 0,
        isEat: false,
        isOut: false,
      };
    }
  }
}

function draw() {
  background("#87CEEB");
  rx++;
  rx = rx % 360;

  push();
  noStroke();
  fill(255);
  rotateX(rx);
  rotateZ(90);
  scale(3);
  cylinder(40, 120);
  pop();

  const mx = mouseX - width / 2;
  const my = mouseY + height / 2;
  push();
  fill("#FFFF00");
  rotateX(rx);
  for (let x = 0; x < 36; x += 1) {
    for (let y = 0; y < 36; y += 1) {
      let c = corn[x][y];
      if (c.isOut) continue;

      // fill("#FFFF00");
      if (mouseIsPressed && mx - 10 < c.x && c.x < mx + 1) {
        if (
          (rx - 5 - 90) % 360 < 360 - y * 10 &&
          360 - y * 10 < (rx + 5 - 90) % 360
        ) {
          c.isEat = true;
          // fill("#FF0000");
        } else {
        }
      }
      if (c.isEat) {
        c.spy++;
        c.y += c.spy;
        if (c.y > 1000) {
          c.isOut = true;
        }
      }

      push();
      translate(c.x, c.y, c.z);
      box(20);
      pop();
    }
  }
  pop();
}
