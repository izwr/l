var s = 'Volume Level';
var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  var volumelevel = mic.getLevel();
  if (volumelevel > 0.5) {
    fill(255, 0, 0);
  } else {
    fill(255);
  }
  ellipse(width / 2, height / 2, map(volumelevel, 0, 1, 0, 300), map(volumelevel, 0, 1, 0, 300));
}
