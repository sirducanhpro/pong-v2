var mapCreator;
var graph;


let img;

function preload(){
    
    graph = new Graph();
    mapCreator = new MapCreator(graph);
    
     img = loadImage('map.jpg')
    
     let loadMapVertices = createFileInput(loadVertex);

}

function setup(){
 createCanvas(1920,1000);
 background(255,255,255);

image(img,0,0)
}



function draw(){
   
    
    
    graph.drawConnections();
    graph.draw();
    mapCreator.draw();
    
    
    
}

function mousePressed(){
    if (mouseX < 0 || mouseY < 0 || mouseX > width || mouseY > height) {
        return;
    }
    mapCreator.mouseClicked(mouseX, mouseY);
    

    
}



function saveVertices(){
    saveJSON(graph,'tester',false)
}

function loadVertex(x){
    if (x.subtype !== "json"){
        return;
    }

    loadJSON(x.data,function(graphData) {
       console.log(graphData.connections)

        for(  const vertexData of graphData.vertexArray ){
            const vertex = new Vertex(vertexData.x,vertexData.y,vertexData.id)
            graph.vertexArray.push(vertex);
        }
         graph.connections = graphData.connections;
        graph.drawConnections();
    }
    
    );

}