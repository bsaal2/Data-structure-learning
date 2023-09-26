const Stack  = require('./stack_implement_array');

const stackObj = new Stack();

/** Consider an array Arr[] = {1, 4, 5, 3, 12, 10} */

const input = [1, 4, 5, 3, 12, 10];
for (let number of input) {
    while(stackObj.elements.length > 0 && number < stackObj.peek()) {
        stackObj.pop();
    }
    stackObj.push(number);
}

/** This should console 1, 3 and 10 
 * This is the monotonic increasing stack
 */
console.log(stackObj);