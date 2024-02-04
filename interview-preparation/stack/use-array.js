/** 
 * Create Stack class
 * Operations are:
 * 1. push
 * 2. pop
 * Attributes: length
 * Principle: LIFO
 */

function Stack() {
    this.list = [];
}

Stack.prototype.length = function() {
    return this.list.length;
}

Stack.prototype.push = function(value) {
    return this.list.push(value);
}

Stack.prototype.pop = function() {
    if (this.length() === 0) {
        console.log('Stack underflow');
        return;
    }

    return this.list.pop();
}

const stackObj = new Stack();

// Add Elements
stackObj.push(1);
stackObj.push(2);
stackObj.push(3);
console.log(stackObj);

console.log(stackObj.pop());
console.log(stackObj.pop());
console.log(stackObj.pop());
stackObj.pop();
console.log(stackObj);

