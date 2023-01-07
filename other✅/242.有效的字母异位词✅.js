/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0) + 1;
        map[t[i]] ? (map[t[i]] -= 1) : (map[t[i]] = -1); // 如果不赋值为-1，有个别值永远都是1
    }
    return Object.values(map).every(item => item === 0);
};
// @lc code=end