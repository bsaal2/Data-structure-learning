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
    return !!this.elements.length;
}

module.exports = Queue;