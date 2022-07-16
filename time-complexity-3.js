const boom = (n) =>  {
  for (let i = 0; i < 3; i++) { //first  = 3
    bam(n);
  }
  
  for (let k = 0; k < 10000; k++) { //second = 1
    console.log(k);
  }
};

const bam = (n) => {
  for (let j = 0; j < m; j++) { // first = n
    console.log(j);
  }
};
boom(10);

//Time complexity 
3n + 1 => O(n), //where n is the input number
