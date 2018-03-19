//rules:
// 1. sketch one ellipse
// 2. let the screen have several ellipses with 20 pixels in between them with a speed on 0.01 
// 3. at a specific size of the ellipses (3) the direction of the ellipses increase or decrease changes



var r = 0;
var status = "up";

function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 frameRate(80);
}

function draw() {
  background(224, 100, 150, 120);
  for (var xcor = 0; xcor < width-20; xcor += 20){
    for (var ycor = 0; ycor < height-20; ycor += 20){
       drawSomething(xcor, ycor);
     }
  }

  //to keep increasing or decreasing the ellipses

  if (status == "up") {
  	r+=0.01;   //increase the size at a time
  }else{
  	r-=0.01;
  }


  if (r > 3){
   status = "down";
  }else if (r < 0) {
   status = "up";
  }
   //console.log(r);
}

function drawSomething(x, y) {
  fill(224, 204, 0, 150);
  noStroke();
  ellipse(x+5, y+10, 10*r, 10*r);
  //noStroke();
  //ellipse(x+5, y+10, 10*r, 10*r);
  //fill(0, 204, 224, 200);
}
