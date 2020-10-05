//Create variables here
var dogImg,dogImgHappy,feed,addFood;
var dog, happyDog, foodS, foodStock,db,lastFed;

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
  createCanvas(800, 800);
  
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImg);

  feed=createButton("Feed the dog")
  feed.position(700,95)
  //feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  //addFood.mousePressed(addFoods)
  
}


function draw() {
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImgHappy);
  }

  fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed: "+lastFed%12 + "PM", 350,30 );
        }else if(lastFed==0){
            text("Last Fed : 12 AM",350,30);
        }else{
            text("Last Feed :"+lastFed + "AM",350,30);
        }

  //text()

  drawSprites();
  //add styles here
  textSize(24);
  fill("black")
  text("NOTE: Press UP_ARROW key to feed Drago milk",200,200)
  
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

