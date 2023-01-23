/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    // 数字有重复，排列不能重复
    nums.sort((a, b) => b - a);
    const ans = [];
    const backtrack = (temp, used) => {
        if (temp.length === nums.length) {
            ans.push(temp.slice());
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            const n = nums[i];
            // 剪枝：两个相邻重复的数只选一个
            if (!used[i - 1] && n === nums[i - 1]) continue;
            if (!used[i]) {
                used[i] = true;
                temp.push(n);
                backtrack(temp.slice(), used.slice());
                used[i] = false;
                temp.pop();
            }
        }
    };
    backtrack([], []);
    return ans;
};
// @lc code=end