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


//2.
const input = 'hello';
const output = input.split('').map((char, index, array) => {
  return array[array.length - index - 1];
}).join('');
console.log(output); // "olleh"

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
