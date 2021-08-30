var bg,snow,snowImg
function preload() {
  bg=loadImage("snow2.jpg")
  snowImg=loadImage("flakes.png")
}
function setup() {
  createCanvas(800,400);
  snow=createSprite(400, 200, 50, 50);
  snow.addImage("snowing",snowImg)
  snow.scale=0.09
}

function draw() {
  background(bg);  

  drawSprites();
}