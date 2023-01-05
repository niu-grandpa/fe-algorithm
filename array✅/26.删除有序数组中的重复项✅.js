/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // [1,1,2,2,3,3,3]
    // [1,2,3,2,3,3,4,]
    // [1,2,3,4,3,4,4]
    // slow fast
    // []
    // 快慢指针
    if (!nums.length) return 0;
    let slow = 0,
        fast = 0;
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            nums[++slow] = nums[fast];
        }
        fast++;
    }
};
// @lc code=end