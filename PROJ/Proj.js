

var r = 0;
var g = 0;
var b = 0;
let c;

var resoH = 0;


var brushSize  = 10;

var   previousMouseX= -1,
      previousMouseY= -1;

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

  
}
   

var draw = function(){
 
  
  
  stroke(r,g,b);
  
    // Need to make brushSize into a
    // number (from HTML, it's a string)
  const circleSize = (brushSize / 1);
  strokeWeight(circleSize);
  if ( mouseIsPressed && previousMouseX !== -1){
    line(mouseX, mouseY, previousMouseX, previousMouseY);   
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
