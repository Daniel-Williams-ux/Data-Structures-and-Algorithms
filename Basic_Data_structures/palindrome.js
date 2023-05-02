const isPalindrome = function(x) {
  return x === x.toString().split("").reverse().join("")
}

const output = isPalindrome('olo');
console.log(output);

const isPalindrome = function(x) {
  return x === +x.toString().split("").reverse().join("")
}

const output = isPalindrome('121');
console.log(output);
