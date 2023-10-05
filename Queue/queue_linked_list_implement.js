const Queue = require('./queue_linked_list');
const QueueObj = new Queue();

/** Input: 10, 20, 30, 40 */
QueueObj.enqueue(10);
QueueObj.enqueue(20);
QueueObj.enqueue(30);
QueueObj.enqueue(40);

QueueObj.printAllElements();

console.group('Dequeue');
console.log(QueueObj.dequeue());
console.log(QueueObj.dequeue());
console.groupEnd('Dequeue');

QueueObj.printAllElements();