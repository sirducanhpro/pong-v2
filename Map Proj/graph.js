class Graph {

    constructor() {


        this.vertexArray = [];
        this.connections = [];
        this.connectionsNumber = 0;

    }

    getVertex(id) {
        return this.vertexArray[id];
    }

    vertexAt(x, y) {
        for (var i = 0; i < this.vertexArray.length; i++) {
            let vertex = this.vertexArray[i];
            if (vertex.vertexSelected(x, y) == true) {
                return vertex;
            }

        }
        return null;
    }


    addVertex(x, y) {


        let vertex = new Vertex(x, y, this.vertexArray.length);
        this.vertexArray.push(vertex);
        this.connections.push([]);
        return vertex;
    }

    draw() {

        for (var i = 0; i < this.vertexArray.length; i++) {
            let vertex = this.vertexArray[i];
            vertex.draw();
        }
    }

    hasConnectionBetween(vid, ovid) {

        let idsOfConnectedVertices = this.connections[vid];
        if (idsOfConnectedVertices.indexOf(ovid) !== -1) {
            return true;
        }

        return false;
    }

    verticesConnectedTo(vid) {
        return this.connections[vid].map(id => this.getVertex(id));
    }

    addConnection(firstVertex, secondVertex) {
        if (firstVertex === null || secondVertex === null) {

            return;
        }

        if (this.hasConnectionBetween(firstVertex, secondVertex) === true) {
            return;
        }

        let prev = this.vertexArray[firstVertex];
        let current = this.vertexArray[secondVertex];

        this.connections[prev.id].push(current.id);
        this.connections[current.id].push(prev.id);
    }

    drawConnections() {
        stroke(255, 180);
        strokeWeight(1);
        for (var firstVertex = 0; firstVertex < this.connections.length; firstVertex++) {

            for (var i = 0; i < this.connections[firstVertex].length; i++) {
                let secondVertex = this.connections[firstVertex][i];
                let a = this.vertexArray[firstVertex];
                let b = this.vertexArray[secondVertex];


                line(a.x, a.y, b.x, b.y);
            }
        }
    }
}