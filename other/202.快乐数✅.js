/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// n =>getNum(n) =>getNum(getNum(n))
// 环形链表
var isHappy = function(n) {
    if (n === 1) return true;
    const getNum = n => {
        let sum = 0;
        while (n) {
            sum += (n % 10) ** 2;
            n = ~~(n / 10);
        }
        return sum;
    };
    let slow = n,
        fast = n;
    while (fast !== 1 && getNum(fast) !== 1) {
        slow = getNum(slow);
        fast = getNum(getNum(fast));
        if (slow === fast) return false;
    }
    return true;
};
// @lc code=end