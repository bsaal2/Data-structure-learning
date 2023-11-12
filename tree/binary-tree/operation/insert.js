const BinaryTree = require('../binary-tree');
const Node = require('../node');

/**
 * Time Complexity: O(n) where n is number of node/vertices
 */
BinaryTree.prototype.insertWithBFSQueue = function(root, insertValue) {
    if (!root) throw new Error('Empty tree');

    const queue = [];
    queue.push(root);

    while (queue.length) {
        const temp = queue.shift();

        if (!temp.left) {
            const nodeObj = new Node(insertValue);
            temp.left = nodeObj;
            break;
        }
        if (!temp.right) {
            const nodeObj = new Node(insertValue);
            temp.right = nodeObj;
            break;
        }

        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
    }
}

const TreeObj = new BinaryTree();
const node1 = new Node(1);
TreeObj.root = node1;

const node2 = new Node(2);
node1.left = node2;
const node3 = new Node(3);
node1.right = node3;

const node4 = new Node(4);
node2.left = node4;
// const node5 = new Node(5);
// node2.right = node5;
const node6 = new Node(6);
node3.left = node6;
const node7 = new Node(7);
node3.right = node7;

console.group('In order traversal before insert');
TreeObj.InOrderTraversal(TreeObj.root);
console.groupEnd('In order traversal before insert');

console.group('after insert operation');
TreeObj.insertWithBFSQueue(TreeObj.root, 5);
TreeObj.InOrderTraversal(TreeObj.root);
console.groupEnd('after insert operation');
