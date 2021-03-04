var movingRect,fixedRect;
var car,wall;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 50, 50);
  car.shapcolor = "red";
  car.velocatyX = 5;

  wall = createSprite(600,200,50,50);
  wall.shapcolor = "blue";
  
  
}

function draw() {
  background("black")
  
  bounceoff(wall,car)
  drawSprites();

}
