class MapCreator {

    constructor(graph) {
        this.graph = graph;
        this.selectVertexId = null;
    }

    mouseClicked(x, y) {
        const mouseOnVertex = this.graph.vertexAt(x, y);

        if (!mouseOnVertex) {
            this.graph.addVertex(x, y);
            if (this.selectVertexId !== null) {
                this.graph.addConnection(this.selectVertexId, this.graph.vertexArray.length - 1);
            }
            this.selectVertexId = this.graph.vertexArray.length - 1;


        } else {
            if (this.selectVertexId == mouseOnVertex.id) {
                this.selectVertexId = null;
            } else {
                this.graph.addConnection(this.selectVertexId, mouseOnVertex.id);
                this.selectVertexId = mouseOnVertex.id;


            }
        }
    }

    draw() {
        for (var i = 0; i < this.graph.vertexArray.length; i++) {
            let vertex = this.graph.vertexArray[i];
            if (vertex.id == this.selectVertexId) {
                return vertex.draw(true);
            }
        }
    }
}

