var movingrect, fixedrect;


function setup() {
  createCanvas(800,400);
  movingrect=createSprite(100,100,50,50);
  movingrect.shapeColor="green";
  fixedrect=createSprite(200,200,50,50)
  fixedrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect.debug=true;
}

function draw() {
  background(255,255,255);  
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2&&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();

}