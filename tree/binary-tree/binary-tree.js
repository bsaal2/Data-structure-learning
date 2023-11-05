function BinaryTree() {
    this.root = null;
    this.degree = 0;
}

/** Print all nodes value */
BinaryTree.prototype.printAllNodes = function(current) {
    if (!current) return;

    console.log(current.value);

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

module.exports = BinaryTree;