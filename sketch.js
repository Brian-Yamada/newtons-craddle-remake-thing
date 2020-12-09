const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;


  ball = new Ball(500, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });

  ball1 = new Ball(575, 200, 80, 80);
  rope1 = new Rope(ball1.body, { x: 575, y: 50 });

  ball2 = new Ball(650, 200, 80, 80);
  rope2 = new Rope(ball2.body, { x: 650, y: 50 });

  ball3 = new Ball(350, 200, 80, 80);
  rope3 = new Rope(ball3.body, { x: 350, y: 50 });

  ball4 = new Ball(425, 200, 80, 80);
  rope4 = new Rope(ball4.body, { x: 425, y: 50 });
}

function draw() {
  background(180);
  Engine.update(engine);

 

  ball.display();
  rope.display();
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();



}


function mouseDragged() {
 Matter.Body.setPosition(ball2.body, { x: mouseX, y: mouseY });
}


