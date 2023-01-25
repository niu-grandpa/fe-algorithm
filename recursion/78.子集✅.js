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
    // 递归法
    // const dfs = (i, temp) => {
    //     if (i === nums.length) {
    //         ans.push(temp.slice());
    //         return;
    //     }
    //     temp.push(nums[i]);
    //     dfs(i + 1, temp.slice());
    //     temp.pop();
    //     dfs(i + 1, temp.slice());
    // };
    // dfs(0, []);
    // 回溯法
    const backtrack = (temp, i) => {
        ans.push(temp.slice());
        if (temp.length === nums.length) return;
        for (let j = i; j < nums.length; j++) {
            temp.push(nums[j]);
            backtrack(temp.slice(), j + 1);
            temp.pop();
        }
    };
    backtrack([], 0);
    return ans;
};
// @lc code=end