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


/*Intuition
The problem is to determine whether a given integer is a palindrome or not. the integer is first converted to string and check if the reverse of the string is 
the same as the original string.

Approach
The approach I would take is to first check if the given integer is negative, in which case it cannot be a palindrome. If it is positive, 
then I will convert it to a string and compare it with its reverse.

Complexity
Time complexity:
Time complexity: The time complexity of this approach is O(n), where n is the number of digits in the given integer.

Space complexity:
The space complexity of this approach is O(n), where n is the number of digits in the given integer. 
This is because we need to store the string representation of the integer.

Code
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
   return x < 0 ? false : (x === +x.toString().split("").reverse().join(""))
}
