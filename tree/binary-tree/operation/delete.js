const BinaryTree = require('./../binary-tree');
const Node = require('../node');

function deleteLastNode(root, lastNode) {
    const queue = [];
    queue.push(root);

    while (queue.length) {
        const poped = queue.shift();

        if (poped.value == lastNode.value) {
            return;
        }

        if (poped.left && poped.left.value == lastNode.value) {
            poped.left = null;
            return;
        }

        if (poped.right && poped.right.value == lastNode.value) {
            poped.right = null;
            return;
        }

        if (poped.left) queue.push(poped.left);
        if (poped.right) queue.push(poped.right);
    }
}

BinaryTree.prototype.delete = function(current, deleteNodeKey) {
    if (!current) return;

    /** Handling the case if the tree has only one node */
    if (!current.left && !current.right) {
        current = null;
        return;
    }

    let lastNode = null;
    let foundNode = null;
    const queue = [];
    queue.push(current);

    while (queue.length) {
        lastNode = queue[0];
        const popedNode = queue.shift();

        if (popedNode.value == deleteNodeKey) foundNode = popedNode;

        if (popedNode.left) {
            queue.push(popedNode.left);
        }
        if (popedNode.right) {
            queue.push(popedNode.right);
        }
    }

    if (foundNode) {
        const key = lastNode.value;
        deleteLastNode(current, lastNode);
        foundNode.value = key;
    }

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
node5.left = node6;
node5.right = node7;

console.group('before inorder traversal');
TreeObj.InOrderTraversal(TreeObj.root);
console.groupEnd('before inorder traversal')

TreeObj.delete(TreeObj.root, 8);

console.group('after inorder traversal');
TreeObj.InOrderTraversal(TreeObj.root);
console.groupEnd('after inorder traversal')

