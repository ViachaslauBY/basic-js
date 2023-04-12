const { NotImplementedError } = require('../extensions/index.js');

function deleteDigit(n) {  
  const numArr =  n.toString().split('').map(el => +el); 
  let res = 0;
  for (let i = 0; i < numArr.length; i++) {
    let newArr = numArr.slice();
    newArr.splice(i, 1);
    if (res < Number(newArr.join('')))
      res = Number(newArr.join(''));
  }
  return res;  
}

module.exports = {
  deleteDigit
};
