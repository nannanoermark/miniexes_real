var toilet;
var img;
var url = "https://www.refugerestrooms.org/api/v1/restrooms/by_location.json?"
var lat; // Latitude
var lng; // Longitude
var latKBH = '55.67594';
var lngKBH = '12.56553';
var latARH = '56.15674';
var lngARH = '10.21076';
var latAAL = '57.046707';
var lngAAL = '9.935932';

var api;
var button;
var button1;
var button2;
var i=0;

var loc; // Location
var adr; // Adree
var com; // Comment

var AAL = 0;
var ARH = 0;
var KBH = 0;

function setup() {
  var canvas = createCanvas(windowWidth,500);
  canvas.position(250,50);

  var gif = createImg('pics/GNgif.gif');
  gif.position(70,225);

  header = createP('Welcome! Go ahead and find unisex restrooms. #genderneutrality');
  header.style('font-size','24px');
  header.position(100,10);

  button = createButton('Aarhus');
  button.size(150, 30);
  button.position(100,100);

  button1 = createButton('København');
  button1.size(150, 30);
  button1.position(100,150);

  button2 = createButton('Aalborg');
  button2.size(150, 30);
  button2.position(100,200);
}

function draw() {
  button.mousePressed(ARHlatlng);
  button1.mousePressed (KBHlatlng);
  button2.mousePressed (AALlatlng);
}

function AALlatlng(){
  lat = latAAL;
  lng = lngAAL;
  updateData(); // When Aalborg is pressed, update the api to the latitude and longitude of Aalborg
    if (AAL==0){ // We've used boolean expressions to detect whether or not the button is clicked
      AAL=1;
      i++;
    }
    if(AAL==1){
      AAL=0;
    }
}

function KBHlatlng (){
  lat = latKBH;
  lng = lngKBH;
  updateData();// When København is pressed, update the api to the latitude and longitude of Copenhagen
  if (KBH==0){
    KBH=1;
    i++;
  }
  if(KBH==1){
    KBH=0;
  }
}

function ARHlatlng(){
  lat = latARH;
  lng = lngARH;
  updateData();// When Aarhus is pressed, update the api to the latitude and longitude of Aarhus
  if (ARH==0){
    ARH=1;
    i++;
  }
  if(ARH==1){
    ARH=0;
  }
}

function updateData() { // Updates the api when buttons clicked
  api = url + "lat=" + lat + "&lng=" + lng;
      try{
      loadJSON(api,gotData);
      } catch(error) {
        console.error(error);
      }
}

function gotData(data){ // The data is stored here, and used to display the data in text form
  toilet = data;
  if(i>data.length-1){ // length -1 To make sure that index doesn't go above the number of objects(which is always 1 above number of index)
    i=0; // Makes the data loop when max number of index is reached
  }

  loc = toilet[i].name;
  adr = toilet[i].street;
  com = toilet[i].comment;

  fill(0);
  background(255);
  var num = data.length; // Shows how many objects there are in the differen datas
  textSize(14);
  text("There are " + num + " unisex toilets in this city. Here's one of them:",50,70);

  textSize(24);
  text(loc,70,110); // Title of the toilet

  textSize(14);
  text(adr,70,135); // Adress of the toilet
  text("\""+ com + "\"",70,160); // User's comment on the toilet

}
