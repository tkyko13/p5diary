//へ、平面、蛇

let t = 0;
let r = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 5; i++) {
    r.push(random(100));
  }
  strokeWeight(10);
  strokeCap(ROUND);
}

function draw() {
  background(255);
  translate(width / 2, height / 3);
  for (let i = 0; i < 5; i++) {
    rotate(PI - noise(t + r[i]) * TAU);
    line(0, 0, 0, 50);
    translate(0, 50);
  }
  t += 0.01;
}

// t=0;
// draw=(_)=>{
//   t++||createCanvas((W=600),W);
//   clear();
//   strokeWeight(10);
//   strokeCap(ROUND);
//   translate(W/2,W/2);
//   for(i=0;i<5;i++){
//     rotate(2-noise(t/99-i)*4);
//     line(0,0,0,50);
//     translate(0,50);
//   }
// };
// #つぶやきProcessing
