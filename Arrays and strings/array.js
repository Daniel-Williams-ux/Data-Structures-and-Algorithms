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

// Example of a dynamic array
let arr = []; // creates an empty array
arr.push(1); // adds an element to the end of the array
