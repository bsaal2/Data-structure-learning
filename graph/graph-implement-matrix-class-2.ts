/** 
 * Directed and Weighted Graph implementation
 * Using Adjacency Matrix
 */

export default class Graph {
    size: number;
    vertices: Array<string> = [];
    matrix: Array<Array<number>> = [];
    visited = new Map<number, boolean>;

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

    dfsUtil(root: number) {
        this.visited.set(root, true);
        console.log(this.vertices[root]);

        for (let i = 0; i < this.size; i++) {
            if (this.matrix[root][i] && !this.visited.has(i)) this.dfsUtil(i);
        }
    }

    dfsTraversal(root: string) {
        const rootIndex = this.vertices.indexOf(root);

        this.dfsUtil(rootIndex);
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
console.log('Vertices: ', graph.vertices);

graph.addEdge(3, 0, 1)  // D -> A
graph.addEdge(3, 4, 1)  // D -> E
graph.addEdge(4, 0, 1)  // E -> A
graph.addEdge(0, 2, 1)  // A -> C
graph.addEdge(2, 5, 1)  // C -> F
graph.addEdge(2, 6, 1)  // C -> G
graph.addEdge(5, 1, 1)  // F -> B
graph.addEdge(1, 2, 1)  // B -> C
graph.printGraph();
graph.dfsTraversal('D');