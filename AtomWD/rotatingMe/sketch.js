var omega = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var volumelevel = mic.getLevel();
  background(0);
  fill(255);
  translate(20, 20);
  rotate(PI/4);
  rect(20, 20, 52, 52);
  omega = omega + volumelevel;

}
