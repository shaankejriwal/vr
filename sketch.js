var dog,food,foodCount,foodS,database;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogHappyImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  
  database = firebase.database();
  var foodCount = database.ref("foodS");
  foodCount.on("value",readStock);

  dog = createSprite(400,400,50,50);
  dog.addImage("images/dogImg.png",dogImage)
  dog.scale = 0.5;
  
}


function draw() {  
  background("yellow");

  if(keyDown("UP_ARROW")){
    writeStock(foodS);
    dog.addImage("images/dogImg1.png",dogHappyImage);
  }

  drawSprites();
  

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  database.ref('/').update({
    foods:x
  })

}


