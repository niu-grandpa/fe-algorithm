/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 全非0，就算一步一步跳，也一定能到！
    // 所以我们只需要特殊处理为0的，只要出现了0，我们就从0的位置往前去找满不满足可以跳过0的元素，如果不存在，那么直接G了啊，跳不过0就跳不到最后一个元素！
    const n = nums.length;
    if (n == 1) return false;
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] !== 0) continue;
        let j = i - 1;
        for (; j >= 0; j--) {
            if (nums[j] > i - j) break;
        }
        if (j < 0) return false;
    }
    return true;
    // 跳跃的范围
    // let step = 0;
    // for (let i = 0; i <= step; i++) {
    //     step = Math.max(step, i + nums[i]);
    //     if (step > nums.length - 1) return true;
    // }
    // return false;
};
// @lc code=end