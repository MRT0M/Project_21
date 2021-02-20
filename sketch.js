var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 25);
  wall=createSprite(1500,200,thickness,height/2);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet.shapeColor="white";
  wall.shapeColor="gray";
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  var damage=0.5 * weight * speed * speed / (thickness * thickness * thickness);
  if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   if(damage<10){
   wall.shapeColor="Green";
   }
   if(damage>10){
   wall.shapeColor="Red";
   }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall) {
 bulletRightEdge= lbullet.x + lbullet.width;
 wallLeftEdge = lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
  return true;
 }
 return false;
}
