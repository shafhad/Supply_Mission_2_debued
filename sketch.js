var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,enigne,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxobject , world;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	boxobject= new box(400,635,200,20,PI);
//box2 = new box(200,580,200,20,PI/2);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	


	

	packageBody = Bodies.circle(width/2 , 200 , 5 ,  {restitution: 0.8 ,isStatic:true});
	World.add(world, packageBody);
	console.log(packageBody);
	packageBody.setScale = 0.5;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	


  
}


function draw() {
	Engine.run(engine);
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,width,10);
  
  
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  boxobject.display();
//box2.display();
  
drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic( packageBody, false);
  }
}



