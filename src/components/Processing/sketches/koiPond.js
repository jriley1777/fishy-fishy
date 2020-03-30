import Pond from './components/Pond';
import Fish from './components/Fish';
import p5 from 'p5';
import "p5/lib/addons/p5.sound";
import { getRandomWords } from '../../../utils/wordUtils';

export default function(p) {
  p.props = {};
  let w, h;
  let pond;
  let words = [];
  let fishArray = [];
  let typing = [];
  let synth;
  let timerStarted;
  let timer;
  let start;
  let numWords = 15;

  p.setup = function() {
    w = window.innerWidth;
    h = window.innerHeight;
    p.createCanvas(w, h);
    p.frameRate(60);
    pond = new Pond(p, w, h);
    words = getRandomWords(numWords);
    for(let i=0;i<numWords;i++){
      fishArray.push(new Fish(p, w, h, words[i]))
    }
    timer = 0;
    start = 0;
    synth = new p5.MonoSynth();
    timerStarted = false;
  };

  p.draw = function() {
    if (p.props.shouldReset){
      p.props.setShouldReset(false);
      p.props.setGameOver(false);
      p.setup();
    }
    if (p.props.activeTerm && !timerStarted) {
      timerStarted = true;
      start = p.millis();
    }
    if (p.props.activeTerm !== typing[typing.length - 1]) {
      typing.push(p.props.activeTerm);
    }
    p.clear();
    fishArray.forEach(x => x.display());
    pond.display();
    typing.forEach((x, i) => {
      p.fill(0, i*50);
      p.text(x, 200, 10 + i * 20);
    })
    p.fill(0);
    if(typing.length > 5) {
      typing.shift();
    }
    fishArray.forEach(x => {
      if(x.word === p.props.activeTerm){
        x.isComplete = true;
        p.props.clearActiveTerm();
        let note = p.random(["Fb4", "G4"]);
        synth.play(note, 0.1, 0, 1);
      }
      if(x.word.startsWith(p.props.activeTerm)){
        x.substring = p.props.activeTerm
      } else {
        x.substring = ''
      }
    })
    fishArray = fishArray.filter(x => !x.isComplete);
    if(fishArray.length === 0){
      p.props.setGameOver(true);
    } else {
      if(timerStarted){
        timer = Math.floor((p.millis() - start) / 10) / 100;
      }
    }
    p.text(timer, 30, 50);
    p.text(fishArray.length + ' remaining', w-400, 50)
  };
}
