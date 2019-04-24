class Vertex{
    constructor(x,y,id){
        this.x = x;
        this.y = y;
        this.id = id;

    }
   
    selected(pointX,pointY){
        var distance = dist(pointX, pointY, this.x, this.y);
        
        if(distance <= 15 && mouseIsPressed){
            this.r = 255;
           return true;
            
        } if( distance > 15 && mouseIsPressed){
            this.r = 0;
            return false;
        }
       
    }
     draw(){
      
        fill("black");
       
        ellipse(this.x,this.y,15,15);
        
    }
   
}   