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



//Math.floor() method

/*
The function Math.floor(str.length / 2) is used to calculate the index of the middle character in a string str.

Here's how it works:

str.length returns the length of the string str.
The / operator divides the length of the string by 2.
The Math.floor() function rounds down the result of the division to the nearest integer. 
This is necessary because the result of dividing an odd number by 2 will be a decimal. 
For example, if the length of the string is 5, dividing it by 2 will give 2.5. 
However, since we're interested in the index of a character, we need to round it down to 2.
The resulting value is the index of the middle character in the string.
For example, if str is "hello", then str.length is 5. The result of str.length / 2 is 2.5, but Math.floor(2.5) returns 2. So Math.floor(str.length / 2) would return 2, which is the index of the middle character "l".
*/

const input = 'hello';
const middleChar = Math.floor(input.length)
console.log(middleChar)//5

const input = 'hello';
const middleChar = Math.floor(input.length/2)
console.log(middleChar)//2

const input = 'hello';
const middleChar = Math.floor(input.length / 3)
console.log(middleChar)//1


//substring

/*
The substring() method is a built-in function in JavaScript that is used to extract a portion of a string starting from a specified index to an end index. 
The method takes two arguments: the starting index and the ending index.
Here's the syntax of the substring() method:
*/

string.substring(startIndex, endIndex)

/*
startIndex: The position of the first character to include in the returned substring. If the index is negative, the substring starts from the end of the string.

endIndex: Optional. The position of the first character to exclude from the returned substring. If omitted, the substring extends to the end of the string. 
If the index is negative, it is treated as string.length + endIndex.

In the given code, str.substring(0, middleIndex) returns the portion of the string str that starts from the beginning of the string and ends at middleIndex - 1,
which represents all characters before the middle character. And, str.substring(middleIndex + 1) returns the portion of the string str that starts 
from middleIndex + 1 and ends at the end of the string, which represents all characters after the middle character.

In other words, str.substring(0, middleIndex) and str.substring(middleIndex + 1) are used to extract the two portions of the original string that surround 
the middle character, which will be used to construct the modified string with the capitalized middle character.
*/

const input = 'hello';
const middleChar = Math.floor(input.length / 2);
const capitalizedStr = input.substring(0, middleChar)
console.log(capitalizedStr)//he

const input = 'hello';
const middleChar = Math.floor(input.length / 2);
const capitalizedStr = input.substring(0, middleChar) + input.charAt(middleChar)
console.log(capitalizedStr)//hel

const input = 'hello';
const middleChar = Math.floor(input.length / 2);
const capitalizedStr = input.substring(0, middleChar) + input.charAt(middleChar).toUpperCase()+ input.substring(middleChar + 1);
console.log(capitalizedStr)//heLlo
