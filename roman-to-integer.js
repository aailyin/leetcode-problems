/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, 
which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, 
the numeral for four is not IIII. Instead, the number four is written as IV. Because 
the one is before the five we subtract it making four. The same principle applies to the 
number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Constraints:
- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/
// Solution
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    
    return getNextNum(s);
    
    function getNextNum(s) {
        if (!s.length) { return 0; }
        
        switch(s[0]) {
            case 'I': {
                switch(s[1]) {
                    case 'V':
                        return 4 + getNextNum(s.substring(2));
                    case 'X':
                        return 9 + getNextNum(s.substring(2));
                    default:
                        return 1 + getNextNum(s.substring(1));
                }
                break;
            }
            case 'X': {
                switch(s[1]) {
                    case 'L':
                        return 40 + getNextNum(s.substring(2));
                    case 'C':
                        return 90 + getNextNum(s.substring(2));
                    default:
                        return 10 + getNextNum(s.substring(1));
                }
                break;
            }
            case 'C': {
                switch(s[1]) {
                    case 'D':
                        return 400 + getNextNum(s.substring(2));
                    case 'M':
                        return 900 + getNextNum(s.substring(2));
                    default:
                        return 100 + getNextNum(s.substring(1));
                }
                break;
            }
            default:
                return map[s[0]] + getNextNum(s.substring(1));
        } 
    }
};


// The smartest
var romanToInt = function(s) {
    const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let num = 0;
    
    for(let i = 0; i < s.length; i++) {
        const curr = map[s[i]], next = map[s[i+1]];
        if(curr < next) num -= curr;
        else num += curr;
    }
    return num;    
};
