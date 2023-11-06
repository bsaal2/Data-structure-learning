function BinaryTree() {
    this.root = null;
    this.size = 0;
    this.degree = 0;
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

/** Pre-order Traversal */
BinaryTree.prototype.PreOrderTraversal = function(current) {
    if (!current) return;

    
    console.log('Node:', current.value);
    this.PreOrderTraversal(current.left);
    this.PreOrderTraversal(current.right);
}

/** In-order Traversal */
BinaryTree.prototype.InOrderTraversal = function(current) {
    if (!current) return;

    this.InOrderTraversal(current.left);
    console.log('Node: ', current.value);
    this.InOrderTraversal(current.right);
}

/** Post-order Traversal */
BinaryTree.prototype.PostOrderTraversal = function(current) {
    if (!current) return;

    this.PostOrderTraversal(current.left);
    this.PostOrderTraversal(current.right);
    console.log('Node: ', current.value);
}

module.exports = BinaryTree;