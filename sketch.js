var cat, mouse;
var backgroundImg, garden;
var catImg1, catImg2, catImg3;
var mouseImg1, mouseImg2, mouseImg3;

function preload() {
    
    //load the images here
    // catImg1.loadImage("cat1.png");
    // catImg2.loadImage("cat2.png");
    // catImg3.loadImage("cat3.png");
    // mouseImg1.loadImage("mouse1.png");
    // mouseImg2.loadImage("mouse2.png");
    // mouseImg3.loadImage("mouse3.png");

    // backgroundImg.loadImage("garden.png");
}

function setup(){
    
    
    // garden = createSprite(500,400,1000,1000);
    // garden.addImage(backgroundImg);

    mouse = createSprite(222,444,50,50);
    // mouse.addImage(mouseImg1);

    cat = createSprite(100,100,50,50);
    // cat.addImage(catImg1);
    
}

function draw() {

    background("black");
    
      if(collision(cat, mouse)){
          cat.velocityX=0;
      }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
     cat.velocityX = -3;
    //  cat.addImage(catImg2);
    


  }


}

function collision(object1, object2){
    if(object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1. height/2){
            
            return true;
        }
       else{
         return false;
       }
}
