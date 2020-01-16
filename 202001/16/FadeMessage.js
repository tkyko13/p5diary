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
