/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const ans = [];
  const backtrack = (tmp, i) => {
    if (tmp.length === s.length) {
      ans.push(tmp);
      return;
    }
    // 判断是否非数字，进行大小写转换
    if (!parseInt(s[i])) {
      backtrack(tmp + s[i].toUpperCase(), i + 1);
      backtrack(tmp + s[i].toLowerCase(), i + 1);
    } else {
      // 数字则直接加上
      backtrack(tmp + s[i], i + 1);
    }
  };
  backtrack('', 0);
  return ans;
};
