//1.
function reversedString(str) {
  let revStr = "";
  for (let i =str.length - 1; i >= 0; i-- ) {
    revStr+=str[i];
  }
  return revStr;
}

const input = 'hello';
const output = reversedString(input);
console.log(output);

/*
The time complexity of this solution is O(n), where n is the length of the input string, because we iterate over each character in the string once.
The space complexity is also O(n), because we create a new string of length n to store the reversed string.
*/


//2.
const input = 'hello';
const output = input.split('').map((char, index, array) => {
  return array[array.length - index - 1];
}).join('');
console.log(output); // "olleh

/*Time Complexity*/
/*
The time complexity of this code is O(n), where n is the length of the input string.

The code first splits the input string into an array of characters, which takes O(n) time as each character needs to be visited once. 
Then, the map() function is called on the array, which also takes O(n) time as it applies a function to each element of the array. 
In this case, the function accesses the element at the opposite end of the array, so it needs to calculate the index for each element, which takes constant time. 
Finally, the reversed array is joined back into a string, which takes O(n) time as each character needs to be appended to the output string.

Therefore, the overall time complexity of this code is O(n)
.*/

/*
The runtime of O(n) means that the time required for the algorithm to complete increases linearly with the size of the input. In other words, 
if the input size is doubled, the time required to complete the algorithm will also roughly double.

Whether O(n) is a good runtime depends on the context of the problem and the specific requirements of the application. 
In some cases, an O(n) algorithm may be considered very efficient, while in other cases, it may be too slow.

For example, for small inputs or applications that are not time-critical, an O(n) algorithm may be perfectly adequate. 
On the other hand, for large inputs or applications that require fast processing, a more efficient algorithm with a faster runtime, 
such as O(log n) or O(1), may be necessary.

In general, the best runtime depends on the specific problem and requirements of the application, and different algorithms may have different tradeoffs
between runtime and other factors such as memory usage, code complexity, and maintainability.
*/

//Breakdown
const input = 'hello';
const output = input.split("")
console.log(output);// [ 'h', 'e', 'l', 'l', 'o' ]
//In the code above, the split('') method is used to split the input string into an array of characters.


onst input = 'hello';
const output = input.split("").map((char, index, array) => {
  return array[array.length - index - 1];
})
console.log(output)//[ 'o', 'l', 'l', 'e', 'h' ]
/*Then, the map() function is called on this array, with the callback function that takes three parameters: char (the current character being processed), 
index (the index of the current character in the array), and array (the array being processed).The callback function returns the character at the opposite 
end of the string by accessing the character at array.length - index - 1 index. */

const input = 'hello';
const output = input.split("").map((char, index, array) => {
  return array[array.length - index - 1];
}).join('')
console.log(output)// "olleh"
//Finally, the join('') method is used to convert the array back to a string.


//Troubleshooting
const input = 'hello';
const output = input.map((char, index, array) => {
  return array[array.length - index - 1];
}  
     
    /*Got this error: TypeError: input.map is not a function
    at Object.<anonymous> (/home/runner/Interview/index.js:2:22)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)*/

//The .map() method is an array method that can be used to apply a function to each element of an array and return a new array with the results. 
//However, in your code, you are trying to use the .map() method on a string variable input, which is not an array and does not have a .map() method.

//To fix this error and reverse a string using the map() method, you can first convert the string to an array of characters using the split() method, 
//and then use the map() method to reverse the order of the characters in the array.
                         
 /*
 Both the map() function and the for loop have their own advantages and disadvantages, and the choice between them ultimately depends on the context in which 
 they are used.

The map() function is a higher-order function that creates a new array by applying a function to each element of an existing array. 
It provides a concise and declarative way of transforming arrays, and it is often easier to read and understand than a for loop. In addition,
the map() function is a pure function, which means that it does not modify the original array.

On the other hand, a for loop is a more general-purpose looping construct that can be used to iterate over any iterable object, not just arrays. 
It provides more fine-grained control over the looping process, such as the ability to skip or break out of the loop based on certain conditions. 
A for loop is often more performant than a map() function for very large arrays, because it avoids the overhead of creating a new array.

In general, if you need to transform an array into a new array, and readability is a priority, then the map() function is a good choice. 
However, if you need more fine-grained control over the looping process, or if you are working with very large arrays, then a for loop may be a better choice.
*/
