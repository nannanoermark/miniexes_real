var x = 0;
//Det her er mund x-koordinat
var y = 0;
//Det her er mund y-koordinat

function setup() {

  createCanvas(1800,1200);
  background(200,10,30);
  // put setup code here
  frameRate(60)
}

function draw() {
  background(150,20,35);
  //Baggrunden er farven 150 rød, 20 grøn, 35 blå
  fill(255,255,255);
  ellipse (750,300,500,500);
  
  fill(35,20,200)
  rect(620,200,100,75,20);

  fill(0,0,0);
  ellipse(670,240,50,50);

  fill(35,20,200);
  rect(800,200,100,75,20);

  fill(0,0,0);
  ellipse(850,240,50,50);

  fill(255,0,0)
  ellipse(760, 300, 70, 60)

  arc(450,330,150,150,300,PI+QUARTER_PI, CHORD);

  arc(1060,330,150,150,300,PI+QUARTER_PI, CHORD);

  fill(250,200,200);
  ellipse(x,y,150,100);
  //Det her er munden, tegnet der hvor x og y variablen er sat til.

  // put drawing code here

}

function mousePressed(){
  x = mouseX;
  //Sæt x variablen til der hvor mus er i x-aksen
  y = mouseY;
  //--||--

}
