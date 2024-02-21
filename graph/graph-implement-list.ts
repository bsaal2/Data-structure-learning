/** 
 * Graphs can be implement with the use of Adjacency List
 * In Adjacency list, we need to create an array of size (number of vertices)
 * in each index we add the vertices and its connected vertices
 */

/** 
 * Vertices/Nodes: A, B, C, D
 * Need to create the matrix of the size 4 * 4
 * This implementation is based on the w3school
 */

export type stringUnionType = 'A' | 'B' | 'C' | 'D';
const vertices: Array<stringUnionType> = ['A', 'B', 'C', 'D'];
const adjacencyList: Record<stringUnionType, Array<stringUnionType>> = {
    A: ['B', 'C', 'D'],
    B: ['A', 'C'],
    C: ['A', 'B'],
    D: ['A'],
};