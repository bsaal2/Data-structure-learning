/** 
 * Complete Binary Tree
 * a type of tree where all the levels are completely filled except last level
 * in the last level, they are filled from as left as possible
 * 
 * Create Complete Binary Tree
 * 1. Using Queue method
 * queue is used to track the inserted element in the tree
 * Algorithm
 * a. check whether tree is empty or not
 *    if empty then 
 *      i. add the element at the root of the tree. 
 *      ii. Enqueue the element in Queue
 *    else 
 *      i. Dequeue the element from the queue
 *         this ensures that the element is inserted as the child of the dequeued element
 *      ii. if !element.left then set left child. Enqueue element
 *      iii. if !element.right then set right child. Enqueue element
 *  Process this recursively.
 * 
 * 2. Using array implementation of Level Order Traversal
 */

