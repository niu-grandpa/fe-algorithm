/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    // 分割问题
    // 101023
    // 1|  12|  101| 后面直接终止
    // 0|
    const ans = [];
    const backtrack = (temp, i) => {
        if (temp.length > 4) return;
        if (temp.length === 4 && i === s.length) {
            ans.push(temp.join('.'));
            return;
        }
        for (let j = i; j < s.length; j++) {
            const str = s.substr(i, j - i + 1);
            if (parseInt(str) > 255) break;
            // 0开头的无效地址
            if (str.length > 1 && str[0] === '0') break;
            temp.push(str);
            backtrack(temp.slice(), j + 1);
            temp.pop();
        }
    };
    backtrack([], 0);
    return ans;
};
// @lc code=end