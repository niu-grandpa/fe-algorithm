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
            sum += (n % 10) ** 2; // 个位数求余结果还是它自己
            n = ~~(n / 10);
        }
        return sum;
    };
    // 用快慢指针拿平方和做对比，相等就false。实际上就是检查链表有没有环
    // 最终平方和是否等于1
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