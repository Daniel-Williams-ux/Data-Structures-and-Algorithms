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
