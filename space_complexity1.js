const calculateAverage = (numbers) => {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    sum += number;
  }
  return num / numbers.length;
};

//Analyzing space complexity we consider things like variables, especially objects that grow ike array, objects, hash maps
//In time complexity, we consider he number of steps
let sum  = 0; 
//The variable sum will ony be created once no matter he size of my input array. That is not going to affect my space complexity too much.

for (let i = 0; i < numbers.length; i++)  {
    let number = numbers[i];
    sum += number;
  }

  let i = 0; //only initialize once in the enire for loop
  let number = numbers[i]; //at the end of the iteration the memory of it will be freed up

/*This calculation for average does not use any additional space. 
//When software engineers refer to the term space complexity, they refer to any extra space our solution may use not including the space consumed by the 
input array
*/

//The space complexity for our solution above will be
O(1)
