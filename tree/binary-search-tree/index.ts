import { Node, BinaryTree } from '../../shared';

class BinarySearchTree  extends BinaryTree {
    constructor() {
        super();
    }

    iterativeSearch(search: number) {
        let current = this.root;

        while(current) {
            if (current.val === search) return true;
            else if (current.val > search) current = current.left;
            else current = current.right;
        }

        return false;
    }

    convertSortedArrayToBST(arr: Array<number>, start: number, end: number) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);
        let node = new Node(arr[mid]);

        node.left = this.convertSortedArrayToBST(arr, start, mid-1);
        node.right = this.convertSortedArrayToBST(arr, mid + 1, end);

        return node;
    }
}

const input = [1, 2, 3, 4, 5, 6, 7];
const bst = new BinarySearchTree();
bst.root = bst.convertSortedArrayToBST(input, 0, input.length - 1);
console.log(bst.iterativeSearch(10));

//     4
//    /   \
//   2     6
//  / \   /  \
// 1   3  5   7


