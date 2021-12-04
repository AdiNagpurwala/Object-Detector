img=""; 

function preload(){
  img=loadImage("dog_cat.jpg")  
}
 
 function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    fill("#0000FF");
    text("Cat",350,105);
    noFill();
    stroke("#0000FF");
    rect(310,60,500,350);
}