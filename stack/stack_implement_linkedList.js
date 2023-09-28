
const {
    LinkedList
 } = require('../linkedList/linkedList');

function Stack() {
    this.ll = new LinkedList();
    this.size = 0;
}

Stack.prototype.push = function(value) {
    this.size++;
    this.ll.addNode(value);
    return this.size;
}

Stack.prototype.pop = function() {
    if (this.size > 0) {
        this.size--;
        const current = this.ll.root;
        this.ll.root = current.next;
        return current.value;
    }
    else {
        return 'Stack is empty';
    }
    
}

Stack.prototype.peek = function() {
    return this.ll.root.value;
}

Stack.prototype.reverse = function() {
    let current = this.ll.root; // Node -> Heap
    let previous = null; // Stack

    while(current) {
        const next = current.next; // Node -> Heap: Here the next holds the reference of the next of the current node
        current.next = previous; // Reassignment happens. Whole next node is re-assigned to the new one so previous next variable does not get updated.

        previous = current; // Assignment -> Stack
        current = next; // Assignment
    }

    this.ll.root = previous;
}

Stack.prototype.printAllElements = function() {
    let current = this.ll.root;

    const elements = []
    while(current) {
        elements.push(current.value);

        current = current.next;
    }

    console.log(elements.join('->'));
}

module.exports = Stack;

/** 
const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);
console.log('Stack after adding the elements ===>', stack);

console.log('Popping elements ====>', stack.pop());
console.log('Stack after popped =====>', stack);
console.log('Popping elements ====>', stack.pop());
console.log('Stack after popped =====>', stack);
console.log('Popping elements ====>', stack.pop());
console.log('Stack after popped =====>', stack);
console.log('Popping elements ====>', stack.pop());
console.log('Stack after popped =====>', stack);
console.log('Popping elements ====>', stack.pop());
console.log('Stack after popped =====>', stack);

*/
