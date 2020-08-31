var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var count = 0;
var gameState = "play";
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,800,20);

  //particle = new Particle(mouseX,50,10);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 


function draw() {
  background("black");
  textSize(20)
 text("Score "+score,700,50);
  Engine.update(engine);

  //text(mouseX + " " + mouseY,700,50);
  text("25",25,700);
  text("30",110,700);
  text("-28",190,700);
  text("29",265,700);
  text("49",350,700);
  text("-50",425,700);
  text("3",515,700);
  text("15",585,700);
  text("-47",665,700);
  text("-22",745,700);

 //mousePressed();

if (gameState === "end") {
  text("Game Over",400,400);
}

//console.log(gameState);

 /*if (frameCount%10===0) {
  particles.push(new Particle(mouseX,10,7));
}

for( i = 0; i < particles.length; i++){
  particles[i].display();
}*/



if (particle != null) {
  //console.log(particle);
  particle.display();
  if (particle.body.position.y > 510)  {
    if (particle.body.position.x<300) {
      score = score+25;
      particle = null;
      if (count === 5) {
        gameState = "end";
      }
    }

}
}

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
       }
    }
  

function mousePressed() {
  if (gameState !== "end") {
    count+1;
    particle=new Particle(mouseX,10,10);
    console.log(particle);
  }

 
}