// 5/7 ゆ、行方知れず

let img;
function preload() {
  img = loadImage("cat.png");
}

let z = 0,
  r = 0;
let zsp = 2;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // textureMode(NORMAL);
}

function draw() {
  background(255);

  // translate(-width / 2, -height / 2);

  if (z > 70 || 0 > z) zsp = -zsp;
  z += zsp;

  let l = mekuri(z / 10);
  // beginShape();
  // l.forEach((e) => {
  //   vertex(e.x * 10, e.y * 10);
  // });
  // endShape();

  translate(-200, -200);

  const w = img.width;
  const h = img.height;

  // beginShape();
  // // rotateX(r);
  // noFill();
  // // r += 0.003;
  // // texture(img);
  // vertex(0, 0, 0, 0, 0); //left up
  // for (let i = 0; i < l.length - 1; i++) {
  //   // vertex((l[i].x * w) / 10, 0, l[i].y * 10, (l[i].x * w) / 10, 0);
  //   vertex((l[i].x * w) / 10, 0, l[i].y * 10);
  // }
  // // vertex(w, 0, z, img.width, 0); //rigut up
  // // for (let i = 0; i < l.length - 1; i++) {
  // //   vertex(
  // //     w,
  // //     // (l[9 - i].x * w) / (10 - i),
  // //     // (i / 10) * l.length,
  // //     (l[9 - i].y * h) / 10,
  // //     w,
  // //     h / (10 - i)
  // //   );
  // // }
  // vertex(w, h, w, h);
  // vertex(0, h, 0, h);
  // endShape(CLOSE);

  // translate(0, 0, 0);
  beginShape();
  // rotateX(r);
  noFill();
  // r += 0.003;
  texture(img);
  vertex(0, 0, 0, 0, -100); //left up
  vertex(w / 2, 0, 0, w / 2, 0);
  // for (let i = 0; i < l.length - 1; i++) {
  //   vertex((l[i].x * w) / 10, 0, l[i].y * 10, (l[i].x * w) / 10, 0);
  // }
  vertex(w, z, 0, w, 0); //rigut up
  // for (let i = 0; i < l.length - 1; i++) {
  //   vertex(
  //     w,
  //     // (l[9 - i].x * w) / (10 - i),
  //     // (i / 10) * l.length,
  //     (l[9 - i].y * h) / 10,
  //     w,
  //     h / (10 - i)
  //   );
  // }
  vertex(w, h / 2, 0, w, h / 2);
  vertex(w, h, 0, w, h);
  vertex(0, h, 0, 0, h);
  endShape(CLOSE);

  // noFill();
  // rotateX(0.1);
  // beginShape();
  // vertex(0, 0, 0); //left up
  // vertex(w / 2, 0, 0);
  // vertex(w, 0, z); //rigut up
  // vertex(w, h / 2, 0);
  // vertex(w, h, 0);
  // vertex(0, h, 0);
  // endShape(CLOSE);

  // beginShape();
  // // texture(img);
  // vertex(0, 0, 0, 0); //left up
  // // vertex(w / 4, 0, z / 4, img.width / 4, 0);
  // // vertex(w / 2, 0, z / 2, img.width / 2, 0);
  // // vertex((w * 3) / 4, 0, 0, 0, (img.width * 3) / 4, 0);
  // vertex(w, 0, z, img.width, 0); //rigut up
  // // vertex(w, h / 4, z / 4, img.width, img.height / 4);
  // // vertex(w, h / 2, z / 2, img.width, img.height / 2);
  // vertex(w, (h * 3) / 4, 0, img.width, (img.height * 3) / 4);

  // vertex(200, 200, img.width, img.height);
  // vertex(0, 200, 0, img.height);
  // endShape(CLOSE);

  // texture(img);
  // plane(200, 200, 100, 100);
}

function mekuri(pow, num) {
  let ret = [];
  ret[0] = { x: cos(pow / 13), y: sin(pow / 13) };
  for (let i = 1; i < 10; i++) {
    ret.push({
      x: ret[i - 1].x + cos(pow / (13 - i)),
      y: ret[i - 1].y + sin(pow / (13 - i)),
    });
  }
  return ret;
}
