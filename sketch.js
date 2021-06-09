var gameState=PLAY;
var bg,astronaut,astronautImg,comet1,cometImg1, comet2,cometImg2,potion,potionImg,mainRocket,mainRocketImg;
var potionS,GameS;

function preload(){
  bgImg=loadImage("Background.gif");
  astronautImg=loadImage("Astronaut.png");
  cometImg1=loadImage("01.png");
  cometImg2=loadImage("02.png");
  potionImg=loadImage("Potion.png");
  mainRocketImg=loadImage("MainRocket.png");
 

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg=createSprite(100,20,400,400);
  bg.addImage(bgImg)
  bg.scale=20;
  bg.velocityX=-5

  astronaut=createSprite(400, 200, 50, 50);
  astronaut.addImage(astronautImg);
  astronaut.scale=0.08;

  //bg.scale=30;

  comet1=createSprite(400,200,60,60);
  comet1.addImage(cometImg1);
  comet1.scale=2;

  comet2=createSprite(400,200,60,60);
  comet2.addImage(cometImg2);
  comet2.scale=2;

  potion=createSprite(400,600,60,60);
  potion.addImage(potionImg);
  potion.scale=0.3;

  mainRocket=createSprite(110,600,60,60);
  mainRocket.addImage(mainRocketImg);

  //bg.scale=5;
  
  
}

function draw() {
  background(0)
  //background(bg);
  
  //image(bg,50,500);
  //bg.position(400,400)
  drawSprites();
}