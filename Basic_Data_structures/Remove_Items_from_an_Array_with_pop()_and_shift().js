//We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), 
//to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array 
//contains their values.

function popShift(arr) {
  let popped = arr.pop('complete')
  let shifted = arr.shift('challenge')
  return [shifted, popped];//[ 'challenge', 'complete' ]
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
