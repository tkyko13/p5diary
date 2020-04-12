let count = 0;
let changeN = 10;
let textX = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  fill(0);
  frameRate(3);
}

function draw() {
  background(255);

  if (count > changeN) {
    count = 0;
    changeN = random(6, 12);
    if (textX == 50) textX = width - 150;
    else textX = 50;
  }
  count++;
  text(getHiraKana(), textX, height / 2);
}

function getHiraKana() {
  let isHira = random() < 0.5;
  let n = int(random(1, 6));
  let charNs = [];
  for (let i = 0; i < n; i++) {
    if (isHira) charNs.push(int(random(unchar("あ"), unchar("ん"))));
    else charNs.push(int(random(unchar("ア"), unchar("ン"))));
  }
  return join(char(charNs), "");
}
