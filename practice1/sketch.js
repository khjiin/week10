//module aliases
let Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

let engine;
let world;
let particles = [];
let plinkos = [];
let bounds = [];
let cols = 11;
let rows = 10;

function setup() {
  createCanvas(600, 700);
  engine = Engine.create();
  world = engine.world;
  world.gravity.y = 2;
  newParticle();
  let spacing = width / cols;
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols + 2; i++) {
      let x = i * spacing;
      if (j % 2 == 0) {
        x += spacing / 2;
      }
      let y = spacing + j * spacing;
      let p = new Plinko(x, y, 4);
      plinkos.push(p);
    }
  }
  let b = new Boundary(width / 2, height + 50, width, 100);
  bounds.push(b);

  for (let i = 0; i < cols + 1; i++) {
    let x = i * spacing;
    let h = 100;
    let w = 10;
    let y = height - h / 2;
    let b = new Boundary(x, y, w, h);
    bounds.push(b);
  }
}

function newParticle() {
  let p = new Particle(300, 0, 10);
  particles.push(p);
}

function draw() {
  if (frameCount % 60 == 0) {
    newParticle();
  }

  background(51);
  Engine.update(engine);
  for (var i = 0; i < particles.length; i++) {
    particles[i].show();
    if (particles[i].isOffScreen()) {
      World.remove(world, particles[i].body);
      particles.splice(i, 1);
      i--;
    }
  }
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].show();
  }
  for (var i = 0; i < bounds.length; i++) {
    bounds[i].show();
  }
}
