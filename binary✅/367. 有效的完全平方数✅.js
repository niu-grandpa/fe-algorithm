/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (!num) return false;
    let l = 0,
        h = num;
    while (l <= h) {
        const m = l + ((h - l) >> 1);
        const q = m ** 2;
        if (q === num) return true;
        else if (q > num) h = m - 1;
        else l = m + 1;
    }
    return false;
};
// @lc code=end