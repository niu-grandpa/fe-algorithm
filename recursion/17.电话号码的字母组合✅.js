/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if (!digits) return [];
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };
    const ans = [];
    const backtrack = (temp, i) => {
        if (i === digits.length) {
            ans.push(temp);
            return;
        }
        const letter = map[digits[i]];
        for (let j = 0; j < letter.length; j++) {
            backtrack(temp + letter[j], i + 1);
        }
    };
    backtrack('', 0);
    return ans;
};
// @lc code=end