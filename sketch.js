var leftArrow,leftArrowImg;
var rightArrow,rightArrowImg;
var shooter,shooterImg;
var dice,diceImg,diceGroup;
var restart,restartImg;
var bullet,bulletImg,bulletGroup;
var bullets = 25;
var score = 0;

function preload(){
 leftArrowImg = loadImage("left_arrow.png");
 rightArrowImg = loadImage("right_arrow.png");
 shooterImg = loadImage("shooter.png");
 diceImg = loadImage("sprite_0.png");
 restartImg = loadImage("restart.png");
 bulletImg = loadImage("new bullet.jpg"); 
 
}

function setup(){
createCanvas(500,500);
 
 leftArrow = createSprite(100,480,50,50);
 leftArrow.addImage(leftArrowImg);
 leftArrow.scale = 0.1;

 rightArrow = createSprite(400,480,50,50);
 rightArrow.addImage(rightArrowImg);
 rightArrow.scale = 0.1;

 shooter = createSprite(250,450,20,20);
 shooter.addImage(shooterImg);
 shooter.scale = 0.1;

 restart = createSprite(10,20,50,50);
 restart.addImage(restartImg);
 restart.scale = 0.03;

 bulletGroup = new Group();
 diceGroup = new Group();
}


function draw() {
  background('Blue');
  
  shooter.x = World.mouseX;

  if(keyDown("space")){
    bullets = bullets - 1;
    spawnBullets();
  }
  
  if(bulletGroup.isTouching(diceGroup)){
    diceGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 2;
  }
  spawnDice();
  
  text("TAP TO SHOOT",200,50);
  text("Score:"+score,400,50);

  drawSprites();
 
}

function spawnBullets(){
  if(frameCount % 60 == 0){
  var bullet = createSprite(230,450,20,20);
  bullet.velocityY = -5;
  bullet.addImage(bulletImg);
  bulletGroup.add(bullet);
  bullet.scale = 0.05;
  bullet.x = shooter.x;
 }
}

function spawnDice(){
  if(frameCount % 30 == 0){
  dice = createSprite(random(100,500),random(50,1100),20,20);
  dice.addImage(diceImg);
  diceGroup.add(dice);
  dice.scale = 0.5;
  dice.velocityY = 10;
 }
}