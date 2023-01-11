/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    // "/a/./b/../../c/"
    const stack = [];
    // "/" 和 "." 没有任何作用，".."才是起到弹栈的作用
    const paths = path.split('/');
    for (const n of paths) {
        if (n === '..') {
            stack.pop();
        } else if (n && n !== '.') {
            stack.push(n);
        }
    }
};
// @lc code=end