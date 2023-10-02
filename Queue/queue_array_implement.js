const Queue = require('./queue_array');
const QueueObj = new Queue();

/** Add Elements to Queue */
console.group('Enqueue');
console.time();
QueueObj.enqueue(7);
QueueObj.enqueue(2);
QueueObj.enqueue(6);
QueueObj.enqueue(4);
console.timeEnd();
console.groupEnd('Enqeue');


console.group('Print elements');
console.time();
QueueObj.printAllElements(); // Printing all the elements
console.timeEnd();
console.groupEnd('Print elements');

/** Removing elements from Queue */
console.group('Dequeue');
console.time();
QueueObj.dequeue();
QueueObj.dequeue()
QueueObj.dequeue();
QueueObj.dequeue();
QueueObj.printAllElements();
console.timeEnd();
console.groupEnd('Dequeue');