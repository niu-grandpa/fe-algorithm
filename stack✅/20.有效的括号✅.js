/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const right = ')]}';
    for (const ch of s) {
        if (stack.length && right.includes(ch)) {
            const left = stack[stack.length - 1];
            if (ch === ')' && left !== '(') return false;
            if (ch === ']' && left !== '[') return false;
            if (ch === '}' && left !== '{') return false;
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return !stack.length;
    // (([
    // 左边的括号
    // 右边的括号 ) (
    // // [   {   )  }]
};
// @lc code=end