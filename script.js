
const c = 30; // speed of light
const G = 3.54; // gravitational constant
const dt = 0.1;

let m87; // black hole of M87 Galaxy

const particles = [];
let start, end;

function setup() {
  createCanvas(windowWidth, windowHeight);
  m87 = new Blackhole(width / 2, height / 2, 6400);

  start = height / 2;
  end = height / 2 - m87.rs * 2.6;

  for (let y = 0; y < start; y += 10) {
    particles.push(new Photon(width - 20, y));
  }
}

function draw() {
  background(255);

  stroke(0);
  strokeWeight(1);
  line(0, start, width, start);
  line(0, end, width, end);

  for (let p of particles) {
    m87.pull(p);
    p.update();
    p.show();
  }
  m87.show();
}
