const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var ball1;

function preload() {}

function setup() {
  createCanvas(1600, 700);

  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650);

  Engine.run(engine);
  ball1 = new Ball(200, 300, 10, 20);
}

function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  ball1.display();

  if (keyDown("UP_ARROW")) {
    Matter.Body.applyForce(paperObj.body.position, { x: 100, y: -100 });
  }
}
