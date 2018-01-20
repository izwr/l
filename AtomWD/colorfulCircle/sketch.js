var circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  checkIntersection();
  drawCircle();
}

function draw() {

}

function checkIntersection() {
  for (var i = 0; i < 25; i++) {
    var circle = {
      x: random(width),
      y: random(height),
      r: 60
    };
    var overlap = false;
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlap = true;
        break;
      }
    }
    if (!overlap) {
      circles.push(circle);
    }
  }
}

function drawCircle() {
  for (var i = 0; i < circles.length; i++) {
    var c = circles[i];
    noStroke();
    fill(random(255), random(255), random(255));
    ellipse(c.x, c.y, c.r, c.r);
  }
}
