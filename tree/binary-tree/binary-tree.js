const Queue = require('../../Queue/queue_array');

function BinaryTree() {
    this.root = null;
    this.size = 0;
    this.degree = 0;
    this.height = 0;
}

/** Print all nodes value */
BinaryTree.prototype.printAllNodes = function(current) {
    if (!current) return;

    console.log(current.value);
    this.size++;

    const childrens = [];
    if (current.left) childrens.push(current.left);
    if (current.right) childrens.push(current.right);

    if (childrens.length) {
        for (let current of childrens) {
            this.printAllNodes(current);
        }
    }
}

/** Print the parent node of each node */
BinaryTree.prototype.printParentNode = function(current) {
    if (!current) return;

    const children = [];
    if (current.left) children.push(current.left);
    if (current.right) children.push(current.right);

    if (children.length) console.log(current.value);

    for (let child of children) {
        this.printParentNode(child);
    }
}

/** Print leaf node */
BinaryTree.prototype.printExternalOrLeafNode = function(current) {
    if (!current) return;

    const children = [];
    if (current.left) children.push(current.left);
    if (current.right) children.push(current.right);

    if (!children.length) console.log(current.value);

    for (let child of children) {
        this.printExternalOrLeafNode(child);
    }
}

/** Print degree of each node */
BinaryTree.prototype.printDegreeOfNode = function(current) {
    if (!current) return;

    let children = [];

    if (current.left) {
        children.push(current.left);
    }
    if (current.right) {
        children.push(current.right);
    }

    const nodeDegree = children.length;
    if (nodeDegree > this.degree) this.degree = nodeDegree;

    console.log('Degree of a node:', current.value, 'is: ', nodeDegree);

    for (let child of children) {
        this.printDegreeOfNode(child);
    }
}

/** Print height of the binary tree */
BinaryTree.prototype.getHeight = function(current) {
    if (!current) return 0;

    const lHeight = this.getHeight(current.left);
    const rHeight = this.getHeight(current.right);

    if (lHeight > rHeight) return lHeight + 1;
    else return rHeight + 1;
}

/** DFS: Pre-order Traversal */
BinaryTree.prototype.PreOrderTraversal = function(current) {
    if (!current) return;
    
    console.log('Node:', current.value);
    this.PreOrderTraversal(current.left);
    this.PreOrderTraversal(current.right);
}

/** DFS: In-order Traversal */
BinaryTree.prototype.InOrderTraversal = function(current) {
    if (!current) return;

    this.InOrderTraversal(current.left);
    console.log('Node: ', current.value);
    this.InOrderTraversal(current.right);
}

/** DFS: Post-order Traversal */
BinaryTree.prototype.PostOrderTraversal = function(current) {
    if (!current) return;

    this.PostOrderTraversal(current.left);
    this.PostOrderTraversal(current.right);
    console.log('Node: ', current.value);
}

BinaryTree.prototype.PrintCurrentLevelElements = function(current, level) {
    if (!current) return;

    if (level === 1) console.log('Value =>', current.value)
    else {
        this.PrintCurrentLevelElements(current.left, level - 1);
        this.PrintCurrentLevelElements(current.right, level - 1);
    }
}

/** BFS: Level Order Traversal */
BinaryTree.prototype.LevelOrderTraversal = function(current) {
    const height = this.getHeight(current);

    for (let i = 1; i <= height; i++) {
        this.PrintCurrentLevelElements(current, i);
    }
}

// BFS Traversal using Queue
BinaryTree.prototype.LevelOrderTraversalQueue = function(current) {
    if (!current) console.info('Tree is empty');

    const QueueObj = new Queue();
    QueueObj.enqueue(current);

    while(QueueObj.elements.length) {
        const node = QueueObj.dequeue();
        console.log('Node', node.value);

        if (node.left) QueueObj.enqueue(node.left);
        if (node.right) QueueObj.enqueue(node.right);
    }
}

/** BFS: Reverse Traversal
 * Traverse the node from leaf node to root node
 * Method1: Using Naive Approach
 */
BinaryTree.prototype.ReverseLevelOrderTraversal = function(current) {
    if (!current) return;

    const height = this.getHeight(current);

    for (let i = height; i > 0; i--) {
        this.PrintCurrentLevelElements(current, i);
    }
}

/* 
 Method 2: Using Queue and Stack Implementation
*/
BinaryTree.prototype.ReverseLevelOrderTraversalQueue = function(current) {
    const queue = [];
    const stack = [];

    if (!current) throw new Error('Tree is empty');

    queue.push(current);
    while (queue.length) {
        const temp = queue.shift();
        stack.push(temp);

        if (temp.left) queue.push(temp.left);
        if (temp.right) queue.push(temp.right);
    }

    while (stack.length) {
        console.log(stack.pop()?.value);
    }
}

/** Binary Tree Height: Number of vertices from the root node to deepeset leaf node
 * Using the BFS method
 * Will be using the Queue
 */
BinaryTree.prototype.BFSCalculateTreeHeight = function (current) {
    if (!current) return 0;

    const queue = [];
    queue.push(current);
    let height = 0;
    while (queue.length) {
        const size = queue.length;
        for (let i=0; i<size; i++) {
            const temp = queue.shift();
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }
        height++;
    }

    return height;
}

module.exports = BinaryTree;