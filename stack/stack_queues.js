/** Concepts
 * There are multiple ways of implementing stack using Queues
 * 1. Making the push operation of stack costly
 * Lets suppose there are two queues Q1 and Q2
 * we use Q1 as the stack implementation and Q2 as the helper in order to maintain the push operations
 * Making the push operation costly here means when we push the elements then we remove the element from the
 * Q1 to Q2 and add the new element to Q1. Remove all the elements from Q2 back to Q1
 * This way the order is maintained so the pop elements happens as needed.
 * When the push operation happens then for example 
 * Step1 => number: 1
 * If the Queue1 is empty then we can simply add the elements in Queue1
 * Step2 => number:2
 * If the elements exists in Queue1 then dequeue all the elements and enqueue to Queue2
 * Add the new element 2 to Queue1. Again dequeue all the elements from Queue2 and add back to Queue1
 * Repeat the second step for all elements
 */

// Example: 1, 2, 3, 4

const Queue = require('../Queue/queue_array');

function StackWithQueue() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
}

StackWithQueue.prototype.push = function(value) {
    if (this.isEmpty()) { 
        this.queue1.enqueue(value);
        this.size++;
        return;
    }

    while(this.queue1.elements.length) {
        const element = this.queue1.dequeue();
        this.queue2.enqueue(element);
    }

    this.queue1.enqueue(value);
    while(this.queue2.elements.length) {
        const element = this.queue2.dequeue();
        this.queue1.enqueue(element);
    }
}

StackWithQueue.prototype.pop = function() {
    return this.queue1.dequeue();
}

StackWithQueue.prototype.peek = function() {
    return this.queue1.peek();
}

StackWithQueue.prototype.printAllElements = function() {
    this.queue1.printAllElements();
}

StackWithQueue.prototype.isEmpty = function() {
    return !this.queue1.elements.length;
}

module.exports = StackWithQueue;