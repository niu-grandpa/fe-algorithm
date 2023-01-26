/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    // 组合出 pieces 的所有排列，扁平化后与arr作比较
    let pass = false;
    const arrStr = `${arr}`;
    const backtrack = temp => {
        const tempStr = `${temp.flat()}`;
        // 剪枝：数组开头不一样的
        if (!arrStr.startsWith(tempStr)) return;
        if (temp.length === pieces.length) {
            if (tempStr === arrStr) pass = true;
            return;
        }
        for (const p of pieces) {
            if (temp.includes(p)) continue;
            temp.push(p);
            backtrack(temp.slice());
            temp.pop();
        }
    };
    backtrack([]);
    return pass;
};
// @lc code=end