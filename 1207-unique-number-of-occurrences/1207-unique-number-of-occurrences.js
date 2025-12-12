/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
        const freq = {};

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    const occurrences = Object.values(freq);
    const set = new Set(occurrences);

    return set.size === occurrences.length;
};