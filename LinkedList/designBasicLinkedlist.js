function myLinkedList(){
    this.head = null
    this.size = 0
}
function Node(val){
    this.val = val
    this.next = null
}
const list = new myLinkedList()
const node1 = new Node(10)
const node2 = new Node(20)
const node3 = new Node(30)
node1.next = node2
node2.next = node3

list.head = node1
list.size = 3

let current = list.head
while(current){
    console.log(current.val)
    current = current.next
}



//      Design and implement a simple singly linked list using basic building blocks like nodes and references (or pointers). The goal is to:

//      Define a node with a value and a pointer to the next node.
//      Create individual nodes and link them together to form a list.
//      Traverse the list from the head and print each node’s value.
//      This helps you understand how data is stored and accessed sequentially in memory using pointers or references.

//      Example:
//      Input: Create 3 nodes with values 10, 20, 30 and link them in order.

//      Output: Print values in sequence: 10 20 30