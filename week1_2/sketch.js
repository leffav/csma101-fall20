function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
}

function draw() {
  background(0,0,255);
}
function draw(){
  fill(random(50, 200));
  triangle(20, 20, 20, 380, mouseX, mouseY);
}