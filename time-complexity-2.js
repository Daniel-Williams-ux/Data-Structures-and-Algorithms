const bar = (n) => {
  for (let i =0; i < 3; i++) { // 3
    for (let j = 0; j < n; j++) { //n  => 3*n=> 3n
      console.log(j);
    }
  }
  
  for (let k = 0; k < 10000; k++) {  //10000 => 1
    console.log(k);
  }
};
bar(10);

3n + 1 => O(n), where n is our input number
