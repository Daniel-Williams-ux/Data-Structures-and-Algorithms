const doubler = (items) => {
  let newArray = [];
  
  for (let i = 0; i < items.length; i++) { // n
    newArray.push(items[i]);
    newArray.push(items[i]);;
  }
  
  return newArray;
};
doubler(['a', 'b', 'c']) //['a', 'a', 'b', 'b', 'c', 'c']

//Analyzing
let newArray = []; //this arry grows nth time

newArray.push(items[i]);
newArray.push(items[i]);// for every iteration we push two instances of our array

//overall
2(n)
//using our product rule
O(n), //where n is the length of the input array
