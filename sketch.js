const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var snow=[]

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {

  background(backgroundImg);
  Engine.update(engine); 
  if(frameCount%5==0){
snow.push(new Snow(random(50,750),random(0,350),50))
  } 
 for(var i=0;i<snow.length;i++){
snow[i].display()
 }
}