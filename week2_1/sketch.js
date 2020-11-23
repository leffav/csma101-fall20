var centerX;
var centerY;
var speed;

function setup() {
  createCanvas(400, 400);
  centerX=200;
  centerY=200;
  speed=2
  background(200,100,0);
}

function draw() {
  //background(220);
  centerX = centerX+speed+0.1
  if (centerX > 450) {
    centerX = -50;
 }
  centerY = centerY+speed
   if (centerY > 450) {
    centerY = -50;
 }
  ellipse (centerX, centerY, 100, 100);
}