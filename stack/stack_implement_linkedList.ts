

import { LinkedList } from '../linkedList/linkedList';

export default class Stack {
    ll = new LinkedList();
    size: number = 0;

    peek() {
        return this.ll.root?.value;
    }

    push(value: number) {
        this.size++;
        return this.ll.addNode(value);
        return this.size;
    }

    pop() {
        if (!this.size) return 'stack underflow';

        this.size--;
        return this.ll.removeHead();
    }

    printAllElements() {
        let current = this.ll.root;

        const result = [];
        while(current) {
            result.push(current.value);
        }

        return result;
    }
}

// const stack = new Stack();

// stack.push(5);
// stack.push(10);
// stack.push(15);
// stack.push(20);
// console.log('Stack after adding the elements ===>', stack.printAllElements().join('->'));

// console.log('Popping elements ====>', stack.pop());
// console.log('Stack after popped =====>', stack);
// console.log('Popping elements ====>', stack.pop());
// console.log('Stack after popped =====>', stack);
// console.log('Popping elements ====>', stack.pop());
// console.log('Stack after popped =====>', stack);
// console.log('Popping elements ====>', stack.pop());
// console.log('Stack after popped =====>', stack);
// console.log('Popping elements ====>', stack.pop());
// console.log('Stack after popped =====>', stack);

