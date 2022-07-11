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
  
