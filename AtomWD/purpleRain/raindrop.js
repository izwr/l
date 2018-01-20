class rainDrop {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.yspeed = random(4, 10);
    this.gravity = 0.5;
  }

  show() {
    noStroke();
    fill(153, 25, 120);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + this.gravity;
    if (this.y > height) {
      this.y = random(-height + 100, -50);
      this.yspeed = random(4, 10);
    }
  }
}
