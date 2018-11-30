var boy;
var grid;
var treasure;
var barrier;
var barrierNear = false;

var gameTreasure = [];
var barrierObject= [];

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    boy = new Boy(grid, 0, 0);
    
    
    for(var i = 0 ; i < 10; i++){
        treasure = new Treasure(grid,round(random(10)),round(random(10)));
        gameTreasure.push(treasure);
    }
    for(var i = 0; i <10; i++){
        barrier= new Barrier(grid,round(random(10)),round(random(10)));
        barrierObject.push(barrier);
    }

    soundFormats('mp3', 'ogg');
    mySound = loadSound('assets/walk.mp3');
    mySound2= loadSound('assets/ow.mp3')
}

    

// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    mySound2.setVolume(0.1);
    mySound2.play();
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {

    // Draw the grid first, then the boy on top of it
    background(255,255,255);
    grid.drawGrid();
    
    
    for(i=0;i<gameTreasure.length;i++){
        gameTreasure[i].draw();
    }
    
    
    
    boy.draw();
    for(i = gameTreasure.length -1;i>=0;i--){
        var treasure=gameTreasure[i];
        if(treasure.col == boy.col && treasure.row == boy.row){
            gameTreasure.splice(i,1);
         
            break;
           
        }

    }
    for(i = 0; i < barrierObject.length; i++){
        barrierObject[i].draw();

    }
    
  

        
};
 mySound.setVolume(0.1);
    
function keyTyped() {
    if (key === 'w' && boy.nearBarrierUp() == false) {
        
        boy.moveUp()

        mySound.play();
          
    }
    if (key === 's' && boy.nearBarrierDown() == false) {
        
        boy.moveDown()
        
        mySound.play();
          
    }
    if (key === 'a' && boy.nearBarrierLeft() == false) {
        
        boy.moveLeft()
        
        mySound.play();
          
    }
    if (key === 'd' && boy.nearBarrierRight()== false) {
       
        boy.moveRight();
        
        mySound.play();
          
    }
}





  
