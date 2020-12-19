
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,survivaltime=0
var score,ground,invisibleGround;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(500,500)
  
  
  score = 0
  
  monkey=createSprite(100,370,50,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(250,405,500,10);
  ground.x=ground.width/2;
  ground.velocityX = -4;
 
  invisibleGround=createSprite(250,405,500,10);
  invisibleGround.visible=false 
}


function draw() {
  
  background('cyan')
  
  stroke("red")
  textSize(20)
  fill("red")
  text("score: " + score,300,50)
  score = score + Math.round(frameCount/60);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survivaltime: " + survivaltime,100,50)
  
  
  
  
  
  
  
  
  
  
  
  if (ground.x < 400){
      ground.x = ground.width/2;
      }
  
  if(keyDown("space")&& monkey.y >= 100) {
      monkey.velocityY = -13
      }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround);

  
  spawnBanana();
  spawnobstacle();
  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
   if (frameCount % 60 === 0) {
     banana = createSprite(300,400,40,10);
    banana.y = Math.round(random(120,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 134;
         
   }
} 

function spawnobstacle() {
  //write code here to spawn the clouds
 if (frameCount % 230 === 0){
   var obstacle = createSprite(400,385,10,40);
   obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    
     //assign lifetime to the variable
    obstacle.lifetime = 134;
         
   }
} 



