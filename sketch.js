
var bgImg, cat, catImg1,catImg2,catImg3;
var mouseImg1, mouseImg2,mouseImg3;

function preload() {
    //loading the images
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //creating sprites
    cat = createSprite(870,600);
    cat.addAnimation("catGoing",catImg3);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouseTeasing",mouseImg1);
    mouse.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if (cat.x-mouse.x < (cat.width-mouse.width)/2) {
        cat.velocityX = 0;
        cat.addAnimation("catGoing",catImg3);
        cat.x= 100;
        cat.scale = 0.2;
        cat.velocityX = 0;
        cat.changeAnimation("catGoing",catImg3);

        mouse.addAnimation(mouseImg2);
        mouse.scale = 0.1;
        mouse.changeAnimation("mouse4.png",mouseImg3);
    }
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catMoving",catImg2);
        cat.changeAnimation("catMoving");
    
        mouse.addAnimation("mouseTeasing",mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25; 
    }
}
