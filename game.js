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
            if (pmouseX > 0) {
                line(mouseX, mouseY, pmouseX, pmouseY);
            }
        }
    }
};