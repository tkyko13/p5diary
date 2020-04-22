const nomal = [
  [-50, 10],
  [-75, 5],
  [-50, 0],
  [-130, -10],
  [-90, -30],
  [-175, -56],
  [-120, -80],
  [-100, -83],

  [-140, -108],
  [-170, -109],
  [-140, -108],
  [-100, -83],

  [-130, -135],
  [-180, -165],
  [-100, -200],
  [-33, -160],

  [-50, -240],
  [20, -210],
  [30, -145],

  [50, -220],
  [30, -145],

  [50, -140],
  [80, -105],
  [132, -125],
  [80, -105],

  [145, -110],
  [145, -110],
  [117, -81],

  [170, -78],
  [170, -78],
  [95, -35],

  [135, -43],
  [95, -35],
  [135, -20],
  [75, -5],
  [95, 8],
  [50, 10],
];

const spe = [
  [-50, 10],
  [-75, 0],
  [-50, 0],
  [-120, -32],
  [-100, -30],
  [-130, -60],
  [-140, -100],
  [-115, -87],

  [-130, -130],
  [-120, -200],
  [-110, -160],
  [-100, -145],

  [-100, -180],
  [-95, -185],
  [-50, -240],
  [-45, -210],

  [-30, -240],
  [-30, -240],
  [-25, -220],

  [-0, -260],
  [10, -230],

  [30, -250],
  [40, -280],
  [60, -240],
  [85, -170],

  [100, -198],
  [105, -140],
  [92, -110],

  [120, -140],
  [115, -95],
  [97, -65],

  [125, -70],
  [90, -33],
  [108, -33],
  [70, -8],
  [85, -5],
  [50, 10],
];

let nomalCol, peCol;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nomalCol = color("#222222");
  speCol = color("#FFFF00");
}

function draw() {
  background(255);

  translate(width / 2, height / 2 + 100);

  let l = mouseY / height;

  beginShape();
  strokeWeight(5);
  fill(lerpColor(nomalCol, speCol, l));
  for (let i = 0; i < nomal.length; i++) {
    vertex(lerp(nomal[i][0], spe[i][0], l), lerp(nomal[i][1], spe[i][1], l));
  }
  endShape(CLOSE);
}