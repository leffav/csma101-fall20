let table;
let row = 0;
let y = 0;
let cr = 255;
let cb = 0;
let cg = 0;

function preload() {
  table = loadTable("comm1.csv", "csv", "header");
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("container");
  background(0);
  print(table.getRowCount());
}

function draw() {
  //background(0);

  fill(100);
  text('3:00 am', 75, 20);
  text('6:00 am', 150, 20);
  text('9:00 am', 225, 20);
  text('12:00 pm', 300, 20);
  text('3:00 pm', 375, 20);
  text('6:00 pm', 450, 20);
  text('9:00 pm', 525, 20);
  text('12:00 am', 600, 20);
  text('Sa', 25, 50);
  text('Su', 25, 100);
  text('Mo', 25, 150);
  text('Tu', 25, 200);
  text('Wd', 25, 250);
  text('Th', 25, 300);
  text('Fr', 25, 350);
  text('Sa', 25, 400);
  fill(244, 184, 17);
  text('teaching', 25, 450);
  fill(255, 145, 43);
  text('learning', 25, 475);
  fill(222, 145, 43);
  text('working', 25, 500);
  fill(43, 194, 121);
  text('socializing', 25, 525);
  fill(76, 144, 186);
  text('entertaining', 25, 550);

  noStroke();
  let x = table.getNum(row, "Start");
  let yDay = table.getNum(row, "Day");
  let w = table.getNum(row, "End");
  let h = table.getNum(row, "Participants");
  let r = table.getString(row, "Mode");
  let c = table.getString(row, "Content");


  if (yDay == 311020) {
    y = 50;
  } else if (yDay == 11120) {
    y = 100;
  } else if (yDay == 21120) {
    y = 150;
  } else if (yDay == 31120) {
    y = 200;
  } else if (yDay == 41120) {
    y = 250;
  } else if (yDay == 51120) {
    y = 300;
  } else if (yDay == 61120) {
    y = 350;
  } else if (yDay == 71120) {
    y = 400;
  }


  if ((w / 4) - (x / 4) < 1) {
    w = w + 20;
    y = y - 2;
  }

  if (c == "entertain") {
    cr = 76;
    cg = 144;
    cb = 186;
  } else if (c == "social") {
    cr = 43;
    cg = 194;
    cb = 121;
  } else if (c == "teach") {
    cr = 244;
    cg = 184;
    cb = 17;
  } else if (c == "work") {
    cr = 222;
    cg = 102;
    cb = 62;
  } else if (c == "learn") {
    cr = 255;
    cg = 145;
    cb = 43;
  }

  fill(cr, cg, cb);
  rect(x / 4, y, (w / 4) - (x / 4), h, 5);

  print(yDay, x, y, w, h);

  row++;
  if (row == table.getRowCount()) {
    //row = 0;
    noLoop();
  }
}