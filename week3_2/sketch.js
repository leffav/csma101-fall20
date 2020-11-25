function setup() {
 let canvas = createCanvas(400, 400);
  canvas.parent("container");
}

function draw() {
  if (mouseIsPressed) {
    stroke(255, 0, 0)
    if (mouseX < 200) {
      fill(255, 204, 0);
    } else {
      fill(0, 204, 255);
    }
    ellipse(mouseX, mouseY, random(10, 50));
  }
}