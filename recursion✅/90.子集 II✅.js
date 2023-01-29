/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    // 在递归时，若发现没有选择上一个数，
    // 且当前数字与上一个数相同，则可以跳过当前生成的子集。
    nums.sort((a, b) => a - b);
    const ans = [];
    const dfs = (prev, i, temp) => {
        if (i === nums.length) {
            ans.push(temp.slice());
            return;
        }
        dfs(false, i + 1, temp.slice());
        if (!prev && i && nums[i] === nums[i - 1]) return;
        temp.push(nums[i]);
        dfs(true, i + 1, temp.slice());
    };
    dfs(false, 0, []);
    return ans;
};
// @lc code=end