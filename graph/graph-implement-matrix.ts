/** 
 * Graphs can be implement with the use of Adjacency Matrix
 * In the un-directed graph, we can create the relation between the one vertex to another
 * If there is edge connected then we put the value 1 else 0
 */

/** 
 * Vertices/Nodes: A, B, C, D
 * Need to create the matrix of the size 4 * 4
 */

const vertices: Array<string> = ['A', 'B', 'C', 'D'];
const AdjacencyMatrix: Array<Array<number>> = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 0],
];

for (let index in AdjacencyMatrix) {
    console.log(`Edge of vertices: ${vertices[index]}: ${AdjacencyMatrix[index]}`);
}