var img1;
var img2;
var img3;
var startGridx;
var startGridy;
var whichImg;
var size;

function preload() {
  img1 = loadImage("LC2.jpg");
  img2 = loadImage("CP.jpg");
  img3 = loadImage("LC.jpg");
}

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("container");
  frameRate (8);
   background(0);
  startGrid = 0;
  whichImage = 1;
}

function draw() {
  for (var x = startGridx; x < width; x = x + 3 * size) {
    for (var y = startGridy; y < height; y = y + 3 * size) {
      if (whichImg == 1) {
        var c = img1.get(x, y);
      } else if (whichImg == 2) {
        var c = img2.get(x, y);
      } else {
        var c = img3.get(x, y);
      }
      noStroke();
      fill(c);
      square(x, y, size)
    }
  }
  whichImg = round(random(1, 3));
  startGridx = random(0, 60);
  startGridy = random(0, 60);
  size = round(random(1, 10));
}