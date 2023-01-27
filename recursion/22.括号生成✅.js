/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    const dfs = (temp, l, r) => {
        if (l === n && r === n) {
            ans.push(temp);
            return;
        }
        if (l < n) dfs(temp + '(', l + 1, r);
        if (r < l && r < n) dfs(temp + ')', l, r + 1);
    };
    dfs('', 0, 0);
    return ans;
};
// @lc code=end