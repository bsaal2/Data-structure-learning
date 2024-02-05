/** 
 * Binary Tree
 * max two nodes: left and right child
 * and root
 * Binary Tre
 *                1
 *             /      \
 *            2         3
 *           /  \      /   \
 *          4    5    6     7 
 * 
 * Reverse 
 *                1
 *             /      \
 *            3         2
 *           /  \      /   \
 *          4    5    6     7 
 * 
 */ 


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    printAllNode(current) {
        if (!current) return;

        console.log('Node: ', current.value);
        this.printAllNode(current.left);
        this.printAllNode(current.right);
    }

    printAllParentNode(current) {
        if (!current) return;

        if (current.left || current.right) console.log('Parent Node: ', current.value);
        this.printAllParentNode(current.left);
        this.printAllParentNode(current.right);
    }

    printLeafOrExternalNode(current) {
        if (!current) return;

        if (!current.left && !current.right) console.log('Leaf node: ', current.value);
        this.printLeafOrExternalNode(current.left);
        this.printLeafOrExternalNode(current.right);
    }

    reverseBinaryTre(current) {
        if (!current) return;

        if (current.left && current.right) {
            const temp = current.left;
            current.left = current.right;
            current.right = temp;
        }
        else {
            if (current.left) current.right = current.left;
            if (current.right) current.left = current.right;
        }

        this.reverseBinaryTre(current.left);
        this.reverseBinaryTre(current.right);
    }
}

const binaryTree = new BinaryTree();
const node1 = new Node(1);
binaryTree.root = node1;

const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

// binaryTree.printAllParentNode(binaryTree.root);
// binaryTree.printLeafOrExternalNode(binaryTree.root);
binaryTree.reverseBinaryTre(binaryTree.root);
binaryTree.printAllNode(binaryTree.root);
