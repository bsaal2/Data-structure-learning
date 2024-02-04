/** 
 * Stack implementation using Linked List
 * Attributes: length
 * Operation: push and pop
 */

const LinkedList = require('../linked-list');
class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    push(value) {
        this.linkedList.addNode(value);
        return this.linkedList.size;
    }

    pop() {
        if (this.linkedList.size === 0) {
            console.log('stack underflow');
            return;
        }

        return this.linkedList.removeFirstNode();
    }
}

const stackObj = new Stack();
stackObj.push(1);
stackObj.push(2);
stackObj.push(3);
console.log(stackObj);

console.log(stackObj.pop());
console.log(stackObj.pop());
console.log(stackObj.pop());
console.log(stackObj.pop());