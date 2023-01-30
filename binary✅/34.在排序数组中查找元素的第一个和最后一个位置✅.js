/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    // 分两半进行二分
    const search = toLeft => {
        let l = 0,
            h = nums.length - 1,
            ans = -1;
        while (l <= h) {
            const m = l + ((h - l) >> 1);
            if (nums[m] === target) {
                ans = m;
                toLeft ? (h = m - 1) : (l = m + 1);
            } else if (nums[m] > target) {
                h = m - 1;
            } else {
                l = m + 1;
            }
        }
        return ans;
    };
    return [search(true), search(false)];
};
// @lc code=end