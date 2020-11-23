function setup() {
  createCanvas(400, 400);
}

function draw() {
  stroke (255,0,0)
  fill(255, 204, 0);
  ellipse(mouseX, mouseY, random(10, 50));
}