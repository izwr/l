var vertices = [];
var v1;
var v2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(51);
  primsalgo();
}

function primsalgo() {
  var reached = [];
  var unreached = [];
  for (var i = 0; i < vertices.length; i++) {
    unreached.push(vertices[i]);
  }
  reached.push(unreached[0]);
  unreached.splice(0, 1);
  while (unreached.length > 0) {
    var record = 10000;
    var rIndex;
    var uIndex;
    for (var j = 0; j < reached.length; j++) {
      for (var k = 0; k < unreached.length; k++) {
        v1 = reached[j];
        v2 = unreached[k];
        var d = dist(v2.x, v2.y, v1.x, v1.y);
        if (d < record) {
          record = d;
          rIndex = j;
          uIndex = k;
        }
      }
    }
    stroke(255);
    strokeWeight(2);
    line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
  }
  for (var l = 0; l < vertices.length; l++) {
    noStroke();
    fill(255);
    ellipse(vertices[l].x, vertices[l].y, 30, 30);
  }
}

function mousePressed() {
  var v = createVector(mouseX, mouseY);
  vertices.push(v);
}
