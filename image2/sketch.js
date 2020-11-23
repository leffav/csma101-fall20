var img1;
var img2;
var x = [];
var y = [];

function preload() {
  img1 = loadImage("LC.jpg");
  img2 = loadImage("CP.jpg");
}

function setup() {
  createCanvas(800, 800);
  image(img1, 0, 0);
}

function draw() {
  if (mouseIsPressed) {
    x.push(mouseX);
    y.push(mouseY);
  }
  strokeWeight(4);
 

  for (var i = 0; i < x.length; i = i + 1) {
     var c
  c = img2.get(x[i], y[i]);
  stroke(c);
    point(x[i], y[i])

    x[i] = x[i] + random(-1, 1);
    y[i] = y[i] + random(-1, 1);
  }
}