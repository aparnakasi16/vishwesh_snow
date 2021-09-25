var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snowfall;
var bg;
var ground;
maxsnow = 10;
var pushSnow=[];
function preload(){
  bg=loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1200, 625);
  engine = Engine.create();
  world = engine.world;
  snowfall=new snow(100,100,100,100);
  ground=new Ground(600,530,1200,20);

  if(frameCount % 20 === 0){
    for(var i=0; i<maxsnow; i++){
        pushSnow.push(new snow(random(0,1200), random(0,600)));
    }
}
 
}


function draw() {
  background(bg);
  textSize(20)
  Engine.update(engine);
   snowfall.display();                            

    for(var i = 0; i<maxsnow; i++){
      pushSnow[i].display();
      pushSnow[i].updateY();
  }
 


}