// ぬ、ヌメルゴン

let img;
function preload() {
  img = loadImage("n706.png");
}

let c;
let r = 0;
function setup() {
  c = createCanvas(windowWidth, windowHeight);
  // c.elt.style.filter = `blur(30px)contrast(100)`;
  imageMode(CENTER);
}

function draw() {
  background(255, 7);

  // let contrastVal =
  //   1 +
  //   (frameCount % 400 < 200 ? frameCount % 400 : 400 - (frameCount % 400)) / 2;
  // c.elt.style.filter = "blur(30px)contrast(" + contrastVal + ")";

  c.elt.style.filter =
    "blur(" +
    noise(frameCount / 50.0 + 20) * 30 +
    "px)contrast(" +
    noise(frameCount / 50.0 + 40) * 90 +
    ")";

  fill(255, 0, 0);
  r += (noise((frameCount + 99) / 50.0) - 0.5) * (PI / 15);
  translate(
    noise(frameCount / 50.0) * width,
    noise((frameCount + 9) / 50.0) * height
  );
  rotate(r);
  image(img, 0, 0, 500, 500);
  // fill(255);
  // ellipse(mouseX, mouseY, 70, 70);
}
