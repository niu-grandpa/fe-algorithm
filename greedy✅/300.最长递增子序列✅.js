/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 贪心+二分
    // 说白了就是，1.nums[i] 比子序列末尾的数大的直接添加进去
    // 2.反之，用二分找到子序列里比 num[i] 大的那个数位置，替换掉
    const sub = [nums[0]];
    for (const n of nums) {
        if (n > sub[sub.length - 1]) {
            sub.push(n);
            continue;
        }
        let l = 0,
            h = sub.length - 1;
        while (l < h) {
            const m = l + ((h - l) >> 1);
            if (sub[m] < n) {
                l = m + 1;
            } else {
                h = m;
            }
        }
        sub[l] = n;
    }
    return sub.length;
};
// @lc code=end