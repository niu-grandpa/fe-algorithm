/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    // 滑动窗口
    const n = nums.length;
    if (!n) return 0;
    let slow = 0,
        fast = 0,
        sum = 0,
        subLen = Infinity;
    while (fast < n) {
        // 速度会很慢
        // if (sum >= target) {
        //     subLen = Math.min(subLen, (fast - slow) + 1);
        //     fast = ++slow;
        //     sum = 0;
        //     continue;
        // }
        sum += nums[fast];
        while (sum >= target) {
            subLen = Math.min(subLen, (fast - slow) + 1);
            sum -= nums[slow++];
        }
        fast++;
    }
    return subLen === Infinity ? 0 : subLen
};
// @lc code=end