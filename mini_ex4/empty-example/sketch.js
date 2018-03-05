var button;
var sel;


function setup() {
  createCanvas(1000,400);
  background(0);
  textAlign(CENTER);
  background(200);
  sel = createSelect();
  sel.position(500,500);
  sel.option('----');
  sel.option('a digital design student');
  sel.option('an information studies student');
  sel.option('an engineer student');
  sel.option('an Media studies student');
  sel.changed(mySelectEvent);
}

function draw() {
  button = createButton("Nothing happens when you click this button")
  button.size(200,50)
  button.position(200,500);
  button.mousePressed(changeBG);
  button.style("font-family", "Garamond")

createA('https://2018.transmediale.de/', 'If you are a DD-student, nothing happens when you click this link')
link.position (100,300);

}

function changeBG(){
  var val = random (100);
  background(val);
}
function mySelectEvent() {
  var item = sel.value();
  background(200);
  text('You are ' + item , 200, 150);
}
