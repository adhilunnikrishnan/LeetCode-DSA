/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
       let flips = 0;

    while (a > 0 || b > 0 || c > 0) {
        const abit = a & 1;
        const bbit = b & 1;
        const cbit = c & 1;

        if (cbit === 1) {
            if (abit === 0 && bbit === 0) flips++;
        } else {
            if (abit === 1) flips++;
            if (bbit === 1) flips++;
        }

        a >>= 1;
        b >>= 1;
        c >>= 1;
    }

    return flips;
};