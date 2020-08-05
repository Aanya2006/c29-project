const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(500, 400, 450, 10);
  block1 = new Block(400, 170, 30, 70);
  block2 = new Block(455, 170, 30, 70);
  block3 = new Block(510, 170, 30, 70);
  block4 = new Block(565, 170, 30, 70);
  block5 = new Block(620, 170, 30, 70);
  block6 = new Block(455, 100, 30, 70);
  block7 = new Block(510, 100, 30, 70);
  block8 = new Block(565, 100, 30, 70);
  block9 = new Block(510,20, 30, 70);

  polygon=Bodies.circle(30,200,20);
  World.add(world,polygon);

  slingShot=new SlingShot(polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ellipseMode(RADIUS);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ellipse(polygon.position.x,polygon.position.y,30,30);
  slingShot.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}
