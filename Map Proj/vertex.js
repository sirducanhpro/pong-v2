class Vertex{
    constructor(x,y,diameter){
        this.x = x;
        this.y = y;
        this.diameter = diameter;
    

    }
    draw(){
       fill("blue");
        ellipse(this.x,this.y,this.diameter,this.diameter);

    }

}