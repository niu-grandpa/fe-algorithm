/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const ans = [];
    const dfs = (i, temp) => {
        if (i === nums.length) {
            ans.push(temp.slice());
            return;
        }
        temp.push(nums[i]);
        dfs(i + 1, temp.slice());
        temp.pop();
        dfs(i + 1, temp.slice());
    };
    dfs(0, []);
    return ans;
};
// @lc code=end