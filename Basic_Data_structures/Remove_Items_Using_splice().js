/*
if we want to remove an element from somewhere in the middle? Or remove more than one element at once? Well, that's where splice() comes in. 
splice() allows us to do just that: remove any number of consecutive elements from anywhere in an array.
splice() can take up to 3 parameters, but for now, we'll focus on just the first 2. The first two parameters of splice() are integers which represent indexes,
or positions, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, 
we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, 
while the second parameter indicates the number of elements to delete. For example:
*/

let array = ['today', 'was', 'not', 'so', 'great'];
let removedElements = array.splice(2, 2);
console.log(array); // Output: ['today', 'was', 'great']
console.log(removedElements); // Output: ['not', 'so']

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2);
//newArray has the value ['really', 'happy'].


