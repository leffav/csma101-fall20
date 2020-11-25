function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
}

function draw() {
  background(255);
  textSize(120);
  text('W S', 80, 200);
  fill(0);
  text('O A', 85, 300);
  fill(0);
  stripes(0);
  stripes(frameCount * 2)
}

function stripes(angle) {
  push();
  fill(255);
  noStroke();
  translate(200, 200);
  rotate(radians(angle));
  for (var x = -200; x < 400; x = x + 6)
    for (var y = -200; y < 400; y = y + 6)
      rect(x, y, 2, 400)
  pop();
}