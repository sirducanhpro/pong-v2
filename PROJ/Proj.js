

var r = 0;
var g = 0;
var b = 0;
let c;

var on = false;

var input;
var img;

var resoH = 0;


var brushSize  = 10;

var   previousMouseX= -1,
      previousMouseY= -1;

let bp;
  

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

  
   
   
   
    
}





// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

   
  if(resoH = 0){
    noCanvas();
  }
  
  
    
  background(255,255,255);

 
  input = createFileInput(handleFile);
  
  input.position(0, 0);
  
  bp = createGraphics(1500,720);
 

}
   

var draw = function(){
  const circleSize = (brushSize / 1);
  
  background(255);
  fill(r,g,b);
  noStroke();
  ellipse(mouseX,mouseY,circleSize,circleSize);
  
  image(bp,0,0);

 
  

  if (img) {
    image(img, 0, 0, width, height);
  }
  
  bp.stroke(r,g,b);
  
    // Need to make brushSize into a
    // number (from HTML, it's a string)
 
  bp.strokeWeight(circleSize);
  if ( mouseIsPressed && previousMouseX !== -1){
    bp.line(mouseX, mouseY, previousMouseX, previousMouseY);   
}
if (mouseIsPressed){
    previousMouseX=mouseX;
    previousMouseY=mouseY;
} else {
    // store -1 signify that mouse was not down
    // in the previous frame.
    previousMouseX= -1;
    previousMouseY= -1;
}

}
  


function boxWasClicked1(event){
  r =255;
  g= 0;
  b= 0;
}
function boxWasClicked2(event){
  r =0;
  g= 0;
  b= 255;
}
function boxWasClicked3(event){
  r =0;
  g= 255;
  b= 0;
}
function boxWasClicked4(event){
  r =0;
  g= 0;
  b= 0;
}
function boxWasClicked5(event){
  r =255;
  g= 255;
  b= 255;
}
function canvasSaved(event){
  save(c, 'myCanvas', 'jpg');
}

function yourFunction(val){

  brushSize = val;
  console.log(val);
}

function createDialog(){
  let elem = document.getElementById('dialogBox');
  elem.setAttribute('open',true);

}

function setResolution1(){
  let elem = document.getElementById('dialogBox');
  elem.removeAttribute('open');
  
 resoH = 1;
  c = createCanvas(1500,720);

}
function setResolution2(){
  let elem = document.getElementById('dialogBox');
  elem.removeAttribute('open');
  
 resoH = 1;
  c = createCanvas(1280,800);

}
function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data);
    img.hide();
  }
}

function upImage(){
  let elem = document.getElementById('imgLoader');
  elem.setAttribute('open',true);

}

function closeLoadDialog(){
  let elem = document.getElementById('imgLoader');
  elem.removeAttribute('open');

}