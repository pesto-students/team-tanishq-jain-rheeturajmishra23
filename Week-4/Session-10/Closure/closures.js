"use strict"
function counter() {
    let count = 0;
    function innerCounter(){
      count++;
      return count;
    } 
    return innerCounter;
  }
  
  const firstCounter = counter();
  const secondCounter = counter();
  const firstValues = [];
  const secondValues = [];
  //calling firstCounter() 5 times
  for(let i = 0 ; i < 5 ; i++)
    firstValues.push(firstCounter());
  //calling secondCounter() 3 times
  for(let i = 0 ; i < 3 ; i++)
    secondValues.push(secondCounter());
  //Printing the arrays
  console.log(firstValues);
  console.log(secondValues);
  