class MapSearcher {

    constructor(graph) {
        this.graph = graph;
        this.backpointers = {};
        this.destVertex = null;
        this.sourceVertex = null;
    }
    processClick(x, y) {

        let clickedVertex = this.graph.vertexAt(x, y);
        if (clickedVertex) {

            // restart search when user clicks on new vertex!
            this.destVertex = clickedVertex;
            this.backpointers = {};
            this.runBFS();
        }
    }
    processHover(x, y) {
        // Note: this can be null
        this.sourceVertex = this.graph.vertexAt(x, y);
    }

    runBFS() {
        let searchQueue = [];
        let exploredVertices = {};
        

        // this is how you enqueue something (add it to the end of the array)
        exploredVertices[this.destVertex.id] = true;
        searchQueue.push(this.destVertex);

        while(searchQueue.length> 0){
            let processingVertex = searchQueue.splice(0,1);
        }
        

        // recommended: consult https://en.wikipedia.org/wiki/Breadth-first_search
        //     note:    - ignore the "if v is the goal" psuedocode. Just generate the whole 
        //                backpointer dictionary, since our source vertex may change.

        // note: the following line will dequeue an element. (remove 
        //       the first element from the array and store it into 
        //       the v variable
        // const v = exploreQueue.splice(0, 1)[0];

        // note: the following line will test if a vertex is in the discovered array

        // TODO: IMPLEMENT BFS (generate the backpointer dictionary)
    }

    draw() {
        if (!this.destVertex || !this.backpointers) {
            return;
        }
        if (Object.keys(this.backpoints).length == 0) {
            return;
        }
        
        for(const vid of Object.keys(this.backpointers)){
            const fromV = this.graph.getVertex(vid);
            const toV = this.graph.getVertex(this.backpointers[vid]);
            drawArrow(fromV, toV, color(250, 150, 50));
        }

        // If user is hovering over a vertex, draw that path a different color
        if (this.sourceVertex) {
            let v = this.sourceVertex;
            while (v) {
                
                const nextV = this.graph.getVertex(this.backpointers[v.id]);
                if (nextV) {
                    drawArrow(v, nextV, color(100, 100, 255))
                }
                v = this.graph.getVertex(this.backpointers[v.id]);
            }
        }
    }
}