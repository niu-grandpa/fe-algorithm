/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let ans = 1,
        end = intervals[0][1];
    for (let i = 0; i < intervals.length; i++) {
        const inv = intervals[i];
        if (inv[0] >= end) {
            end = inv[1];
            ans++;
        }
    }
    return intervals.length - ans;
};
// @lc code=end