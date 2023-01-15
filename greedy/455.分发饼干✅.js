/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if (!g.length || !s.length) return 0;

    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    const combine = [...g, ...s];
    let ans = 0,
        l = g.length - 1,
        h = combine.length - 1;
    while (l >= 0 && h >= g.length) {
        if (combine[l] <= combine[h]) {
            h--;
            ans++;
        }
        l--;
    }
    return ans;
    // 饼干满足胃口尽可能大的小朋友
    // g.sort((a, b) => a - b);
    // s.sort((a, b) => a - b);
    // let ret = 0
    // let index = s.length-1
    // for(let i=g.length-1;i>=0;i--){
    //   if(index>=0 && s[index]>=g[i]){
    //     ret++
    //     index--
    //   }
    // }
    // return ret
};
// @lc code=end