/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // [1,3,0,2]
    const ans = [];
    const backtrack = (temp, row) => {
        if (row === n) {
            const res = temp.map(i => {
                const arr = Array(n).fill('.');
                arr[i] = 'Q';
                return arr.join('');
            });
            ans.push(res);
            return;
        }
        for (let col = 0; col < n; col++) {
            const bad = temp.some((c, r) => {
                return c === col || r - c === row - col || r + c === row + col;
            });
            if (bad) continue;
            backtrack([...temp, col], row + 1);
        }
    };
    backtrack([], 0);
    return ans;
    // r c    row col
    // r==row c==col r-c==row-col r+c row+col
};

// @lc code=end