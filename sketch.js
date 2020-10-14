var helicopterIMG, helicopterSprite, packageSprite,packageIMG,boxSprite,boxIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	boxIMG=loadImage("box.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxSprite=createSprite(400,610,5,5)
	boxSprite.addImage(boxIMG)
	boxSprite.scale=0.06

	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.001, isStatic:false});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  keyPressed();
 
   drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 

	
	
    // Look at the hints in the document and understand how to make the package body fall only on
    
  }
}



