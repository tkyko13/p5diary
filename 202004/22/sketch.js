// 気象庁のページ(https://www.data.jma.go.jp/gmd/risk/obsdl/index.php)
// csvのダウンロード
// atomで開いてencodeをshif-jsに変更
// 他にコピペして日本語化けを解消

let data2020, data2018;
const windRotInd = 22,
  windPowInd = 20;
function preload() {
  data2020 = loadTable("data_2020.csv");
  data2018 = loadTable("data_2018.csv");
}

let time = 0;
let now = {}, //2020
  pre = {}; //2018
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);

  now.x = width / 2;
  now.y = height / 2;
  now.sp = 0;
  now.rot = 0;
  pre.x = width / 2;
  pre.y = height / 2;
  pre.sp = 0;
  pre.rot = 0;

  // print(data2020.getString(0, 0));
  // print(data2020.getColumnCount());
  // for (let r = 0; r < data2020.getRowCount(); r++) {
  // for (let c = 0; c < data2020.getColumnCount(); c++) {
  // print(data2018.getString(r, 22));
  // print(data2018.getString(r, 20));
  // }
  // }

  // print(getRot("北北東"));
}

function draw() {
  background(255);

  textSize(12);
  text("今年と2年前の風向きと強さ", 90, 20);

  if (time > 23) {
    time = 0;
    now.x = width / 2;
    now.y = height / 2;
    now.sp = 0;
    now.rot = 0;
    pre.x = width / 2;
    pre.y = height / 2;
    pre.sp = 0;
    pre.rot = 0;
  }
  ellipse(width / 2, 100, 80, 80);
  line(
    width / 2,
    100,
    width / 2 + cos(time * 30 - 90) * 35,
    100 + sin(time * 30 - 90) * 35
  );

  time += 0.01;

  const rowInd = int(time);

  const nowR = getRot(data2020.getString(rowInd, windRotInd));
  const nowP = int(data2020.getString(rowInd, windPowInd));
  const preR = getRot(data2018.getString(rowInd, windRotInd));
  const preP = int(data2018.getString(rowInd, windPowInd));

  now.rot += (nowR - now.rot) / 20.0;
  now.sp += (nowP - now.sp) / 20.0;
  now.x += (cos(now.rot) * now.sp) / 2;
  now.y += (sin(now.rot) * now.sp) / 2;
  if (now.x < 0) now.x = 0;
  else if (width < now.x) now.x = width;
  if (now.y < 0) now.y = 0;
  else if (height < now.y) now.y = height;

  pre.rot += (preR - pre.rot) / 20.0;
  pre.sp += (preP - pre.sp) / 20.0;
  pre.x += (cos(pre.rot) * pre.sp) / 2;
  pre.y += (sin(pre.rot) * pre.sp) / 2;
  if (pre.x < 0) pre.x = 0;
  else if (width < pre.x) pre.x = width;
  if (pre.y < 0) pre.y = 0;
  else if (height < pre.y) pre.y = height;

  textSize(30);
  text("今年", now.x, now.y);
  text("2年前", pre.x, pre.y);
}

function getRot(ewsnString) {
  let rot = { x: 0, y: 0 };
  for (var i = 0; i < ewsnString.length; i++) {
    // console.log(str[i]);
    switch (ewsnString[i]) {
      case "東":
        rot.x--;
        break;
      case "西":
        rot.x++;
        break;
      case "南":
        rot.y--;
        break;
      case "北":
        rot.y++;
        break;
    }
  }
  return atan2(rot.y, rot.x);
}
