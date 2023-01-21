/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const arr = new Array(26).fill(0);
    for (const t of tasks) {
        arr[t.charCodeAt() - 'A'.charCodeAt()]++;
    }
    const max = Math.max(...arr);
    let ans = (max - 1) * (n + 1);
    for (const i = 0; i < 26; i++) {
        if (arr[i] === max) {
            ans++;
        }
    }
    return Math.max(ans, tasks.length);
};
// @lc code=end