var y = 0;
let bubble = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i <= 100; i++) {
    let x = random(width);
    let y = random(-600,-50);
    let r = random(30, 50);
    bubble[i] = new snowBall(x, y, r);

  }
}

function draw() {
  drawEnv();

  for (let i = 0; i <= 100; i++) {
    bubble[i].show();
    bubble[i].move();
  }
}

function drawEnv() {
  // sky
  background(0, 0, 25);
  fill(0, 50, 0);
  noStroke();
  // green Ground
  rect(0, height - 150, width, 150);
  //christmas tree//
  for (let x = 0; x <= width; x += 400) {
    fill(0, 25, 0);
    noStroke();
    triangle(205 + x, height - 225, 250 + x, height - 300, 295 + x, height - 225);
    triangle(200 + x, height - 200, 250 + x, height - 250, 300 + x, height - 200);
    fill(37, 14, 3);
    rect(240 + x, height - 200, 20, 50);
  }
}
class snowBall {

  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speedY = random(2, 4);
  }

  show() {
    fill(255, 255, 255, 80);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  }

  move() {
    if(this.y>height){
      this.y = random(-200,-100);
    }
    this.y = this.y + this.speedY;
  }
}
