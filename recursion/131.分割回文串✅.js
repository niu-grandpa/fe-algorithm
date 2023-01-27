/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // 判断回文
    // 分割问题
    // h e  l   lloworld //排列组合
    // aab
    // a  aa aab
    // a  b   null
    // b
    const isSame = (l, h) => {
        for (let i = l, j = h; i < j; i++, j--) {
            if (s[i] !== s[j]) return false;
            return true;
        }
    };
    const ans = [];
    const backtrack = (temp, i) => {
        if (i === s.length) {
            ans.push(temp.slice());
            return;
        }
        for (let j = i; j < s.length; j++) {
            // 子串是否回文
            if (!isSame(i, j)) continue;
            const str = s.substr(i, j - i + 1);
            temp.push(str);
            backtrack(temp.slice(), j + 1);
            temp.pop();
        }
    };
    backtrack([], 0);
    return ans;
};
// @lc code=end