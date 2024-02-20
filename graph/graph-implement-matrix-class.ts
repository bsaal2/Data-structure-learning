/** 
 * Graph implementation using Adjacency matrix
 * This is un-directed graph so we will automatically have path between two vertices
 * But we will be using class based way here
 */

class Graph {
    size: number;
    vertices: Array<string> = [];
    ajacencyMatrix: Array<Array<number>> = [];

    private initializeAjacencyMatrix() {
       this.ajacencyMatrix = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
       ];
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
}

const graph = new Graph(4);
console.log('Initialize:', graph.ajacencyMatrix);
graph.addVertice(0, 'A');
graph.addVertice(1, 'B');
graph.addVertice(2, 'C');
graph.addVertice(3, 'D');
console.log('Vertices: ', graph.vertices);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 2);
console.log('Path: ', graph.ajacencyMatrix);

graph.printGraph();