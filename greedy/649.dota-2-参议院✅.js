/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    // 比较栈

    // 胜利队列
    const queue = senate.split('');
    const stack = [];
    while (queue[0]) {
        const s = queue.shift();
        if (!stack.length || stack[stack.length - 1] === s) {
            stack.push(s);
        } else {
            queue.push(stack.pop());
        }
    }
    return stack[0] === 'R' ? 'Radiant' : 'Dire';
};
// @lc code=end