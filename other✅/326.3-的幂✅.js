/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // return n>0 && 1162261467%n==0

    if (!n) return false;
    let l = 0,
        h = n;
    while (l < h) {
        const m = l + ((h - l) >> 1);
        const q = 3 ** m;
        if (q === n) return true;
        else if (q > n) h = m;
        else l = m + 1;
    }
    return false;
};
// @lc code=end