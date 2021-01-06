var ball, dogImage, dogImage1;
var foodStock;
var database;


function preload() {
    dogImage = loadImage("dogImg.png")
    dogImage1 = loadImage("dogImg1.png")
}
function setup() {
database=firebase.database();

    createCanvas(500, 500);
    dog = createSprite(250, 250, 10, 10);
    dog.addImage(dogImage)
   dog.scale = 0.1
var foodStockref=database.ref('Food');
foodStockref.on ("value",function(data){
foodStock=data.val();
})
}

function draw() {
  //  FOODREMAINING = 20
    background("green");
  
     if (keyDown(UP_ARROW)) {
    
       dog.addImage(dogImage1)

       foodStock=0;
database.ref('/').update({
    Food:foodStock
})
        textSize(30)

        text("FOOD REMAINING= "+foodStock, 100, 100);

    }
    textSize(30)
    text("FOOD REMAINING= "+foodStock, 100, 100);

    drawSprites();
}

