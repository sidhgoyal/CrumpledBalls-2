
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var side3;

function preload()
{
   
}

function setup() {
	createCanvas(1200,500);

   
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


   Engine.run(engine);
   
   

   ball = new Paper(75, 420);
   
   ground = new Ground(600,450,1200,20);
   //side1=new Dustbin(950,310,20,100);
	//side2=new Dustbin(1050,310,20,100);
   side3=new Dustbin(1000,450,300,213,20);
}


function draw() {
   rectMode(CENTER);
   background(180);
   
   
   
   ball.display();
   ground.display();
   //side1.display();
   //side2.display();
   side3.display();
   
   
}

function keyPressed(){ 
	if(keyCode === UP_ARROW){
		 Body.applyForce(ball.body,ball.body.position,{x:410,y:-480}); 
      } 
      
	}

   