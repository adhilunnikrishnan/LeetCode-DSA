/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 1000000007;
    if (n <= 2) return n;

    let a = 1; 
    let b = 1; 
    let c = 2; 

    for (let i = 3; i <= n; i++) {
        let d = (2 * c + a) % MOD;
        a = b;
        b = c;
        c = d;
    }

    return c;
};