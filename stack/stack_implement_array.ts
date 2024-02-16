
/** Stack implementation using Array and Javascript
 * Todo: Implement the underflow and overflow concept as well
 */

export default class Stack<T>{
    elements: Array<T> = [];

    get peek() {
        return this.elements[this.elements.length - 1];
    }

    push(value: T) {
        return this.elements.push(value);
    }

    pop() {
        return this.elements.pop();
    }
}

// Commenting the code for now
// const stack = new Stack<number>();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// console.log(stack); // Outputs: Stack { elements: [ 1, 2, 3, 4, 5 ] }

// const removeElement = stack.pop();
// console.log(removeElement);
// console.log(stack);