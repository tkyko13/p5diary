// https://maoudamashii.jokersounds.com/list/se11.html

let fm;
let mic, fft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  noStroke();
  text("声で色を塗る", 20, 20);
}

function draw() {
  // background(255, 2);

  let micLevel = mic.getLevel();
  // rect(width / 2, 0, 10, constrain(height - micLevel * height * 5, 0, height));

  let spectrum = fft.analyze();
  fill(spectrum[0], spectrum[50], spectrum[100], 80);
  circle(random(width), random(height), micLevel * 200);
}
