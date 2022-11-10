let Engine = Matter.Engine,
  Bodies = Matter.Bodies,
  World = Matter.World,
  Composite = Matter.Composite;

let engine;

let boxes = [];
let world;
let ground;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  // ground = new Rect(400, 610, 810, 60, "#C0AAA9", {
  //   isStatic: true,
  // });
  world - engine.world;
  box = Bodies.rectangle(400, 610, 810, 60);
  Composite.add(engine.world, ground.bodies);
}

function mousePressed() {}

function draw() {}
