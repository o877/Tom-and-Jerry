var tom, jerry;
var tomImg1, tomImg2, tomImg3, jerryImg1, jerryImg2, jerryImg3, backgroundImg;

function preload() {
    //load the images here
    backgroundImg = loadImage("garden.png");
    tomImg1 = loadAnimation("cat1.png");
    tomImg2 = loadAnimation("cat2.png","cat3.png");
    tomImg3 = loadAnimation("cat4.png");

    jerryImg1 = loadAnimation("mouse1.png");
    jerryImg2 = loadAnimation("mouse2.png","mouse3.png");
    jerryImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    background = createSprite(500,400);
    background.addImage(backgroundImg);

    tom = createSprite(850,600,50,50);
    tom.addAnimation("cat_sitting",tomImg1);
    tom.addAnimation("cat_running",tomImg2);
    tom.addAnimation("cat_down",tomImg3);
 
    jerry = createSprite(100,600,50,50);
    jerry.addAnimation("mouse_standing",jerryImg1);
    jerry.addAnimation("mouse_teasing",jerryImg2);
    jerry.addAnimation("mouse_down",jerryImg3);
}

function draw() {
        //Write condition here to evalute if tom and jerry collide

        keyPressed();

        tom.scale=0.2;
        jerry.scale=0.1;

        if (keyDown("LEFT_ARROW")) {
            jerry.changeAnimation("mouse_teasing",jerryImg2);
            
            tom.velocityX=-2;
            tom.changeAnimation("cat_running",tomImg2);
        }

        if (tom.x - jerry.x <(tom.width - jerry.width)/2) {
            tom.changeAnimation("cat_down",tomImg3);
            tom.velocityX=0;
       
            jerry.changeAnimation("mouse_down",jerryImg3);
        }


    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
 
}
