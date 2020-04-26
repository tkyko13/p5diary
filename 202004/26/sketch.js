function getRandomEase(_n) {
  // 関数外で宣言したい
  const eases = [
    createjs.Ease.backIn,
    createjs.Ease.backInOut,
    createjs.Ease.backOut,
    createjs.Ease.bounceIn,
    createjs.Ease.bounceInOut,
    createjs.Ease.bounceOut,
    createjs.Ease.circIn,
    createjs.Ease.circInOut,
    createjs.Ease.circOut,
    createjs.Ease.cubicIn,
    createjs.Ease.cubicInOut,
    createjs.Ease.cubicOut,
    createjs.Ease.elasticIn,
    createjs.Ease.elasticInOut,
    createjs.Ease.elasticOut,
    createjs.Ease.get(_n),
    createjs.Ease.getBackIn(_n),
    createjs.Ease.getBackInOut(_n),
    createjs.Ease.getBackOut(_n),
    createjs.Ease.getElasticIn(_n),
    createjs.Ease.getElasticInOut(_n),
    createjs.Ease.getElasticOut(_n),
    createjs.Ease.getPowIn(_n),
    createjs.Ease.getPowInOut(_n),
    createjs.Ease.getPowOut(_n),
    createjs.Ease.linear,
    createjs.Ease.none,
    createjs.Ease.quadIn,
    createjs.Ease.quadInOut,
    createjs.Ease.quadOut,
    createjs.Ease.quartIn,
    createjs.Ease.quartInOut,
    createjs.Ease.quartOut,
    createjs.Ease.quintIn,
    createjs.Ease.quintInOut,
    createjs.Ease.quintOut,
    createjs.Ease.sineIn,
    createjs.Ease.sineInOut,
    createjs.Ease.sineOut,
  ];
  // print(Object.keys(createjs.Ease));
  let rand = eases[int(random(eases.length))];
  return rand;
  // return createjs.Ease[rand](random(1, 10));
  // return createjs.Ease[eases[int(random(eases.length))]];
}

function isAho(n) {
  if (n % 3 == 0) return true;
  const sn = String(n);
  return sn.indexOf("3") != -1;
}

const txtScale = 10;
const FizzW = 18 * txtScale;
const FizzH = 10 * txtScale;
function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  // const c = createCanvas(2000, 600);
  const stage = new createjs.Stage(c.canvas);

  let count = 0;
  let pos = { x: FizzW / 2, y: FizzH / 2 };
  startAnim();
  function startAnim() {
    count++;
    const buzzFlg = isAho(count);
    const txt = new createjs.Text(buzzFlg ? "ばぁず!" : "Fizz");
    txt.x = pos.x;
    if (buzzFlg) txt.x += FizzW / 2;
    txt.y = pos.y;
    txt.scale = txtScale;
    txt.textAlign = "center";
    txt.textBaseline = "middle";
    // print(txt.getMeasuredHeight() * 5);
    pos.x += FizzW;
    if (buzzFlg) {
      pos.x += FizzW;
    }
    if (pos.x > width * 2) {
      // widthgがうまく取得できない
      // wrap
      pos.x = FizzW / 2;
      pos.y += FizzH;
    }

    if (!buzzFlg) {
      txt.color = "#000000aa";
      createjs.Tween.get(txt).to({}, 1000).call(startAnim);
    } else {
      txt.color = "#F08080";
      const eas = getRandomEase(random(1, 10));
      const eas2 = getRandomEase(random(1, 10));
      createjs.Tween.get(txt)
        .to(
          {
            x: txt.x + random(-100, 100),
            y: txt.y + random(-100, 100),
            scale: txtScale + txtScale / 2,
            rotation: random(-180, 180),
          },
          500,
          eas
        )
        .to({ x: txt.x, y: txt.y, scale: txtScale, rotation: 0 }, 500, eas2)
        .call(startAnim);
    }
    stage.addChild(txt);
  }

  const counter = new createjs.Text("1");
  counter.x = width * 2 - 70;
  counter.y = height * 2 - 40;
  counter.scale = 3;
  stage.addChild(counter);

  // stage.update();
  createjs.Ticker.addEventListener("tick", update);
  function update(event) {
    counter.text = String(count);
    stage.update();
  }
}
