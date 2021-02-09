var line1,line2,line3,ball1, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	line1 = new Line(1000,700,200,20)
	line2 = new Line(900,675,20,60)
	line3 = new Line(1100,675,20,60)
	ball1 = new Ball(50,710,50)
    ground = new Ground(600,720,1200,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


line1.display()
line2.display()
line3.display()
ball1.display()
ground.display()
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body, ball1.body.position,{x:100,y:-100})
	}
	
}



