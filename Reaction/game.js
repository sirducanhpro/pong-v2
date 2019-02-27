



// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

  
   
    menu = new Menu();
   
    
}





// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

    var canvas = createCanvas(400, 400);

    canvas.parent('sketch-holder');
    
  
}
   

var draw = function(){


    menu.display();

}