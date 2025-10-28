/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) return n;

    let first = 1;  // ways to reach step 1
    let second = 2; // ways to reach step 2

    for (let i = 3; i <= n; i++) {
        let current = first + second;
        first = second;
        second = current;
    }

    return second;  
};