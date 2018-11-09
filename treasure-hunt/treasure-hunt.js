var boy;
var grid;
var treasure;
var collided=false;

var gameTreasure = [];

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    boy = new Boy(grid, 0, 0);
    
    for(var i=0;i<5;i++){
        treasure = new Treasure(grid,random(10),random(10));
        gameTreasure.push(treasure);
    }
    soundFormats('mp3', 'ogg');
    mySound = loadSound('assets/walk.mp3');
}

    

// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {

    // Draw the grid first, then the boy on top of it
    background(255,255,255);
    grid.drawGrid();
    boy.draw();
    if(collided){
       
        
    }
    else{
         
    }
    for(i=0;i<5;i++){
        gameTreasure[i].draw();
    }
    


    //collision 
    if(treasure.col == boy.col && treasure.row == boy.row){
        collided=true;
        
    }
    else{
        collided=false;
        
    }
};

function keyTyped() {
    if (key === 'w') {
        boy.moveUp()
        
            
            mySound.play();
          
    }
    if (key === 's') {
        boy.moveDown()
        
          
            mySound.play();
          
    }
    if (key === 'a') {
        boy.moveLeft()
        
            
            mySound.play();
          
    }
    if (key === 'd') {
        boy.moveRight();
        
            
            mySound.play();
          
    }
}





  
