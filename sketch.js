var fruitGroup,fruit1,fruit2,fruit3,fruit4
var sowrdImage, sword;
var score;
var sowrdSound;


function preload(){
swordImage=loadImage("sword.png")  
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
  swordSound=loadSound("Knife.mp3")
}
function setup(){
   createCanvas(500,450)
 // createfruits Group
  fruitGroup=createGroup();
 
 sword=createSprite(200,200,20,20)
 sword.addImage("sword",swordImage) 
  sword.scale=0.6
  sword.debug=false;
  score=0;

}

function draw(){
  background("white");
  
  sword.y=mouseY
  sword.x=mouseX
 
  //spawn fruits

   spawnfruit()  
  textSize(15)
  text("score:"+score,220,20);
 
  if (fruitGroup.isTouching(sword)){
         swordSound.play();
          score=score+1
       fruitGroup.destroyEach()}

    

  
  drawSprites();
  

}

function spawnfruit(){
  if (World.frameCount%60===0){
  var  fruit=createSprite(200,200,20,20);
    fruit.scale=0.2;
    fruit.debug=false;
    var r=Math.round(random(1,4));
           if (r==1) {
      fruit.addImage(fruit1);
    } else if (r==2) {
      fruit.addImage(fruit2);
    } else if (r==3) {
      fruit.addImage(fruit3);
    } else  {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,300));
    fruit.velocityX=5
    fruit.lifetime=300;
    fruitGroup.add(fruit)
  }
}

