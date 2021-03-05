const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log1, log2, log3, log4, box1, box2, box3, box4, box5;
var pig1, pig2, bird;

function setup(){
    var canvas = createCanvas(1280,574);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(width-600, height-50, 100, 100);
    pig1 = new Pig(width-500, height-50);
    box2 = new Box(width-400, height-50, 100, 100);
   log1 = new Log(width-500, height-60, 400, 20, PI);
    box3 = new Box(width-600, height-170, 100, 100);
    pig2 = new Pig(width-500, height-170);
    box4 = new Box(width-400, height-170, 100, 100);
    log2 = new Log(width-500, height-230, 400, 20,  PI);
    box5 = new Box(width-500, height-290, 100, 100, );
    log3 = new Log(width-400, height-287, 141.4, 20, PI/4);
    log4 = new Log(width-600, height-287, 141.4, 20,  -PI/4);//We'd forgotten to add options in the class
    bird = new Bird(250, 250);
    ground = new Ground(width/2, height-20, width, 30);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    pig1.display();
    box2.display();
   log1.display();
   
    box3.display();
    pig2.display();
    box4.display();
   log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}