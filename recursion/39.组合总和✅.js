/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // 排序的复杂度是n*lgn
    candidates.sort();
    const ans = [];
    const backtrack = (temp, sum, i) => {
        if (sum > target) return;
        if (sum === target) {
            ans.push(temp.slice());
            return;
        }
        for (let j = i; j < candidates.length; j++) {
            const n = candidates[i];
            if (n + sum > target) continue;
            temp.push(n);
            sum += n;
            backtrack(temp.slice(), sum, j);
            temp.pop();
            sum -= n;
        }
    };
    backtrack([], 0, 0);
    return ans;
};
// @lc code=end