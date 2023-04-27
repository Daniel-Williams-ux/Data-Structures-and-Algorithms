//1. What is an array? How is it different from a string?
/*
An array is a collection of elements of the same data type that are stored in contiguous memory locations.
A string is a sequence of characters that represents textual data. 
Arrays and strings are both similar in that they can be indexed and iterated over.
*/
// Example of an array
let arr = [1, 2, 3, 4, 5];

// Example of a string
let str = "Hello, world!";


//2. Can you explain the difference between a fixed-size array and a dynamic array?
/*
A fixed-size array has a predetermined number of elements and cannot be resized once it is created. 
A dynamic array, on the other hand, can grow or shrink in size as needed.
*/
// Example of a fixed-size array
let arr = new Array(5); // creates an array with 5 undefined elements
const fruits = new Array("Apple", "Banana");
console.log(fruits)//[ 'Apple', 'Banana' ]

// Example of a dynamic array
let arr = []; // creates an empty array
arr.push(1); // adds an element to the end of the array


//3. What is the time complexity of accessing an element in an array? How does it compare to the time complexity of accessing an element in a linked list?
/*
The time complexity of accessing an element in an array is O(1), which means it takes constant time regardless of the size of the array. 
In contrast, accessing an element in a linked list takes O(n) time in the worst case, where n is the length of the list.
*/

// Example of accessing an element in an array
let arr = [1, 2, 3, 4, 5];
let element = arr[2]; // gets the element at index 2 (which is 3)

// Example of accessing an element in a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
let current = head;
while (current !== null) {
  if (current.value === 2) {
    let element = current.value; // gets the element with value 2
    break;
  }
  current = current.next;
}
