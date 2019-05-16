
const MAP_SEARCH_MODE = "MAP_SEARCH";
const MAP_CREATE_MODE = "MAP_CREATE";

var mapCreator;
let mapSearcher;
var graph;
let img;
let mode = MAP_CREATE_MODE;

function preload(){
    
    graph = new Graph();
    mapCreator = new MapCreator(graph);
    mapSearcher = new MapSearcher(graph);
    
     img = loadImage('map.jpg')
    
     let loadMapVertices = createFileInput(loadVertex);
     loadMapVertices.parent('saveLoad');

}

function setup(){
    createCanvas(988, 947);
    background(255,255,255);

    image(img,0,0)
}

function draw(){
   
    image(img, 0, 0, 50, 50);
    
    
    graph.drawConnections();
    graph.draw();

    
    if (mode === MAP_CREATE_MODE) {
        mapCreator.draw();
    } else if (mode === MAP_SEARCH_MODE) {
        mapSearcher.draw();
        mapSearcher.processHover(mouseX, mouseY);
        // todo
    } else {
        throw "Invalid mode: " + mode;
    }
}

function mousePressed(){
    if (mouseX < 0 || mouseY < 0 || mouseX > width || mouseY > height) {
        return;
    }

    if (mode === MAP_CREATE_MODE) {
        mapCreator.mouseClicked(mouseX, mouseY);
    } else if (mode === MAP_SEARCH_MODE) {
        mapSearcher.processClick(mouseX, mouseY);
    } else {
        throw "Invalid mode: " + mode;
    }
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

function changeMode(value) {
    console.log(value);
    mode = value;
}

function drawArrow(fromVertex, toVertex, arrowColor) {

    stroke(arrowColor);
    strokeWeight(2);
    fill(arrowColor);
    
    const fx = fromVertex.x,
          fy = fromVertex.y,
          tx = toVertex.x,
          ty = toVertex.y,
          offset = -6;

    line(fx, fy, tx, ty);

    push();
    const angle = atan2(fy - ty, fx - tx);
    translate(tx, ty);
    rotate(angle + HALF_PI);
    triangle(-offset*0.5, offset, offset*0.5, offset, 0, -offset/2)
    pop();
}