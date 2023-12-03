var umbrella, umbrellaImg
 var idle, idleImg
 var lidle, lidleImg
var backgroundImg
var background2,backgroundImg2


function preload(){
backgroundImg=loadImage("Background.png")
backgroundImg2=loadImage("R.jpg")

idleImg=loadImage("Base.gif")
lidleImg=loadImage("LBase.gif")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
 idle = createSprite(1200,470,160,160)
idle.addImage(idleImg)
idle.scale = 0.7
//idle.debug = true
idle.setCollider("rectangle",0,0,160,idle.height-100)

background2 = createSprite(windowWidth/2,windowHeight/2)
background2.addImage(backgroundImg2)
background2.scale = 1.3
background2.visible = false

  border=createSprite(650, 630, windowWidth+300, 40);
  border2=createSprite(5,420,25,370)
  border2.shapeColor = "brown"
  //border.visible = false
}

function draw() {
  background(backgroundImg); 

  if(keyIsDown(RIGHT_ARROW)){
    idle.x = idle.x +2
  }

 
if(keyIsDown(LEFT_ARROW)){
idle.changeImage(lidle)
idle.x = idle.x -2
  }


if(keyDown('space')&&idle.y>280){
idle.velocityY = -13
}

if(border2.isTouching(idle)){
 background2.visible = true
  idle.x=1200

}

//console.log(idle.y)

idle.velocityY+=0.8
  idle.collide(border)

  drawSprites();
}