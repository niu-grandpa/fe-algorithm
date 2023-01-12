/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const map = {
        '+': (a, b) => a + b,
        '-': (a, b) => b - a,
        '*': (a, b) => a * b,
        '/': (a, b) => (b / a) | 0,
    };
    const stack = [];
    for (const t of tokens) {
        // 遇到表达式则从栈里弹出两个数来计算
        if (map[t] !== undefined) {
            stack.push(map[t](stack.pop(), stack.pop()));
        } else {
            stack.push(parseInt(t));
        }
    }
    return stack.pop();
};