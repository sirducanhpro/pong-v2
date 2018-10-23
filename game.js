var sketchProc = function(processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400); 
       
        // Program goes here
       //
//Pong game
//
//This is a game where you try to keep the ball from exiting the screen using a paddle
//
//author : Anh Cuto
//Date: 9/12/2018

//start of the ball in the center of the screen



var ballX = 200, ballY = 200;
var ballXVel = 3, ballYVel = -2;
var ballDiameter = 20;
var ballRadius = ballDiameter / 2;
var isGamePaused=false;

var paddleA=150;
var paddleB=150;

var ballColor=20;

var scoreLeft=0;
var scoreRight=0;

//make the bounce off the wall
var makeBallBounce = function(){




if (ballY - ballRadius <= 0){
    ballYVel= -ballYVel;   
}
if (ballY + ballRadius >=400){
    ballYVel= -ballYVel;   
}
}; 


draw = function() {
    
 
if(isGamePaused) {
    return;
}
    background(176, 254, 255);

//losing conditions (if ball hit left or right edges)
if(ballX - ballRadius <= 0 || ballX + ballRadius >= width ){
    isGamePaused= true;  
    fill(153, 38, 166);
    textSize(40);
    
    var f= createFont("calibri");
    textFont(f);
    
    text("YOU LOST",117,38);
    textSize(15);
    text("Press r to play again",139,70);
    
    
    //increase score 
    if(ballX - ballRadius <= 0){
        scoreRight++;
    }
    if( ballX + ballRadius >= width){
        scoreLeft++;
    }

}
//ball color
    colorMode(HSB);
    noStroke();
    fill(ballColor, 159, 199);
    colorMode(RGB);
    
//ball color changing
    ballColor+=1;
    ballColor= ballColor % 255;
    
//make ball move  
    ballX+=ballXVel;
    ballY+=ballYVel;
    
//make ball bounce    
    makeBallBounce();
  
 //draw all the shapes  
    ellipse(ballX, ballY, ballDiameter, ballDiameter);
    
    fill(61, 55, 55);
    rect(382,paddleA,10,100,5);
    rect(8,paddleB,10,100,5);
    
    
    
    
    //score display
    text(scoreLeft,13,16);
    text(scoreRight,378,16);
    
//check if ball hit the paddle
    if(ballX- ballRadius <=18 && ballY<=paddleB+96 && ballY>=paddleB){
        ballXVel = abs(ballXVel);
    }
    if(ballX+ ballRadius >=382 && ballY<=paddleA+96 && ballY>=paddleA){
        ballXVel = -abs(ballXVel);
    }
    
//move the paddles
    if(keyIsPressed && keyCode === UP && paddleA>=0){
        paddleA-=3;   
    }
    if(keyIsPressed && keyCode === DOWN && paddleA <=300){
        paddleA+=3;   
    }
    if(keyIsPressed && key.toString() === 'w' && paddleB >=0){
        paddleB-=3;   
    }
    if(keyIsPressed && key.toString() === 's' && paddleB <=300){
        paddleB+=3;   
    }
};


//create interaction to game    
var keyPressed=function(){
//restart the game
if(key.toString() === 'r'){
    isGamePaused=false;
    ballX=200;
    ballY=200;
    paddleA=150;
    paddleB=150;
}

//change position of right paddle


//min max

};
frameRate(60);

    }
};