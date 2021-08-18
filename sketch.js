var backgroundimg
var snowimg

function preload(){
  backgroundimg = loadImage("snow3.jpg")
  snowimg = loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
 snow = createSprite(354, 130, 50, 50);
 snow.addImage("snow",snowimg)
  snow.scale = 0.1
  snow.rotation += -1
}

function draw() {
  background(backgroundimg); 
  snow.rotation += -1000
  drawSprites();
}