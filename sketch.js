
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	ellipseMode(RADIUS);
    var ball_options={
    		restitution:0.2,
    		friction:0,
			density:1.2

    	}
	//Create the Bodies Here.
    ball=Bodies.circle(200,100,17,ball_options)
	World.add(world, ball)
	ground5=new Ground(500,590,1000,20,"green");
	leftbin=new Ground(600, 545, 20, 75,"grey");
	rightbin=new Ground(750, 545, 20, 75,"grey");

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);
  noStroke();
  fill("white");
  ellipse(ball.position.x,ball.position.y,17);
  leftbin.display();
  rightbin.display();
  ground5.display();
  //if(keyDown(UP_ARROW)){
	//Body.applyForce(ball,{x: 0, y:0}, {x:2, y:-1})
//}
if(ball.position.x<0 || ball.position.x>1000) {
Body.setPosition(ball, {x: 200, y:570});
} 

 
}

function keyPressed() {
if(keyCode===UP_ARROW){
	Body.applyForce(ball,{x: 0, y:0}, {x:2.5, y:-1.5})
}
}



