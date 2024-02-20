/** 
 * Graph implementation using Adjacency matrix
 * This is un-directed graph so we will automatically have path between two vertices
 * But we will be using class based way here
 */

export default class Graph {
    size: number;
    vertices: Array<string> = [];
    ajacencyMatrix: Array<Array<number>> = [];

    private initializeAjacencyMatrix() {
       this.ajacencyMatrix = Array(this.size).fill(0).map(each => Array(this.size).fill(0));
    }

    constructor(value: number) {
        this.size = value;
        this.initializeAjacencyMatrix();
    }

    /** add vertices to particular index */
    addVertice(index: number, value: string) {
        if (index >= this.size || index < 0) throw new Error('cannot be added');

        this.vertices[index] = value;
    }

    /** adding path between two vertices
     * undirected graph has path both way
     */
    addEdge(x: number, y: number) {
        this.ajacencyMatrix[x][y] = 1;
        this.ajacencyMatrix[y][x] = 1;
    }

    printGraph() {
        console.log('[\n');
        for(let i = 0; i < this.size; i++) {
            let row = '';
            for (let j = 0; j < this.size; j++) {
                row = row + this.ajacencyMatrix[i][j] + ' ';
            }
            console.log(row, '\n');
        }
        console.log(']\n');
    }

    dsfUtil(vertex: number, visited: Map<number, number>) {
        visited.set(vertex, vertex);
        console.log('Vertice: ', this.vertices[vertex]);

        for (let i = 0; i < this.size; i++) {
            if (this.ajacencyMatrix[vertex][i] && !visited.has(i)) this.dsfUtil(i, visited);
        }
    }

    dsfTravesal(startingVertex: string) {
        const visited = new Map<number, number>();
        const verticeIndex = this.vertices.indexOf(startingVertex);

        this.dsfUtil(verticeIndex, visited);
    }

    bfsTraversal(startingVertex: string) {
        const visited = new Map<number, boolean>();
        const vertexIndex = this.vertices.indexOf(startingVertex);

        const queue: Array<number> = [];
        queue.push(vertexIndex);

        let bfs = '';
        while(queue.length) {
            const popedVertex = queue.shift() as number;
            if(!visited.has(popedVertex)) {
                bfs = bfs.concat(this.vertices[popedVertex]);
                visited.set(popedVertex, true);
                for (let i = 0; i < this.size; i++) {
                    if (this.ajacencyMatrix[popedVertex][i]) queue.push(i);
                }
            }
        }

        console.log('BFS traversal: ', bfs);
    }
}

const graph = new Graph(7);
graph.addVertice(0, 'A')
graph.addVertice(1, 'B')
graph.addVertice(2, 'C')
graph.addVertice(3, 'D')
graph.addVertice(4, 'E')
graph.addVertice(5, 'F')
graph.addVertice(6, 'G')

graph.addEdge(3, 0)  // D - A
graph.addEdge(0, 2)  // A - C
graph.addEdge(0, 3)  // A - D
graph.addEdge(0, 4)  // A - E
graph.addEdge(4, 2)  // E - C
graph.addEdge(2, 5)  // C - F
graph.addEdge(2, 1)  // C - B
graph.addEdge(2, 6)  // C - G
graph.addEdge(1, 5)  // B - F

graph.printGraph();
graph.bfsTraversal('D')