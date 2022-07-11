function linearFunc(arr) {
  for (let i = 0; i < arr.length; i++) { //O(n) => linear 
    console.log(10000 * 10000000) //constant  O(1) => A constant is a step that doesn't scale with the input
  }
}
const arr = [1, 2, 3, 4, 5, 6]
linearFunc(arr)




//O(n^2)
function square(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
square(4)
 //Hence, Area of square = 4 * 4 = 16. This is the number of times we have to perform this code.



/*
WHY DO WE SE BIG O?
There are different ways of solving problems. We use the best possible solution to solving problems.
Big O is a framework we can use to judge which solutions are "better" than others.

WHAT MAKES SOLUTIONS "BETTER"?
1. We prefer solutions that use the least resources
     .time(duration)
     .space(memory)
 That is time and space complexity
 
 WHY CAN'T WE USE TIME(IN SECONDS) TO MEASURE?
 Different computers produce different amount of tme when a program is run. If a program is run on the same computer ther is still some degree of variaions
 
 THE SOLUTION
 1. Big O noations can objectively describe the efficiency of code without the use of concrete units
 2. Big O focus on how the time and space requirements scale.
 3. It prepare for the worst case scenario.
*/

//Analyzing Time Complexity 
const calculateAverage = (numbers) => {
  let sum = 0;// executes once no matter the size of the array hence, it will not affect our analysis
  
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    sum += number;
  }
  return sum / numbers.length; // executes once no matter the size of the array hence, it will not affect our analysis
};

console.log(calculateAverage([2, 3, 4, 1]));

  //analyzing the for loop
let i = 0 //happens once hence, it will not affect our analysis
i < numbers.length; //happens on every iteration => step 2
i++ //happens on every iteration  => step 2
 let number = numbers[i]; //happens on every iteration  => step 3
    sum += number;  //happens on every iteration  => step 4
/*basically the number of iteration of the for loop is basically the size of the for loop
there are four steps 
n * 4; where n = length of numbers(size)
Big no is only concerned with the size, so we can drop the 4
Hence the function above has the time complexity O(n)  run time where n is the length of the input array
O(n) => O of n
*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
