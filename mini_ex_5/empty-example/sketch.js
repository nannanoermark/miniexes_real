//var img1;
let balls = [];

//function preload(){
//img1 = loadImage(pn/pn_real.jpg);
//}

function setup() {
  createCanvas(1200, 1200);

  for (let i = 0; i < 25; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(15, 70);
    let b = new Ball(x, y, r);
    balls.push(b);
  }
}

  //function mousePressed() {
  //let r = random(20, 100);
  //let b = new Bubble(mouseX, mouseY, r);
  //bubbles.push(b);


function mousePressed(){
  for (let i = 0; i < balls.length; i++) {
  balls[i].clicked(mouseX, mouseY);
  }
}
function draw() {
  background(200, 100, 150);
  textSize(32);
  textAlign(CENTER);
  text('Catch the circles!', 500, 500);
  fill(0, 204, 0);


  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].show();
  }
}

class Ball {
constructor(x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.brightness = 0;


}

clicked(x, y) {
  let d =dist(x, y, this.x, this.y);
  if(d < this.r) {
    this.brightness = 255;
  }
}
move() {
this.x = this.x + random(-5, 6);
this.y = this.y + random(-10, 10);

}

show() {
stroke(255);
strokeWeight(1);
fill(this.brightness, 125);
ellipse(this.x, this.y, this.r * 2);
  }
}
