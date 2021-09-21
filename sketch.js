var snow=[]
function preload(){
 snow2=loadImage("snow2.jpg")
 snow3=loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  snow1=createSprite(400, 200, 50, 50);
  snow1.addImage(snow2)
  snow1.scale=2
}

function draw() {
  background(255,255,255); 

  drawSprites();
}
function showdrop(){
  snow3=snow3+snow3.velocityY
}





