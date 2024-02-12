class Node {
    val: number;
    left: Node | null;
    right: Node | null;

    constructor(input: number) {
        this.val = input;
        this.left = null;
        this.right = null;
    }
}
export default Node;