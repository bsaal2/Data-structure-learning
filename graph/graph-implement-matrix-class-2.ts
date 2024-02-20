/** 
 * Directed and Weighted Graph implementation
 * Using Adjacency Matrix
 */

export default class Graph {
    size: number;
    vertices: Array<string> = [];
    matrix: Array<Array<number>> = [];

    private initializeMatrix() {
        this.matrix = Array(this.size).fill(0).map(each => Array(this.size).fill(0));
    }

    constructor(value: number) {
        this.size = value;

        this.initializeMatrix();
    }

    addVertice(index: number, vertice: string) {
        if (index >= this.size || index < 0) throw new Error('Not allowed');

        this.vertices[index] = vertice;
    }

    addEdge(source: number, destination: number, weight: number) {
        if (source >= this.size || source < 0) throw new Error('Not allowed');
        if (destination >= this.size || destination < 0) throw new Error('Not allowed');

        this.matrix[source][destination] = weight; // being directed graph, not allowed reverse index entry
    }

    printGraph() {
        console.log('[\n');
        for (let i = 0; i < this.size; i++) {
            let row = '';
            for (let j = 0; j < this.size; j++) {
                row += this.matrix[i][j] + ' ';
            }
            console.log(row, '\n');
        }
        console.log(']');
    }
}

const graph = new Graph(4);
graph.addVertice(0, 'A');
graph.addVertice(1, 'B');
graph.addVertice(2, 'C');
graph.addVertice(3, 'D');
console.log('Vertices: ', graph.vertices);

graph.addEdge(0, 1, 3);
graph.addEdge(0, 2, 2);
graph.addEdge(2, 1, 1);
graph.addEdge(3, 0, 4);
graph.printGraph();