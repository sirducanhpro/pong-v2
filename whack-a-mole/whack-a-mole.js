var sketchProc = function(processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400); 
       
  //es6 ways of creating object blueprints
class Mole {
    constructor(x,y,radius){
        this.x = x;
        this.y = y;
        this.radius = radius;

    }
    draw(){
        noStroke();
        fill(140, 89, 8);
        
        ellipse(this.x,
                this.y,
                this.radius*2,
                this.radius*2);
                
        fill(255, 255, 255);
        ellipse(this.x-this.radius/3,
                this.y-this.radius/3,
                this.radius/5,
                this.radius/2);
                         
        ellipse(this.x+this.radius/3,
                this.y-this.radius/3,
                this.radius/5,
                this.radius/2);
    }
    containsPoint(pointX,pointY){
        var distance = dist(pointX, pointY, this.x, this.y);
        
        if (distance<= this.radius){
            return true;
        }
        else{
            return false;
        }
    }


}



//add


//lists of moles
var moles=[];

//start with a mole
var moleAtTheCenter = new Mole(200,200,82);

//add to lists
moles.push(moleAtTheCenter,
            new Mole(90,84,75),
            new Mole(351,292,32),
            new Mole(314,90,47)
            );

draw = function() {
    
    background(255, 194, 217);
    
    for(var i=0; i < moles.length; i++){
        var mole = moles[i];
        mole.draw();
    }
     if (frameCount%45 === 0){
        moles.push(new Mole(random(400), random(400), random(20, 100)));   
     }
  println(frameCount);
};

mouseClicked=function(){
    
    
    for(var i =moles.length -1; i >=0; i--){
        var mole = moles[i];
            
            if (mole.containsPoint(mouseX,mouseY)){
            
            //remove the mole
            moles.splice(i,1);
            
            //break loop
            break;
            }
            
            
            
    }
};



frameRate(60);

    }
};