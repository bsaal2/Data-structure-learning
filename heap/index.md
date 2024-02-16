## Introduction

1. Heap is a complete binary tree
2. It either has the max or min value in the node compared to its child and same holds true for each node


## Properties

1. complete binary tree
2. heap property: either max or min value than child
3. parent-child relationship: left child = 2i+1 and right child = 2i+2
4. efficient insertion and removal
5. 


### Operations 

#### 1. Insertion

New elements are added to the last in the level. Once added, it might not follow the heap properties, so need to perform the heapify

#### 2. Deletion

Root element are deleted then replaced with the last element of the last level. Then heapify is performed.

#### 3. Peek

Getting the max/min element i.e from the root node

#### 4. Heapify

process to re-arrange the heap and make it follow the heap property.


### Types of Heap

#### 1. Min-Heap

Each node has the value min than its child and same hold true for all nodes

#### 2. Max-Heap

Each node has the value max than its child and same hold true for all nodes