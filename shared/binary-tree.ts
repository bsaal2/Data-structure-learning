
import {  Node } from './index';

class BinaryTree {
    root: Node | null;
    preorderList: Array<number> = [];
    inorderList: Array<number> = [];
    postorderList: Array<number> = [];

    constructor() {
        this.root = null;
    }

    preorderTraversal(current: Node | null) {
        if (!current) return;

        this.preorderList.push(current.val);
        this.preorderTraversal(current.left);
        this.preorderTraversal(current.right);
    }

    inorderTraversal(current: Node | null) {
        if (!current) return;

        this.inorderTraversal(current.left);
        this.inorderList.push(current.val);
        this.inorderTraversal(current.right);
    }

    postorderTraversal(current: Node | null) {
        if (!current) return;

        this.postorderTraversal(current.left);
        this.postorderTraversal(current.right);
        this.postorderList.push(current.val);
    }
}

export default BinaryTree;