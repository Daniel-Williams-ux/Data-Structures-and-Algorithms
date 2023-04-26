/*
charAt(0) is a method in JavaScript that returns the character at the specified index of a string. 
In this case, the parameter 0 refers to the index of the first character of the string.
So, charAt(0) is used to retrieve the first character of a string. For example, 
if str is a string variable, then str.charAt(0) would return the first character of the string.
For instance, if str is 'hello', then str.charAt(0) would return 'h'.
*/

const input = 'hello';
const output = input.charAt(0);
console.log(output)//h

const input = 'hello';
const output = input.charAt(4);
console.log(output)//o

//slice
const input = 'hello';
const output = input.slice(0);
console.log(output)//hello

const input = 'hello';
const output = input.slice(1);
console.log(output)//ello

const input = 'hello';
const output = input.slice(2);
console.log(output)//llo and so on


//Convert the first letter to capilal letter
const input = 'hello';
const output = input.charAt(0)
console.log(output)//h

const input = 'hello';
const output = input.charAt(0).toUpperCase()
console.log(output)//H

const input = 'hello';
const output = input.charAt(0).toUpperCase() + input.slice(1)
console.log(output)//Hello
