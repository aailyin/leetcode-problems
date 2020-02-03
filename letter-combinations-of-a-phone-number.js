// link to problem description: https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// solution 1:
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return [];
  }
  
  digits = digits.split('');
  let map = {
    2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z']
  };
  let res = map[digits[0]];
  
  if (digits.length === 1) {
    return res;
  }
  
  let step = '', letters, newRes = [], length = digits.length;
  for(let i = 1; i < length; i++) {
    letters = map[digits[i]];
    for (let j = 0; j < res.length; j++) {
      for(let k = 0; k < letters.length; k++) {
        newRes.push(res[j] + letters[k]);
      }
    }
    res = newRes;
    newRes = [];
  }
  return res;
};
