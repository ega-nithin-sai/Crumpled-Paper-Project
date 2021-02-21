
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject;
var world;

var trash1;
var recyclingBin;
var recyclingBinGray;

var paper;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);

	paper = new Paper(250,650,75,75);

	// trash1 = new Trash(1500,650,200,250);
	recyclingBin = new RecyclingBin(1250,650,220,250);
	recyclingBinGray = new RecyclingBinGray(1000,650,220,250);

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(230);
 

	groundObject.display();

	paper.display();

	// trash1.display();
	recyclingBin.display();
	recyclingBinGray.display();
}

