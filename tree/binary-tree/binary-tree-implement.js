const BinaryTree = require('./binary-tree');
const Node = require('../node');

const treeObj = new BinaryTree();

/** Add 1 in the root */
const node1 = new Node(1);
treeObj.root = node1;

/** Level 1 nodes */
const node2 = new Node(2);
node1.left = node2;
const node3 = new Node(3);
node1.right = node3;

const node4 = new Node(4);
node2.left = node4;
const node5 = new Node(5);
node2.right = node5;
const node6 = new Node(6);
node3.left = node6;
const node7 = new Node(7);
node3.right = node7;

/** Print the final tree */
console.log(treeObj.root);

/** Print each element of the tree */
treeObj.printAllNodes(treeObj.root);
console.log('This size of a tree is: ', treeObj.size);

/** Print all the parent nodes */
// treeObj.printParentNode(treeObj.root);

/** Print leaf nodes */
treeObj.printExternalOrLeafNode(treeObj.root);

/** Print degree of each node
 * Print the degree of tree
 */
// treeObj.printDegreeOfNode(treeObj.root);
console.log('The degree of the tree is:', treeObj.degree);