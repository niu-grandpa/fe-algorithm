/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // let arr = new Array(26).fill(0)
    // let base = 'a'.charCodeAt(0)
    // for(const m of magazine){
    //   arr[m.charCodeAt()-base]++
    // }
    // for(const r of ransomNote){
    //   arr[r.charCodeAt()-base]--
    // }
    // return arr.every(v=>v>=0)
    /**切割字符法 */
    for (const w of ransomNote) {
        if (!magazine.includes(w)) return false;
        magazine = magazine.replace(w, '');
    }
    return true;
    /** 我的解法*/
    // const ransomNoteMap = {};
    // const magazineMap = {};
    // const maxLen = Math.max(ransomNote.length, magazine.length);
    // for (let i = maxLen; i >= 0; i--) {
    //     const note = ransomNote[i];
    //     const maga = magazine[i];
    //     if (note) ransomNoteMap[note] = (ransomNoteMap[note] || 0) + 1;
    //     if (maga) magazineMap[maga] = (magazineMap[maga] || 0) + 1;
    // }
    // for (const key in ransomNoteMap) {
    //     if (!(key in magazineMap) || magazineMap[key] < ransomNoteMap[key]) {
    //         return false;
    //     }
    // }
    // return true;
};
// @lc code=end