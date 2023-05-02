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

/*case 1    
Input        
x =
121
Output
true
Expected
true 

case 2
Input
x =
-121
Output
false
Expected
false

case 3
Input
x =
10
Output
false
Expected
false
*/


//Optimizing the solution using edge case
const isPalindrome = function(x) {
  return x < 0 ? false : (x === +x.toString().split("").reverse().join(""))
}

const output = isPalindrome('121');
console.log(output);
