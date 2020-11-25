function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("container");
}

function draw() {
  background(220);
}
function draw(){
  fill(200, 100, random(0,255))
  strokeWeight(4);
  square(mouseX, mouseY, 50);
}