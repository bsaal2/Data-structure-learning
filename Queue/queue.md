## Introduction

Queue is a linear data structure that follows the First In First Out policy (FIFO) / Last in Last Out (LILO).
It maintains the two pointer front and rear. Element enters the queue from the rear and get removed from the front.
We cannot insert the element in Queue if it is full. This is called Queue overflow. Similarly, we cannot delete the 
element if the Queue is empty, which is called Queue underflow.

In real world scenario, It is like a line of customer waiting to buy the movie ticket. The person who is in the front of the line gets the ticket first and then after.

It has following operations
1. Insert element => Enqueue
2. Remove element => Dequeue
3. Peek => Get the front element
4. isEmpty => Check whether the queue is empty or not
5. printAllElements => Print all the elements of the Queue


## Types of Queue

### 1. Simple Queue
It is also called linear queue, which is the basic version of the Queue. Elements are inserted from the rear/back/tail and removed from the front/head of the queue.

### 2. Circular Queue
It is similar like a basic/linear queue but the last element is connected to the first. The main objectives of the 
circular queue is that memory is utilized in a better way. If there is any empty position in the queue then element can be easily added.

### 3. Priority Queue
Elements are added in the queue based on some priority. we can create the queue with increasing value of elements in the fact that lowest value has the highest priority and vice-versa

### 4. Dequeue
Double Ended Queue. Elements can be inserted or remote from both ends. Because of this, it may not follow the FIFO policy.


We can implement the Queue using

1. Array
2. Linked List
3. Stacks