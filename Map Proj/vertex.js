class Vertex{
    constructor(x,y,id){
        this.x = x;
        this.y = y;
        this.id = id;
        this.radius = 10;

        
    }    
    

    


    vertexSelected(x,y){
       var distance = dist (this.x,this.y,x,y);
       
        if(distance <= this.radius ){
            return true;
        }
        return false;
    }


    
    draw(selected){
        stroke(30);
        strokeWeight(2);
        if(selected){
            fill('red');
            
        } else{
            fill('white');
        }
        ellipse(this.x, this.y, 2 * this.radius, 2 * this.radius);
        
    }



    
}