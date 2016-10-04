/** Caculate the factorial of a number **/
function factorial(factNum) {
  'use strict';
  if (factNum === 0) {
    return 1;
  }
  return factNum * factorial(factNum - 1);
  
}

factorial(5);