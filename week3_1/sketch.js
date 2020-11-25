function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
}

function draw() {
  background(220);
}

function draw() {
  if (mouseIsPressed) {
    fill(200, 100, random(0, 255))
    if (mouseY < 200) {
    strokeWeight(4);
    } else {
    strokeWeight(2);
    }
    if (mouseX < 200) {
    square(mouseX, mouseY, 50);
    } else {
    square(mouseX, mouseY, 25);
    }
  }
}