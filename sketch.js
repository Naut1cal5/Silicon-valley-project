var background,backgroundImage;
var blaster, blasterImage; 
var cartoonBoy, cartoonBoyImage;
var asteroid, asteroidImage;
function preload() {
  backgroundImage = loadImage ("Images/earthBackground.jpg")
  blasterImage = loadImage ("Images/blaster.png")
  cartoonBoyImage = loadImage ("Images/cartoonBoy.png")
  asteroidImage = loadImage ("Images/asteroid.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
  background1 = createSprite (width/2,height/2,width,height)
  asteroid = createSprite ()
  cartoonBoy = createSprite ()
  blaster = createSprite ()

}

function draw() {
  background(255,255,255);  
  drawSprites();
}

