
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var stone;
var slingshot;
var boyimage;
var mangoimage;
var treeimage;
var stoneimage;


function preload()
{boyimage=loadImage("images/boy.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,700,800,15);
tree = new Tree(620,500,400,400);
mango1 = new Mango(600,500);
mango2= new Mango(500,500);
mango3= new Mango(700,450);
mango4= new Mango(700,350);
mango5= new Mango(500,400);
mango6= new Mango(600,420);
stone= new Stone(100,500,30,30);
slingshot= new Slingshot(stone.body,{x:110,y:610})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  slingshot.display();
image(boyimage,160,650,200,200)
detectcollision(stone,mango1)
detectcollision(stone,mango2)
detectcollision(stone,mango3)
detectcollision(stone,mango4)
detectcollision(stone,mango5)
detectcollision(stone,mango6)
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}
function detectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.x,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false)
}
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:100,y:500})
    slingshot.attach(stone.body);
  }
}



