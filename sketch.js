//Create variables here
var dogImg,dogImgHappy;
var dog, happyDog, foodS, foodStock,db;

function preload()
{
  //load images here
  db=firebase.database();
  foodStock=db.ref('food');
  foodStock.on("value",readStock);
  dogImg = loadImage("images/dogImg.png");
  dogImgHappy = loadImage("images/dogImg1.png")

  
  
}

function setup() {
  createCanvas(500, 500);
  
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImg);
  
}


function draw() {
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImgHappy);
  }

  //text()

  drawSprites();
  //add styles here
  textSize(24);
  fill("black")
  text("NOTE: Press UP_ARROW key tp feed Drago milk",200,200)
  
}

function readStock(data){
    foodS=data.val();
}

function writeStock(foodS){

  if(foodS <= 0){
    foodS=0
  }else{
    foodS=foodS-1
  }
  db.ref('/').set({food: foodS});

}

