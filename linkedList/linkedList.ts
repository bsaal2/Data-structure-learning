export class Node {
    value: number;
    next: Node | null;

    constructor(data: number) {
        this.value = data;
        this.next = null;
    }
}

export class LinkedList {
    root: Node | null = null;

    addNode(value: number) {
        const node = new Node(value);
        node.next = this.root;
        this.root = node;
    }

    removeHead() {
        const temp = this.root;
        if (this.root && this.root.next) this.root = this.root.next;
        return temp
    }

    reverseLinkedList() {
        let current = this.root;
        let previous: Node | null = null;

        while(current) {
            const next = current.next;
            current.next = previous;
            
            previous = current;
            current = next;
        }

        return previous;
    }
}

/** Implementation of Linked List */
/** 
const llObject = new LinkedList();
llObject.addNode(1);
llObject.addNode(2);
llObject.addNode(3);
console.log(llObject);
**/

