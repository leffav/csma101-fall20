function setup() {
 let canvas = createCanvas(400, 400);
  canvas.parent("container");
}

function draw() {
  background(0);
  circles(0);
  circles(frameCount / 2)
}

function circles(y) {
  push();
  noFill();
  strokeWeight(3);
  stroke(255);
  translate (200,200);
  circle(0, y, 20);
  circle(0, y, 40);
  circle(0, y, 60);
  circle(0, y, 80);
  circle(0, y, 100);
  circle(0, y, 120);
  circle(0, y, 140);
  circle(0, y, 160);
  circle(0, y, 180);
  circle(0, y, 200);
  circle(0, y, 220);
  circle(0, y, 240);
  circle(0, y, 260);
  circle(0, y, 280);
  circle(0, y, 300);
    circle(0, y, 320);
    circle(0, y, 340);
    circle(0, y, 360);
    circle(0, y, 380);
    circle(0, y, 400);
  pop();
}