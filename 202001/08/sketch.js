let n1, n2;
function setup() {
  createCanvas((w = 800), w);
  n1 = random(100);
  n2 = random(100);
  strokeWeight(5);
}

function draw() {
  n1 += 0.015;
  n2 += 0.015;
  stroke(random(255), random(255), random(255));
  line(noise(n1) * width, 0, noise(n2) * width, height);
}

// #つぶやきprocessing
/*
let n1,n2;
setup=_=>{
createCanvas((w=800),w);
n1=random(99);
n2=random(99);
strokeWeight(5);
}
draw=_=>{
n1+=0.015;
n2+=0.015;
stroke(random(255),random(255),random(255));
line(noise(n1)*width,0,noise(n2)*width,height);
}
*/
