/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("")
}
reverseString("hello");

//Tests
reverseString("hello") //should return a string.
reverseString("hello") //should return the string olleh.
reverseString("Howdy") //should return the string ydwoH.
reverseString("Greetings from Earth") //should return the string htraE morf sgniteerG.




function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length-1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
reverseString("hello");

//Tests
reverseString("hello") //should return a string.
reverseString("hello") //should return the string olleh.
reverseString("Howdy") //should return the string ydwoH.
reverseString("Greetings from Earth") //should return the string htraE morf sgniteerG.
