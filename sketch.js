
var pg, pgImage
var  rballoon, rballoonImage
var  bballoon,bballoonImage
var  gballoon, gballoonImage
var  pballoon, pballoonImage
var  bow, bowImage
var  arrow, arrowImage

function preload(){
 //load your images here 
 
  pgImage= loadImage("background0.png");
  rballoonImage = loadImage("red_balloon0.png");
  bballoonImage = loadImage("blue_balloon0.png");
  gballoonImage = loadImage ("green_balloon0.png");
  pballoonImage = loadImage ("pink_balloon0.png");
  bowImage = loadImage ("bow0.png");
  arrowImage = loadImage ("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
pg = createSprite(0,0,600,600);
pg.addImage(pgImage);
pg.scale = 2.5
pg.velocityX = -3
  
  
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
  
  for(var i=60;i<390;i=i+60){
  rballoon = createSprite(50, i, 1, 1);
  rballoon.addImage(rballoonImage);
  rballoon.scale = 0.1
  }
  
  
 for(var i=110;i<390;i=i+60){
  bballoon = createSprite(100, i, 10, 10);
  bballoon.addImage(bballoonImage);
  bballoon.scale = 0.1;
}

  for(var i=180;i<390;i=i+70){
  gballoon = createSprite(150, i, 60, 60);
  gballoon.addImage(gballoonImage);
  gballoon.scale = 0.1;
}

 for(var i=230;i<300;i=i+60){
  pballoon = createSprite(200, i, 200, 200);
  pballoon.addImage(pballoonImage);
  pballoon.scale = 1.2;
  
}

} 
function draw() {
  
  if(pg.x<0){
    pg.x = 300
  }
   bow.y = World.mouseY
  

    
    if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
   drawSprites();
 }
  


function createArrow(){
   arrow= createSprite(360, 100, 5, 10);
   arrow.velocityX = -6
   arrow.scale = 0.3
}

