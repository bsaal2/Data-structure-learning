/**
 * Create Tree Data structure
 */

class Node {
    children = [];
    constructor(value) {
        this.data = value;
    }
    
    addChildren(childNode) {
        this.children.push(childNode);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    printAllNode(node) {
        if (!node) return;

        console.log(node.data);
        if (node.children && node.children.length > 0) {
            for (let child of node.children) {
                this.printAllNode(child);
            }
        }
    }
    
    printParentNodes(node) {
        //console.log("Processing Node ===> ", node.data);
        if (!node) return;
        
        if (node.children && node.children.length > 0) {
          console.log(node.data);
          for (let child of node.children) {
             this.printParentNodes(child);
          }
        }
    }

    printLeafNodeOnly(node) {
        if (!node) return;

        if (node.children && node.children.length > 0) {
            let child;
            for(child of node.children) {
                this.printLeafNodeOnly(child);
            }
        }
        else console.log(node.data);
    }
}
const tree = new Tree();
const node1 = new Node(1);
tree.root = node1;

const node2 = new Node(2);
const node3 = new Node(3);
node1.addChildren(node2); // since node2 is child of node1
node1.addChildren(node3);

// Children of node2
const node4 = new Node(4);
node2.addChildren(node4);

// Children of node3
const node5 = new Node(5);
node3.addChildren(node5);

console.log("============All Nodes===============");
tree.printAllNode(tree.root); // This prints all the node

console.log("============Parent Nodes=============");
tree.printParentNodes(tree.root); // This prints only the parent nodes

console.log("============Leaf Nodes=============");
tree.printLeafNodeOnly(tree.root); // This prints only the parent nodes

/***
 * Result
 *         1
 *       /    \
 *      2      3
 *     /        \
 *    4          5
 * 
 */  

module.exports = {
    Node,
    Tree
}