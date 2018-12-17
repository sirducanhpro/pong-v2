
//all the variables
var boy;
var grid;
var treasure;
var barrier;
var genji;

var barrierNear = false;
gameEnded = false;

var gameTreasure = [];
var barrierObject= [];
var enemies=[];
var enemiesMove=[];

var lives = 5;
var treasureLeft = gameTreasure.length;
var treasureLost = 0;
var genjiSpeed = 0.02;
var treasureCollected = 0;

var hearts;
var blackhearts;

var gameLost = false;
var gameStarted = false;


// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

  
    grid = new Grid(10, 10);
    boy = new Boy(grid, 0, 0);
    menu = new Menu();
    end = new End();
    
    for(var i = 0; i < 6; i ++){
        genji = new Genji(grid,round(random(10)),round(random(10)))
        enemies.push(genji);
    }
    for(var i = 0; i  < 4 ;i ++){
        genjiMove = new Genji (grid, round(random(10)),round(random(4,10)))
        enemiesMove.push(genjiMove);
    }
    for(var i = 0 ; i < 10; i++){

        treasure = new Treasure(grid,round(random(9)),round(random(9)));
        gameTreasure.push(treasure);
        
    }
  
  

    
    for(var i = 0; i <20; i++){
        barrier= new Barrier(grid,round(random(10)),round(random(2,10)));
        barrierObject.push(barrier);    
    }
    
    hearts = loadImage('assets/hearts.png')
    blackHearts = loadImage('assets/hearts1.png')

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
   
  
    
    textSize(20);
    //restart the game
    if (gameLost){
        gameEnded = false;
        end.display()

        lives = 5;
        return;
    }
    //restart the round
    if(gameEnded){
        fill(255,0,0);
        noStroke();
     
        textSize(20);
        text("You lost a life. Press r to continue", 50,100)
        return;
       
    }
    //call menu
    menu.display();
            
    //start the game
    if(gameStarted){
        // Draw the grid first, then the boy, enemies, barriers and treasure on top of it
        background(0,128,255);
        grid.drawGrid();

        for(i=0;i<gameTreasure.length;i++){
                gameTreasure[i].draw();
            }
        for (i = gameTreasure.length -1;i>=0;i--){
        
        //use to create one new treausure each time the player collect one
        if( treasureLost == 1){
                
                treasure = new Treasure(grid,round(random(9)),round(random(9)));
                gameTreasure.push(treasure);
                treasureLost= 0;
                
            }   
        }
    
        
        boy.draw();

        //remove one treasure and add a point
        for(i = gameTreasure.length -1;i>=0;i--){
            var treasure=gameTreasure[i];
            if(treasure.col == boy.col && treasure.row == boy.row){
                gameTreasure.splice(i,1);
                treasureCollected += 1;
                treasureLost += 1;
                break;
            }
        }

        for(i = 0; i < barrierObject.length; i++){
            barrierObject[i].draw();
        }
        
        for(i = 0; i < enemies.length; i ++){
            enemies[i].draw();

        }

        for(i = 0; i < enemiesMove.length; i ++){
            enemiesMove[i].draw();
        }

        //make the enemies chase the player
        for(i = enemies.length -1 ; i >= 0; i --){
            var genji=enemies[i];
            if (boy.col> genji.col ){
                genji.col+= 0.02;
            }
            if( boy.col < genji.col){
                genji.col-= 0.02;
            }
            if (boy.row> genji.row ){
                genji.row+= 0.02;
            }
            if( boy.row < genji.row){
                genji.row-= 0.02;
            }
        } 
        
        // enemies moving in a straight route
        for (i = enemiesMove.length - 1; i >= 0; i-- ){
            var genjiMove = enemiesMove[i];
          genjiMove.col += genjiSpeed;
            
          if(genjiMove.col < 0){
                genjiSpeed = - genjiSpeed;
            }
            if( genjiMove.col >10){
                genjiSpeed = - genjiSpeed;           
            }
        }
           
            //make the lives count
            for ( i=0; i<5; i++ ){
                image(hearts,370 - 25*i, -2, 30,30);
            }
            if (lives <= 4){
                image(blackHearts, 370,-2,30,30);
            }
            if (lives <=3){
                image(blackHearts, 345, -2,30,30);
            }
            if (lives <=2){
                image(blackHearts, 320, -2,30,30);
            }
            if (lives <=1){
                image(blackHearts, 295, -2,30,30);
            }
            if (lives <=0){
                image(blackHearts, 270, -2,30,30);
            }
        
        // points counter 
        textSize(10)
        fill(0,0,0)
        text("Tresure Collected: " + treasureCollected, 0,10)

        fill(0,0,0)
            
        // end the round and remove a life if touch the enemies
        if ( boy.touchGenji() || boy.touchGenjiMoving() ){

            lives -=1;
            gameEnded = true;
            for(i = enemies.length -1 ; i >= 0; i --){
                var genji=enemies[i];
            genji.col = round(random(10));
            genji.row = round(random(10));
            }
            
        }
      
        // losing condition
        if( lives == -1){
            gameLost = true;
        }
        

    }  
};

mySound.setVolume(0.1);
   
// all the keys used to move player, restart the game, restart the round
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

    if ( key === 'r'){
        gameEnded = false;
        boy.col = 0;
        boy.row =0;
    }

    if( key === 'x'){
       gameStarted = true;
    }

    if (key === 'z'){
        gameStarted = false;
        gameLost = false;
        gameEnded = false;
        boy.col = 0;
        boy.row =0;
        
        for(i = barrierObject.length -1 ; i >= 0; i --){
        var barrier = barrierObject[i];
        barrier.col = round(random(10));
        barrier.row = round(random(2,10));
        }
    }
}





  
