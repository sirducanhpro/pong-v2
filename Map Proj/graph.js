class Graph {
    constructor(){

        this.vertices = [];
        this.connections = {};
    }

    getVertex(id){
        for(var i = 0; i< vertices.length -1; i++){
            var vertex  = vertices[i];
            if(vertex.selected()){
                return vertex.id;
            }
        }
        if(vertex.connected(pointX,pointY) == false){
            id = null;
        }
        return id;
         
    }
    
    addVertex(x,y){

        vertex = new Vertex (x,y,id);
        this.vertices.push(vertex);

    }

    vertexAt(x,y){
        for(var i = 0; i< vertices.length -1; i++){
            var vertex  = vertices[i];
            if(vertex.selected(mouseX,mouseY)){
                return vertex.x;
                return vertex.y;
            }
            else{
                return null;
            }
        }
    }
    hasConnection(firstVertex, secondVertex){
        if(this.connections = [1,2]){
            vertexAt(69,96);
        }
        return null;
        return true;
    }
    addConnection(firstVertex, secondVertex){
        if(vertex.hasConnection(1,2)){
           this.connections.push(69);
        }
    }
    draw(){
        for(var i = 0; i< vertices.length -1; i++){
            var vertex  = vertices[i];
            vertex.draw();
        
        }
        line(firstVertex, secondVertex);
    }
}