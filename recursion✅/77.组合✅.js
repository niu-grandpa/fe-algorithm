/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    const backtrack = (temp, i) => {
        if (temp.length === k) {
            ans.push(temp.slice());
            return;
        }
        for (let j = i; j <= n - k + temp.length + 1; j++) {
            temp.push(j);
            backtrack(temp.slice(), j + 1);
            temp.pop();
        }
    };
    backtrack([], 1);
    return ans;
};
// @lc code=end