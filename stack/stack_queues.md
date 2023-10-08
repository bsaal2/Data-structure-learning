## Stack Implementation With Queues

We can implement the stack using Queues.

### Methods of implementation

#### 1. Using double queues

we are allowed to use multiple Queues suppose Q1 and Q2
Q1 will be the main queue to store the data. Q2 will help to maintain the correct state of the Queue Q1

##### a. Making the push operation costly

Here, when the elements is pushed, we need to make sure the elements is added on the front. Since the principle 
of the Queue is that new element is added in the back not front. To handle this we add the new element to the Q2
first and dequeue all the elements from the Q1 and enqueue them back to Queue Q2. This ensure new element is added to top always.
Lastly, Assign the Queue Q2 back to Queue Q1

`Status`: Done

##### b. Making the pop operation costly

Its the equivalent operation as the push operation. Rather than making changes to the push operation, we make the change while removing the elements.
While adding elements, all the elements are added to the Q1.
During the removing of elements, we dequeue all the elements of Q1 except last and enqueue to Q2. At last assign the Q2 back to Q1. This will removes the last elements always.

`Status`: Yet to be done

#### 2. Using the single queue

In place of multiple Queues, we have to use only single Queue in this implementation.

##### a. Making the push operation costly

In this case, we can simply add the new element to rear of the Queue. After that all remaining elements should be 
dequeue and enqueue back except newly added. This ensure the new added elements is always on top

`Status`: Yet to be done

##### b. Making the pop operation costly

In this case, while removing the element, we have to dequeue all the elements from the Queue first.
Secondly all the elements except last should be enqueue back.
This ensure lastly added elements are removed.

#### 3. Implement two Stacks using a single array

The concept is to use the same array for both stacks. so we can divide the space into two halves.
Based on this we can do the implementation

`Status`: Yet to be done