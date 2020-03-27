import Pond from './components/Pond';
import Fish from './components/Fish'; 

export default function(p) {
  let w, h;
  let pond;
  let fishArray = [];

  p.setup = function() {
    w = window.innerWidth;
    h = window.innerHeight;
    p.createCanvas(w, h);
    p.frameRate(60);
    pond = new Pond(p, w, h);
    for(let i=0;i<10;i++){
      fishArray.push(new Fish(p, w, h))
    }
  };

  p.draw = function() {
    p.clear();
    fishArray.map(x => x.display());
    pond.display();
  };
}
