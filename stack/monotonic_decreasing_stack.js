const Stack = require('./stack_implement_array');
const stackObj = new Stack();

/**
 * Monotonic Decreasing Stack
 * Elements are in order of bigger to smaller from bottom to top of the stack
 * It is used to find the next smaller number 
 */

// Input arr[] = {15, 17, 12, 13, 14, 10}

/**
 * Algorithms
 * 1. Iterate through all the elements
 * 2. Check conditions
 *    a. Whether the stack size is empty or not
 *    b. Check whether the current input is bigger than top of the stack
 *    c. If stack is not empty and current input is bigger than top of the stack then pop the element from the stack
 *    d. Repeat the step 2(c) until condition matches
 * 3. If the condition does not match then push the element to the stack
 */

/** Implementation */
const input = [15, 17, 12, 13, 14, 10];

for (let number of input) {
    while(!stackObj.isEmpty() && number > stackObj.peek()) {
        stackObj.pop();
    }

    stackObj.push(number);
}

console.log('Final result', stackObj);
// Final result is [17, 14, 10]