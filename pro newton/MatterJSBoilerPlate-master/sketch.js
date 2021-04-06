
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new roof(350,100,300,30);

	bob = new BOB(250,300,25);
	bob1 = new BOB(300,300,25);
	bob2 = new BOB(350,300,25);
	bob3 = new BOB(400,300,25);

	rope1 = new rope(bob.body,ground.body,-100,0);

	rope2 = new rope(bob1.body,ground.body,-50,0);

	rope3 = new rope(bob2.body,ground.body,0,0);

	rope4 = new rope(bob3.body,ground.body,+50,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  ground.display()

  bob.display()
  bob1.display()
  bob2.display()
  bob3.display()

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
	Matter.Body.applyForce(bob.body,bob.body.position,{x:-50,y:-45});
	}
	
	}


	




