let scribble;
function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  strokeWeight(5);

  scribble = new Scribble();
  scribble.bowing = 0.1;
  scribble.roughness = 1.5;
}

function draw() {
  background(255);

  stroke(random(255), random(255), random(255), 10);
  for (let i = 0; i < 5; i++) {
    scribble.scribbleFilling(
      [20, width - 20, width - 20, 20],
      [20, 20, height - 20, height - 20],
      random(2, 5),
      random(360)
    );
  }
}
