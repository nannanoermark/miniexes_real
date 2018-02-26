function setup() {
    createCanvas(1200,800);
    angleMode(DEGREES);


}

function draw() {
background(255);
translate(200,200);
rotate (-90);

let hr = hour();
let mn = minute();
let sc = second();

//strokeWeight(8);
stroke(255, 100, 150);
fill(0);
//ellipse(200, 200, 300, 300);
let secondAngle = map(sc,0, 60, 0, 360);
//stroke(255, 100, 150);

strokeWeight(3)
arc(0, 0, 300, 300, 0, secondAngle);


stroke(255,100,150);
let minuteAngle= map(mn,0, 60, 0, 360);
arc(0, 0, 280, 280, 0, minuteAngle);

stroke(255, 100, 150);
let hourAngle = map(hr % 12,0, 12, -90, 360);
arc(0, 0, 260, 260, 0, hourAngle);

push();
rotate(secondAngle);
stroke(255, 100, 150);
line(0,0,100,0);
pop();

push();
rotate(minuteAngle);
stroke(255,100,150);
line(0,0, 75, 0);
pop();

push();
rotate(hourAngle);
stroke(255, 100, 150);
line(0,0, 50, 0)
pop();

//stroke(0);
//point(0,0);

}
// put drawing code her
