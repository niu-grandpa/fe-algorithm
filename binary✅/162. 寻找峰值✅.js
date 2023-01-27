/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // arr = [3,4,5,1]
    // arr[2] = 5
    let l = 0,
        h = nums.length - 1;
    while (l < h) {
        const m = l + ((h - l) >> 1);
        if (nums[m] > nums[m + 1]) h = m;
        else l = m + 1;
    }
    return l;
};
// @lc code=end