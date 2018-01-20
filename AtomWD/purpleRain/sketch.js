let drop = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i <= 200; i += 1) {
    var x = random(width);
    var y = random(-height + 100, -50);
    var s = random(0.5, 1);
    var w = s * 6;
    var h = s * 50;
    drop[i] = new rainDrop(x, y, w, h);
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drop.length; i++) {
    drop[i].show();
    drop[i].move();
  }
}
