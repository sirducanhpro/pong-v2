

var r = 0;
var g = 0;
var b = 0;
let c;

var brushSize  = 10;

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

  
   
   
   
    
}





// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

  c =  createCanvas(1520,700);  

    
  background(255,255,255);

  
}
   

var draw = function(){
 
  
  noStroke();
  fill(r,g,b);
  if(mouseIsPressed){
    // Need to make brushSize into a
    // number (from HTML, it's a string)
    const circleSize = (brushSize / 1);
    ellipse(mouseX,mouseY,circleSize,circleSize);
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

