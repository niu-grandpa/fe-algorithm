/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let cur = 0,
        next = 0,
        ans = 0;
    // 数组最后一个数不用跳
    for (let i = 0; i < nums.length - 1; i++) {
        // 下标+当前数=跳数，也就是找整个数组谁的下标+当前数最大
        next = Math.max(next, nums[i] + i);
        // 下标走到之前眺的最大数位置，不得已再跳一次
        if (i === cur) {
            cur = next;
            ans++;
        }
    }
    return ans;
};
// @lc code=end