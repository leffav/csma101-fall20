var state = "closed";
var doorLeftX = 200;
var doorRightX = 200;

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(220);

  if (state == "closed") {
    fill(155);
    rect(0, 0, doorLeftX, 400);
    rect(doorRightX, 0, 400, 400);

    let r3 = dist(mouseX, mouseY, 450, 100);
    if (mouseIsPressed && r3 < 15) {
      state = "level3";
    }
    let r2 = dist(mouseX, mouseY, 450, 150);
    if (mouseIsPressed && r2 < 15) {
      state = "level2";
    }
    let r1 = dist(mouseX, mouseY, 450, 200);
    if (mouseIsPressed && r1 < 15) {
      state = "level1";
    }
    let rc = dist(mouseX, mouseY, 450, 250);
    if (mouseIsPressed && rc < 15) {
      state = "closing";
      print("closed button");
    }
    let re = dist(mouseX, mouseY, 450, 300);
    if (mouseIsPressed && re < 15) {
      state = "emergency";
    }


  } else if (state == "level3") {
    textSize(50);
    text('level 3', 120, 200);
    fill(155);
    rect(0, 0, doorLeftX, 400);
    rect(doorRightX, 0, 400, 400);
    doorLeftX = doorLeftX - 1;
    doorRightX = doorRightX + 1;
    if (doorLeftX < -100) {
      state = "closed";
      doorLeftX = 200;
      doorRightX = 200;
    }
  } else if (state == "level2") {
    textSize(50);
    text('level 2', 120, 200);
    fill(155);
    rect(0, 0, doorLeftX, 400);
    rect(doorRightX, 0, 400, 400);
    doorLeftX = doorLeftX - 1;
    doorRightX = doorRightX + 1;
    if (doorLeftX < -100) {
      state = "closed";
      doorLeftX = 200;
      doorRightX = 200;
    }
  } else if (state == "level1") {
    textSize(50);
    text('level 1', 120, 200);
    fill(155);
    rect(0, 0, doorLeftX, 400);
    rect(doorRightX, 0, 400, 400);
    doorLeftX = doorLeftX - 1;
    doorRightX = doorRightX + 1;
    if (doorLeftX < -100) {
      state = "closed";
      doorLeftX = 200;
      doorRightX = 200;
    }
  } else if (state == "closing") {
    fill(155);
    rect(0, 0, doorLeftX-200, 400);
    rect(doorRightX+200, 0, 400, 400);
    doorLeftX = doorLeftX + 1;
    doorRightX = doorRightX - 1;
    //if (doorRightX<200) {
      //state = "closed";
    //}
  } 
  else if (state == "emergency") {
    fill(155);
    rect(0, 0, 200, 400);
    rect(200, 0, 400, 400);
    fill(255, 0, 0, 155);
    rect(0, 0, width, height);
    print("emergency");
    let re = dist(mouseX, mouseY, 450, 300);
    if (mouseIsPressed && re < 15) {
      state = "closed";
    }
  }


  fill(0);
  rect(400, 0, 400, 500);
  fill(255);
  ellipse(450, 100, 30, 30);
  ellipse(450, 150, 30, 30);
  ellipse(450, 200, 30, 30);
  fill(155);
  ellipse(450, 250, 30, 30);
  fill("red");
  ellipse(450, 300, 30, 30);
}