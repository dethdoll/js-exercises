/** Javascript function that reverses a number **/
function reverseNum(argument) {
  "use strict";
  
  var numStringified = String(argument);
  
  return numStringified.split('').reverse().join('');
  
}

reverseNum(12345);


/** Check is a passed string is palindrome **/
function isPalindrome(input) {
  'use strict';
  var reverseInput = input.split('').reverse().join('');
  if (input === reverseInput) {
    return true;
  }
  return false;
}

console.log(isPalindrome("test"));
