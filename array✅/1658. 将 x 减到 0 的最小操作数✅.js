/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

/**
 * @param {number[]} nums
 * @param {number} x
 */
// 从nums中找最长的子数组，其元素和等于sum−x，这里sum为nums所有元素之和。
function minOperations(nums, x) {
    const n = nums.length;
    let target = -x;
    for (const i of nums) {
        target += i;
    }
    if (target < 0) return -1;
    let slow = 0,
        fast = n,
        sum = 0,
        ans = -1;
    while (fast < n) {
        sum += nums[fast];
        while (sum > target) {
            sum -= nums[slow++];
        }
        if (sum === target) {
            ans = Math.max(ans, fast - slow + 1);
        }
    }
    return ans === -1 ? ans : n - ans;
}