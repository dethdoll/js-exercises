/** Javascript function that checks if an input is an array or not **/
function checkInput(input) {
  'use strict';
  if (toString.call(input) === "[object Array]") {
    return true;
  }
  return false;
}

checkInput(['1', 'test', 3, 5]);