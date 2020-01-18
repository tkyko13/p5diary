const path = "https://pixabay.com/api/?key=14954729-35bd80aa9ed8a8e67ab11f934";
let catImg;
let animals = ["Donkey", "Dog", "Cat", "Chicken"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  putImg(0, height);
}

function draw() {}

function putImg(num, bottom) {
  if (num > 3) return;

  let animalName = animals[num]; //animals[int(random(animals.length))]
  httpGet(path + "&q=" + animalName + "&orientation=horizontal", "json", d => {
    let ind = int(random(d.hits.length));
    // print(d.hits[ind]);
    loadImage(d.hits[ind].largeImageURL, img => {
      // let w = x + img.width < width - 10 ? img.width : width - 10 - x;
      // let h = y + img.height < height - 10 ? img.height : height - 10 - y;
      let y = bottom / 1.5;
      let h = bottom - y;
      let w = img.width * (h / img.height);
      let x = width / 2 - w / 2;
      image(img, x, y, w, h);
      putImg(++num, y);
    });
  });
}
