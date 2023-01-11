/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // return s.trim().split(' ').filter(v=>v).reverse().join(' ')
    const words = s.trim().split(' ');
    const stack = [];
    let h = words.length - 1;
    while (h >= 0) {
        words[h] !== '' && stack.push(words[h]);
        h--;
    }
    return stack.join(' ');
    // let left = 0;
    // let right = s.length - 1;
    // let queue = [];
    // let word = '';
    // while (s.charAt(left) === ' ') {
    //     left++;
    // }
    // while (s.charAt(right) === ' ') {
    //     right--;
    // }
    // while (left <= right) {
    //     let ch = s.charAt(left);
    //     if (ch == ' ' && word) {
    //         queue.unshift(word);
    //         word = '';
    //     } else if (ch !== ' ') {
    //         word += ch;
    //     }
    //     left++;
    // }
    // queue.unshift(word);
    // return queue.join(' ');
};
// @lc code=end