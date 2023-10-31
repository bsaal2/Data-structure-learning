function BinaryTree() {
    this.root = null;
}

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

module.exports = BinaryTree;