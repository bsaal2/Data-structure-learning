/** 
 * Graph implementation using Adjacency list
 * This is un-directed graph so we will automatically have path between two vertices
 * But we will be using class based way here
 */

export class Graph {
    size: number;
    adjacencyList: Record<string, Array<string>> = {};

    constructor(value: number) {
        this.size = value;
    }

    /** add vertices to particular index */
    addVertice(value: string) {
        this.adjacencyList[value] = [];
    }

    /** adding path between two vertices
     * undirected graph has path both way
     */
    addEdge(vertice: string, adjacent: string) {
        if (!(vertice in this.adjacencyList)) throw new Error('invalid vertice');
        if (!(adjacent in this.adjacencyList)) throw new Error('invalid vertice');

        this.adjacencyList[vertice].push(adjacent);
        this.adjacencyList[adjacent].push(vertice);
    }

    printGraph() {
        for (let key in this.adjacencyList) {
            let adjacentNode = `Relation of ${key}: `;
            for (let each of this.adjacencyList[key]) {
                adjacentNode = adjacentNode.concat(each, ' ');
            }
            console.log(adjacentNode);
        }
    }
}

const graph = new Graph(7);
graph.addVertice('A')
graph.addVertice('B')
graph.addVertice('C')
graph.addVertice('D')
graph.addVertice('E')
graph.addVertice('F')
graph.addVertice('G')

graph.addEdge('D', 'A')  // D - A
graph.addEdge('A', 'C')  // A - C
graph.addEdge('A', 'E')  // A - E
graph.addEdge('E', 'C')  // E - C
graph.addEdge('C', 'F')  // C - F
graph.addEdge('C', 'B')  // C - B
graph.addEdge('C', 'G')  // C - G
graph.addEdge('B', 'F')  // B - F

graph.printGraph();