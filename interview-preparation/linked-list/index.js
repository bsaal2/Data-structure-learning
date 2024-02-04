function Node(data) {
    this.value = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;
}

/** 
 * Add order: 3, 2, 1
 * Head: 1, 2, 3
 * Reason: At the end the head should point to the first node so
 */
LinkedList.prototype.addNode = function (value) {
    const nodeObj = new Node(value);
    nodeObj.next = this.head;
    this.head = nodeObj;
    this.size++;
}

LinkedList.prototype.removeFirstNode = function() {
    const temp = this.head;
    this.head = this.head.next;
    this.size--;
    return temp;
}

LinkedList.prototype.reverse = function() {
    let current = this.head;
    let previous = null;

    while(current) {
        let next = current.next;

        current.next = previous;
        previous = current;

        current = next;
    }

    this.head = previous;
}

LinkedList.prototype.printAllNodeValue = function() {
    let current = this.head;

    while(current) {
        console.log(current.value);

        current = current.next;
    }
}

module.exports = LinkedList;

// const linkedListObj = new LinkedList();
// linkedListObj.addNode(3);
// linkedListObj.addNode(2);
// linkedListObj.addNode(1);
// linkedListObj.printAllNodeValue();

// linkedListObj.reverse();
// console.log('Printing in reverse order ===>')
// linkedListObj.printAllNodeValue();