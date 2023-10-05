/** Queue implementation using Linked List
 * Format should be as follows:
 * (front) 1 -> 2 -> 3 (rear)
 * Because if you make the front opposite then enqueue operation would be difficult
 */

const Node = require('../node');


function Queue() {
    this.front = this.rear = null;
    this.size = 0;
}

Queue.prototype.enqueue = function(value) {
    const nodeObj = new Node(value);

    if (this.size === 0) {
        this.front = this.rear = nodeObj;
        this.size++;
        return this.size;
    }

    this.rear.next = nodeObj; // cannot use front here because rear keeps moving which is necessary to point previous value
    this.rear = nodeObj;
    this.size++;
    return this.size;
}

Queue.prototype.dequeue = function() {
    const temp = this.front.value;
    this.front = this.front.next;
    this.size--;
    return temp;
}

Queue.prototype.peek = function() {
    return this.front.value;
}

Queue.prototype.isEmpty = function() {
    return !this.size;
}

Queue.prototype.printAllElements = function() {
    let current = this.front;

    let output = '';
    while(current) {
        output = output.concat(current.value.toString(), ' -> ');

        current = current.next;
    }

    console.log(output);
}

module.exports = Queue;

