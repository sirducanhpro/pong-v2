
var vertices = [];

var preload = function(){


};

var setup = function(){
    createCanvas(1800,720);
    background("pink")

   
};

var draw = function(){
    fill("black");
    for(var i =0 ;i < vertices.length -1 ;i ++){
       var vertexLast = vertices[i];
       var vertexNew = vertices[i+1];
        
    line(vertexLast.x,vertexLast.y,vertexNew.x,vertexNew.y);

    }

};

function mouseClicked(){
     vertex = new Vertex (mouseX,mouseY, 30,30);
     vertex.draw();
     vertices.push(vertex);
     
}