var b = 25;
var q = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  this.cx = width / 2;
  this.cy = height / 2;
  init_setup();
  drawGraph();
  indexing();
  labeling();
  plot(2, 6);
}

function draw() {

}

function init_setup() {
  background(0);
  fill(255);
  rect(this.cx - 250, this.cy - 250, 500, 500);
}

function drawGraph() {
  for (x = cx - 250; x <= cx + 250; x += 25) {
    line(x, this.cy - 250, x, this.cy + 250);
  }
  for (y = cy - 250; y <= cy + 250; y += 25) {
    line(this.cx - 250, y, this.cx + 250, y);
  }
}

function indexing() {
  fill(255);
  rect(this.cx - 400, this.cy - 50, 100, 25);
  rect(this.cx - 50, this.cy + 290, 100, 25);
  for (a = 1; a <= 21; a++) {
    fill(255);
    textSize(10);
    text(21 - a, this.cx - 280, this.cy - 250 + b - 22);
    b = b + 25;
  }
  for (p = 0; p < 21; p++) {
    fill(255);
    textSize(10);
    text(p, this.cx - 280 + q + 2.5, this.cy + 280);
    q = q + 25;
  }
}

function labeling() {
  fill(255);
  textSize(45);
  text('Plotting', this.cx - 75, this.cy - 275);
  fill(0);
  textSize(32);
  text('Y-axis', this.cx - 395, this.cy - 25.5);
  text('X-axis', this.cx - 45, this.cy + 315)
}

function plot(i, j) {
  x1 = map(i, 0, 20, this.cx - 250, this.cx + 250);
  y1 = map(j, 0, 20, this.cy + 250, this.cy - 250);
  fill(0);
  ellipse(x1, y1, 10, 10);
}
