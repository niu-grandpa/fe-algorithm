/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const dfs = temp => {
        if (temp.length === nums.length) {
            ans.push(temp.slice());
            return;
        }
        for (const n of nums) {
            if (temp.includes(n)) continue;
            temp.push(n);
            dfs(temp.slice());
            temp.pop();
        }
    };
    dfs([]);
    return ans;
};
// @lc code=end