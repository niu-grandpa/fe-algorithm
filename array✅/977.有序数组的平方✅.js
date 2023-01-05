/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 原地
var sortedSquares = function(nums) {
    const n = nums.length;
    if (!n) return [];
    const ans = new Array(n);
    let l = 0,
        h = n - 1,
        // 要倒插，正插会发现没区别
        i = n - 1;

    while (l <= h) {
        const left = nums[l] ** 2;
        const right = nums[h] ** 2;
        if (left < right) {
            ans[i] = right;
            h--;
        } else {
            ans[i] = left;
            l++;
        }
        i--;
    }
    return ans;
};
// @lc code=end