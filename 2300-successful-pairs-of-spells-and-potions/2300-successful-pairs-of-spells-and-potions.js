/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b);
    const m = potions.length;
    const result = [];

    for (let spell of spells) {
        let left = 0, right = m - 1;
        let idx = m;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (spell * potions[mid] >= success) {
                idx = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result.push(m - idx);
    }

    return result;
};