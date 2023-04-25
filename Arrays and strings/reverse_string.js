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
