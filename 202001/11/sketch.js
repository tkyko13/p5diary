class FadeMessage {
  constructor(_mess) {
    this.mess = _mess;
    this.fadeAnim = 0;
    this.state = 0;
    this.waitCount = 180;
  }
  start() {
    this.state = 1;
  }
  draw() {
    if (this.state == 1) {
      this.fadeAnim += 3;
      if (this.fadeAnim > 255) this.state = 2;
    } else if (this.state == 2) {
      if (mouseIsPressed) this.state = 3;
      this.waitCount--;
      if (this.waitCount < 0) this.state = 3;
    } else if (this.state == 3) {
      this.fadeAnim -= 5;
      if (this.fadeAnim < 0) this.state = 4;
    } else if (this.state == 4) {
      return false;
    }

    if (this.state != 0) {
      background(255);
      textSize(24);
      textAlign(CENTER, CENTER);
      fill(100, this.fadeAnim);
      text(this.mess, width / 2, height / 2);
    }
    return true;
  }
}

let fm;
let osc;
let playing = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fm = new FadeMessage(
    "このサイトでは音がでます。\n音量などにご注意ください。"
  );
  fm.start();

  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);

  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  if (fm.draw()) {
    return;
  }

  background(backgroundColor);
  // osc.amp(0.5, 0.05);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      // ramp amplitude to 0.5 over 0.05 seconds
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0, 255, 255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255, 0, 255);
    }
  }
}
