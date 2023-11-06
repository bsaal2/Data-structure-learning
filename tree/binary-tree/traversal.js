const BinaryTree = require('./binary-tree');
const Node = require('./node');

const TreeObj = new BinaryTree();

/** Add 1 in the root */
const node1 = new Node(1);
TreeObj.root = node1;

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

console.group('preorder traversal');
TreeObj.PreOrderTraversal(TreeObj.root);
console.groupEnd('preorder traversal');

console.group('inorder traversal');
TreeObj.InOrderTraversal(TreeObj.root);
console.groupEnd('inorder traversal');

console.group('postorder traversal');
TreeObj.PostOrderTraversal(TreeObj.root);
console.groupEnd('postorder traversal');