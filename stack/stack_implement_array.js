
function Stack() {
   this.elements = [];
}

Stack.prototype.push = function(value) {
    return this.elements.push(value);
}

Stack.prototype.pop = function() {
    return this.elements.pop();
}

Stack.prototype.peek = function() {
    return this.elements[this.elements.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.elements.length;
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack); // Outputs: Stack { elements: [ 1, 2, 3, 4, 5 ] }

const removeElement = stack.pop();
console.log(removeElement);
console.log(stack);