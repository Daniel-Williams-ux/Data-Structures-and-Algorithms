const foo = (n) => {
  for (let a = 0; a < n / 2; a++) {  // n / 2 => O(n)
    console.log(a);
  }
  
  for (let b = 0; b < n; b++) {  // O(n) time
    for (let c = 0; c < n; c++) {  // O(n) time
      console.log(b + "," + c);
    }
  }
};

foo(10);


for (let b = 0; b < n; b++) {  // n
    for (let c = 0; c < n; c++)// n^2
      
 // A nested loop is considered multiplicarion n + n^2 => O(n^2), where n is the size of the input number
