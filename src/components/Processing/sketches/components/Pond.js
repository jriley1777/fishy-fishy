
class Pond {
  constructor(p, w, h) {
    this.p = p;
    this.inc = 80;
    this.w = w + this.inc;
    this.h = h + this.inc;
    this.t = 0;
    this.xAngle = -10.8;
    this.yAngle = 12.56;
    this.lastY1 = null;
    this.lastY2 = null;
    this.grid = {};
    this.updateGrid(this.grid);
  }
  updateGrid = (grid) => {
    for (let x = 0; x <= this.w; x = x + this.inc) {
      grid[x] = {}
      for (let y = 0; y <= this.h; y = y + this.inc) {
        const angle = this.xAngle * (x / this.w) + this.yAngle * (y / this.h);
        const myX = x + 10 * this.p.cos(this.p.PI * this.t + angle);
        const myY = y + 10 * this.p.sin(this.p.PI * this.t + angle);
        grid[x][y] = {
          x: myX,
          y: myY,
          angle
        };
      }
    }
    return grid;
  }
  display = function() {

    this.updateGrid(this.grid);
    Object.keys(this.grid).forEach(x => {
      Object.keys(this.grid[x]).forEach(y => {
        let pos = this.grid[x][y];
        if(x > 0 && y > 0){
          let posX0 = this.grid[x - this.inc][y];
          this.p.strokeWeight(10);
          this.p.stroke(255, 20);
          this.p.beginShape();
          this.p.vertex(pos.x, pos.y);
          this.p.vertex(posX0.x, posX0.y);
          this.p.endShape(this.p.CLOSE);
        }
      })
    })
    this.p.strokeWeight(1);
    this.t = this.t + 0.01; // update time
  };
}

export default Pond;