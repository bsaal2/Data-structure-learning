const Stack = require('./stack_queues');
const StackObj = new Stack();

/** Input Elements
 * 1, 2, 3, 4
 */
console.group('Stack Push operation:')
StackObj.push(1);
StackObj.push(2);
StackObj.push(3);
StackObj.push(4);
console.groupEnd('Stack Push operation:')

console.info('Stack top elements: ', StackObj.peek())
StackObj.printAllElements();

console.group('Stack Pop operation:')
console.log(StackObj.pop());
console.log(StackObj.pop());
console.log(StackObj.pop());
console.groupEnd('Stack Pop operation:')

console.info('Stack top elements: ', StackObj.peek())
