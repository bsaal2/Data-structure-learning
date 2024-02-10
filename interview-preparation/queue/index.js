/**
 * Follows FIFO policy
 */

class Queue {
     #list;

    constructor() {
        this.#list = [];
    }

    enqueue(value) {
        return this.#list.push(value);
    }

    dequeue() {
        return this.#list.shift();
    }
}

const queueObj = new Queue();

for (let i = 1; i <= 10; i++) {
    queueObj.enqueue(i);
}

console.log(queueObj.dequeue());
