// Problem: https://leetcode.com/problems/count-and-say/

// my solution:
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) { return '1'; }
    
    let res = '1', step = '', k = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < res.length; j++) {
           if(res[j] == res[j+1]) {
               while (res[j] == res[j+1]) {
                   k++;
                   j++;
               }
               step += k + res[j];
               k = 1;
           } else {
               step += '1' + res[j];
           }
        }
        res = step;
        step = '';
    }
    return res;
};
