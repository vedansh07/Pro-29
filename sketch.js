const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygon_img=loadImage("Images/polygon.png");


}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    base = new Ground(100, 305, 300, 170);
    base2 = new Ground(200,245,300,170);

    block1=new Box(300,315,30,40);
    block2=new Box(330,315,30,40);
    block3=new Box(360,315,30,40);
    block4=new Box(390,315,30,40);
    block5=new Box(420,315,30,40);
    block6=new Box(450,315,30,40);
    block7=new Box(480,315,30,40);

    block8=new Box(330,255,30,40);
    block9=new Box(360,255,30,40);
    block10=new Box(390,255,30,40);
    block11=new Box(420,255,30,40);
    block12=new Box(450,255,30,40);

    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);

    block16=new Box(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot=new slingShot(this.polygon,{x:100,y:200});

}

function draw(){
    Engine.update(engine);

    ground.display();
    base.dispaly();
    base2.dispaly();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    block13.display();
    block14.display();
    block15.display();

    block16.display();

    slingShot.display();
    imageMode(CENTER);
    image (polygon_img,polygon.position.x,polygon.position.y,40,40)

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
