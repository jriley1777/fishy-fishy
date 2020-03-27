
class Pond {
  constructor(p, w, h) {
    this.p = p;
    this.w = w;
    this.h = h;
    this.t = 0;
    this.xAngle = -10.8;
    this.yAngle = 12.56;
  }
  display = function() {
    for (let x = 0; x <= this.w; x = x + 30) {
      for (let y = 0; y <= this.h; y = y + 30) {
        // starting point of each circle depends on mouse position
        // and also varies based on the particle's location
        const angle = this.xAngle * (x / this.w) + this.yAngle * (y / this.h);

        // each particle moves in a circle
        const myX = x + 10 * this.p.cos(this.p.PI * this.t + angle);
        const myY = y + 10 * this.p.sin(this.p.PI * this.t + angle);
        this.p.fill(255, 30);
        this.p.rect(myX, myY, 30, 30); // draw particle
      }
    }

    this.t = this.t + 0.01; // update time
  };
}

export default Pond;