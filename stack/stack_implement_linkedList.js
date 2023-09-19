
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
    return this.root.value;
}

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