const {
    LinkedList
} = require('./linkedList');

const llObject = new LinkedList();
llObject.addNode(1);
llObject.addNode(2);
llObject.addNode(3);
console.log(llObject); // 3 -> 2 -> 1

/** Reverse a Linked List */
llObject.reverseLinkedList();
console.log(llObject);