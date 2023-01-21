/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
//  */
// 1. 给5  直接揣兜里
// 2. 给10  兜里有5 就给他

// 3. 给20  给一个10+5 也可以给5+5+5
//   优先给10块

var lemonadeChange = function(bills) {
    let five = 0,
        ten = 0;
    for (const bill of bills) {
        if (bill === 5) {
            five++;
        } else if (bill === 10) {
            if (!five) return false;
            five--;
            ten++;
        } else {
            if (five && ten) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};
// @lc code=end