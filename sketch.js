var balloon


function preload(){
  backImage = loadImage("download.png")
  balloonImage = loadImage("HotAirBalloon.png")

}
function setup() {
  createCanvas(500,500);
  database = firebase.database()
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImage)
}

function draw() {
  background(255,255,255);  
  background.addImage(backImage)
  if(keyDown(LEFT_ARROW)){
   balloon.x = balloon.x-10;
}
else if(keyDown(RIGHT_ARROW)){
   balloon.x = balloon.x+10;
}
else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
}
else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10
}
  drawSprites();
}