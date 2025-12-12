/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
   if (word1.length !== word2.length) return false;

    const count = s => {
        const map = {};
        for (let ch of s) map[ch] = (map[ch] || 0) + 1;
        return map;
    };

    const c1 = count(word1);
    const c2 = count(word2);

    const set1 = new Set(Object.keys(c1));
    const set2 = new Set(Object.keys(c2));
    if (set1.size !== set2.size) return false;
    for (let ch of set1) if (!set2.has(ch)) return false;

    const freq1 = Object.values(c1).sort((a, b) => a - b);
    const freq2 = Object.values(c2).sort((a, b) => a - b);

    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }

    return true; 
};