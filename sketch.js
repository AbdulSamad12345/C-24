const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ground_opt;

var ball, ball_opt;

function setup(){

  createCanvas(600,600);
  engine = Engine.create();
  world=engine.world;

  ground1=new Ground();
  box1=new Box(200,200,50,70);
  box2=new Box(220,0,50,70)
 
}

function draw(){

  Engine.update(engine);
   
  background("black");
  fill("yellow");

  ground1.display();
  box1.display();
  box2.display();
  
  
  
  
  
}









