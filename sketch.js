var iss, issImage;
var spacecraft, spacecraftImage;
var spacecraftLeftImage, spacecraftRightImage, spacecraftDownImage;
var dockPoint, wall1, wall2, wall3, wall4;

var hasDocked = false;

var backgroundImage;

function preload(){

  issImage = loadImage("iss.png");
  spacecraftImage = loadAnimation("spacecraft1.png");
  spacecraftLeftImage = loadAnimation("spacecraft4.png");
  spacecraftRightImage = loadAnimation("spacecraft3.png");
  spacecraftDownImage = loadAnimation("spacecraft2.png");
  backgroundImage = loadImage("spacebg.jpg");
}

function setup() {
  createCanvas(800,500);

  iss = createSprite(400,175,20,20);
  iss.addImage("iss", issImage);
  iss.scale = 0.63;

  spacecraft = createSprite(random(50,750),random(250,470),20,20);
  spacecraft.addAnimation("spacecraft1", spacecraftImage);
  spacecraft.addAnimation("spacecraft4", spacecraftLeftImage);
  spacecraft.addAnimation("spacecraft3", spacecraftRightImage);
  spacecraft.addAnimation("spacecraft2", spacecraftDownImage);
  spacecraft.scale = 0.25;

  dockPoint = createSprite(355,195,20,20);
  dockPoint.visible = false;

  wall1 = createSprite(5,250,10,500);
  wall1.visible = false;

  wall2 = createSprite(795,250,10,500);
  wall2.visible = false;

  wall3 = createSprite(400,5,800,10);
  wall3.visible = false;
  
  wall4 = createSprite(400,495,800,20);
  wall4.visible = false;
}

function draw() {
  background(backgroundImage);  

  if(!hasDocked){

    spacecraft.velocityX = 0;
    spacecraft.velocityY = 0;

    if(keyDown(LEFT_ARROW)){
      spacecraft.changeAnimation("spacecraft4", spacecraftLeftImage);
      spacecraft.velocityX = -5;
    }
    if(keyDown(RIGHT_ARROW)){
      spacecraft.changeAnimation("spacecraft3", spacecraftRightImage);
      spacecraft.velocityX = 5;
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.changeAnimation("spacecraft2", spacecraftDownImage);
      spacecraft.velocityY = 2;
    }
    if(keyDown(UP_ARROW)){
      spacecraft.velocityY = -5;
    }

    spacecraft.collide(wall1);
    spacecraft.collide(wall2);
    spacecraft.collide(wall3);
    spacecraft.collide(wall4);

  }

  if(spacecraft.collide(dockPoint)){
    hasDocked = true;
    text("Docking Successful!",400,300);
  }

  drawSprites();
}
