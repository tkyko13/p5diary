// https://maoudamashii.jokersounds.com/list/se11.html

let fm;
let osc;
let mySound;
let delay, reverb;
let pattern = [1, 1, 1, 1, 1, 1, 1, 1];
let myPhrase, myPart;
function preload() {
  mySound = loadSound("data/wahaha.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fm = new FadeMessage(
    "このサイトでは音がでます。\n音量などにご注意ください。"
  );
  fm.start();

  delay = new p5.Delay();

  reverb = new p5.Reverb();

  myPhrase = new p5.Phrase("bbox", makeSound, pattern);
  myPart = new p5.Part();
  myPart.addPhrase(myPhrase);
  myPart.setBPM(60);
}
function makeSound(time, playbackRate) {
  mySound.rate(playbackRate);
  mySound.play(time);
}

function draw() {
  if (fm.draw()) {
    return;
  }

  background(255);
  fill(0);
  text("mouse clickで音が出ます", width / 2, height / 2);
  // fill(200, 100, 100, 30);
  // rect(0, 0, 200, 200);
}

function mouseClicked() {
  if (mouseX < 200 && mouseY < 200) {
    // mySound.disconnect();
    // mySound.playMode("restart");
    // pattern = [1];
    // mySound.play();
  } else {
    mySound.playMode("sustain");

    mySound.amp(random(0.2, 0.4));
    // mySound.loop();
    if (random() < 0.5) mySound.reverseBuffer();

    if (random() < 0.5) reverb.process(mySound, random(1, 5), random(1, 5));

    if (random() < 0.5)
      delay.process(mySound, random(0.9), random(0.9), random(2000, 2400));

    for (let i = 0; i < 8; i++) pattern[i] = random(2);

    myPart.start();
  }
}
