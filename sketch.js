const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var bg,tower,towerImg,canon;
var angle=20;

function preload() {
 bg=loadImage("./assets/background.gif");
 towerImg=loadImage("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  canon= new Cannon(50,40,240,200,angle)
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 tower=Bodies.rectangle(80,210,60,310,{isStatic:true})
 World.add(world,{ground,tower});
 
}

function draw() {
  background(0)
  image(bg,0,0,1200,600);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 image(towerImg,tower.position.x,tower.position.y,160,310) 
  canon.display() 
}
