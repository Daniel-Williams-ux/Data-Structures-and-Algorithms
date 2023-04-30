//Remember in the last challenge we mentioned that splice() can take up to three parameters? Well, you can use the third parameter, comprised of one or more element(s),
//to add to the array. This can be incredibly useful for quickly switching out an element, or a set of elements, for another.
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);//[ 10, 11, 12, 13, 14, 15 ]

//We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.

function htmlColorNames(arr) {
  const startIndex = 0;
  const amountToDelete = 2;
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
/*[
  'DarkSalmon',
  'BlanchedAlmond',
  'LavenderBlush',
  'PaleTurquoise',
  'FireBrick'
] */
