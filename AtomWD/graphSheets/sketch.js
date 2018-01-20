var x = 50;
var y = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
	background(255);
	drawSheet();
	aplot(1, 2);
}

function draw() {

}

function drawSheet() {
  for (; x <= width; x += 50) {
    fill(0);
    line(x, 0, x, height);
  }
  for (; y <= height; y += 50) {
    fill(0);
    line(0, y, width, y);
  }
	console.log('sheet drawn');
}

function aplot(i, j) {
  var x1 = i * 50;
  var y1 = j * 50;
  fill(0);
  ellipse(x1, y1, 5, 5);
  console.log('ellipse drawn');
}
