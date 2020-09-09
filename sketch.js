
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,390,40);
	
	ground = new Ground(400,690,800,15);

	box1 = new Box(600,655,100,10);
	box2 = new Box(650,625,10,70);
	box3 = new Box(550,625,10,70);

	Engine.run(engine);
	
	
}


function draw() {
  background(0);
  Engine.update(engine);


  ball.display();

  ground.display();

  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body, ball.body.position,{x:240,y:-200});
	}
}



