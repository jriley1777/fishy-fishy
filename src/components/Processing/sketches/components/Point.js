class Point {
  constructor(p, x, y, toggle = 0) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.toggle = toggle;
  }
  display = function() {
    this.p.ellipse(this.x, this.y, 100, 100);
  };
};

export default Point;