//ひ、必要不可欠

let device;
let deviceRot, deviceTouch;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  createA("http://www.tramontana.xyz/", "tramontana library");
  createDiv("");
  createSpan("IP Address : ");
  let inp = createInput("192.168.0.1");
  let btn = createButton("connect");
  btn.mousePressed(function () {
    device = new tramontana();
    device.start(inp.value(), function (e) {
      device.subscribeAttitude(10, function (ip, e) {
        deviceRot = e;
      });
      // device.subscribeTouch(true, function (ip, e) {
      //   deviceTouch = e;
      // });
    });
  });

  rectMode(CENTER);
  strokeJoin(ROUND);
}

function draw() {
  background(255);

  // if (deviceTouch) {
  //   translate(deviceTouch.x, deviceTouch.y);
  // }
  if (deviceRot) {
    rotateX(-deviceRot.p);
    rotateY(deviceRot.r);
    rotateZ(-deviceRot.y);
  }

  fill(60);
  rect(0, 0, 70, 100);
  fill(255);
  translate(0, 0, 1);
  rect(0, -5, 60, 80);
  ellipse(0, 42, 10, 10);
}
