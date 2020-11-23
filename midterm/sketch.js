var size = 50;
//var drop = [];

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(playSynth);
  createCanvas(500, 500);
  background(223, 242, 247);
  monoSynth = new p5.MonoSynth();
}

function draw() {
  if (mouseIsPressed) {
    size++;
    noStroke();
    fill(3, 157, 255)
    ellipse(mouseX, mouseY, size, size);
    playSynth();
    //print(size);
  }
}

function playSynth() {
  userStartAudio();

  let note = random(['Fb3', 'G3']);
  let velocity = 2;
  let time = 0;
  let dur = 1 / 8;

  monoSynth.play(note, velocity, time, dur);
}