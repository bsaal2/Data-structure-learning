function Node(value) {
    this.value = value;
    this.next = null;
}

function LinkedList() {
    this.root = null;
}

LinkedList.prototype.addNode = function(value) {
    const node = new Node(value);
    node.next = this.root;
    this.root = node;
}

LinkedList.prototype.reverseLinkedList = function() {
    let current = this.root;
    let previous = null;

    while(current) {
        const next = current.next; // Have a confusion in these two lines
        current.next = previous;

        previous = current;
        current = next;
    }

    this.root = previous;
}

/** Implementation of Linked List */
const llObject = new LinkedList();
llObject.addNode(1);
llObject.addNode(2);
llObject.addNode(3);
console.log(llObject);

module.exports = {
    Node,
    LinkedList,
}

