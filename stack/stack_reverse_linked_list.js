const Stack = require('./stack_implement_linkedList');
const StackObj = new Stack();

// Input : 1->2->3->4
// Output : 4->3->2->1

StackObj.push(1);
StackObj.push(2);
StackObj.push(3);
StackObj.push(4);
console.log('Stack size', StackObj.size);
console.log('Top of the stack', StackObj.peek());
console.log('Printing all elements')
StackObj.printAllElements();

console.group('Reversing stack');
console.time('Reversing Stack');
StackObj.reverse();
console.timeEnd('Reversing Stack');
console.log('Print reversed elements');
StackObj.printAllElements();