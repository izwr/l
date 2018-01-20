function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 10);
}

function draw() {
  var r = random(30, 50);
  var bubble = 0;

  fill(random(255), random(255), random(255), 50);
  noStroke();
  ellipse(random(width), random(height), r, r);
  bubble += 1;
  if (bubble < 100) {
    frameRate(5);
  } else {
    frameRate(2);
  }
}
