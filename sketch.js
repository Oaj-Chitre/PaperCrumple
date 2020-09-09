
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(100,390,20);

	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();

  drawSprites();
 
}



