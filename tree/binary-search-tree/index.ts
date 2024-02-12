import { Node, BinaryTree } from '../../shared';

class BinarySearchTree  extends BinaryTree {
    constructor() {
        super();
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
bst.preorderTraversal(bst.root);
console.log('Pre order: ', bst.preorderList);

//     4
//    /   \
//   2     6
//  / \   /  \
// 1   3  5   7


