let clickFrame = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();

  text("ドラッグで筆っぽい", 20, 20);
}

function draw() {
  if (mouseIsPressed) {
    let size = 100 - (frameCount - clickFrame);
    fill(0, size);
    if (size < 0) size = 0;
    translate(mouseX, mouseY);
    rotate(PI / 3);
    ellipse(0, 0, size, size / 1.5);
  }
}

function touchStarted() {
  clickFrame = frameCount;
}
