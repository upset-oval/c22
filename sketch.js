const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
var options = {
  isStatic: true
}
  //create player base body
playerBase = Bodies.rectangle(200,350,180,150,options)
World.add(world,playerBase)
  //create player body
palyer = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options)
World.add(world,palyer)

playerArcher = new PlayerArcher(
  340,
  playerBase.position.y - 112,
  120,
  120
)
}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  //show the playerbase image using image() function
image(playerimage,palyer.position.x,palyer.position.y,50,180)

playerArcher.display()
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
