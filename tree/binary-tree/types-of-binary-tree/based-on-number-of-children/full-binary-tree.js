const BinaryTree = require('../../binary-tree');
const Node = require('../../node');

/** Traversal Technique: DFS */
const degreeList = []
BinaryTree.prototype.checkWhetherFullBinaryTreeOrNot = function(root) {
    if (!root) return;

    if (root.left && root.right) degreeList.push(2);
    else if (root.left || root.right) degreeList.push(1)
    else degreeList.push(0);

    this.checkWhetherFullBinaryTreeOrNot(root.left);
    this.checkWhetherFullBinaryTreeOrNot(root.right);
}

const TreeObj = new BinaryTree();
const node1 = new Node(10);
const node2 = new Node(11);
const node3 = new Node(7);
const node4 = new Node(12);
const node5 = new Node(9);
const node6 = new Node(15);
const node7 = new Node(8);

// Level 1
TreeObj.root = node1;

// Level 2
node1.left = node2;
node1.right = node5;

// Level 3
node2.left = node3;
node2.right = node4;
// node5.left = node6;
node5.right = node7;

console.group('Full Binary Tree Check');
TreeObj.checkWhetherFullBinaryTreeOrNot(TreeObj.root);
const result = degreeList.some((current) => +current === 1);
console.log('Full Binary Tree: ', !result);
console.groupEnd('Full Binary Tree Check');