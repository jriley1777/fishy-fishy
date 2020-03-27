import Point from './Point';

class Fish {
  constructor(p, w, h) {
    this.p = p;
    this.w = w;
    this.h = h;
    this.baseCol = null;
    this.adjCol = null;
    this.adjCol2 = null;
    this.arr = [];
    this.maxArray = 20;
    this.toggle = 5;
    this.startX = p.random(this.w);
    this.startY = p.random(this.h);
    for (let i = 0; i < this.maxArray; i++) {
      this.arr.push(new Point(this.p, this.startX, this.startY));
    }
    this.leadPoint = new Point(this.p, this.startX, this.startY);
  }
  display = function() {
    for (let i = 0; i < this.arr.length; i++) {
      let tog = (this.arr[i].toggle * (this.maxArray - i)) / this.maxArray;
      if (
        i > 0 &&
        this.p.abs(this.arr[i].x - this.arr[i - 1].x) < 10 &&
        this.p.abs(this.arr[i].y - this.arr[i - 1].y) < 10
      ) {
        this.adjCol = this.p.map(
          ((i + 1) / this.arr.length) * this.arr[i].x,
          0,
          this.w / 2,
          0,
          255
        );
        this.adjCol2 = this.p.map(
          ((i + 1) / this.arr.length) * this.arr[i].y,
          0,
          this.h / 2,
          0,
          255
        );
        this.baseCol = this.p.color(this.adjCol, 0, this.adjCol2);
        this.baseCol.setAlpha(100);
        this.p.strokeWeight(i);
        this.p.stroke(this.baseCol);
        this.p.line(
          this.arr[i].x,
          this.arr[i].y + tog,
          this.arr[i - 1].x,
          this.arr[i - 1].y
        );
      }
    }
    this.p.noStroke();

    this.p.fill(0);

    if (this.leadPoint.x > this.w) {
      this.leadPoint.x = 0;
    } else if (this.leadPoint.x < 0) {
      this.leadPoint.x = this.w;
    } else if (this.leadPoint.y > this.h) {
      this.leadPoint.y = 0;
    } else if (this.leadPoint.y < 0) {
      this.leadPoint.y = this.h;
    }

    if (this.arr.length > this.maxArray) {
      this.arr.shift();
    } else {
      this.leadPoint.x += this.p.random(-1,-10)//(this.p.random(this.p.mouseX) - this.leadPoint.x) / 80;
      this.leadPoint.y += this.p.random(1,3)//(this.p.mouseY - this.leadPoint.y) / 80;
      this.arr.push(
        new Point(
          this.p,
          this.leadPoint.x,
          this.leadPoint.y,
          this.p.random(this.toggle)
        )
      );
      this.toggle = -this.toggle;
    }
  };
}

export default Fish;