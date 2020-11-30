var centerX = 200;
var centerY = 200;
var angle = 0;
var size = 1;
var colorR = 0
var colorG = 0
var colorB = 0

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
  //background(140, 180, 255);
}

function draw() {
  background(140, 180, 255);
  angle = angle + radians (45/10);
  size = size+sin(angle)*16;
  if (size > 400) {
    colorR = colorR + 1
    colorG = colorG + 2
    colorB = colorB + 3};
  square(175, 175, 0);
  fill (colorR, colorG, colorB);
  stroke (180, 255, 140);
  square (centerX-size*0.5, centerY-size*0.5, size);
  print (colorR + " " + colorG + " " + colorB)
}
