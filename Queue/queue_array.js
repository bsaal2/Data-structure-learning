/** Queue implementation with Array */

function Queue() {
    this.elements = [];
}

// Adds element from the tail of the queue
Queue.prototype.enqueue = function(element) {
    return this.elements.push(element);
}

// Removes element from the head of the queue
Queue.prototype.dequeue = function() {
    if (this.isEmpty()) throw new Error('Queue underflow');

    return this.elements.shift();
}

Queue.prototype.peek = function() {
    return this.elements[0];
}

Queue.prototype.isEmpty = function() {
    return !this.elements.length;
}

Queue.prototype.printAllElements = function() {
    let index = 0;
    const totalElement = this.elements.length;
    if(!totalElement) console.log('Queue is empty');

    const iterator = this.elements[Symbol.iterator]();
    while(index < totalElement) {
        console.log(iterator.next().value);
        index++;
    }
}

module.exports = Queue;