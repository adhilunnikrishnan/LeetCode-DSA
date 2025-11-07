/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
      const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1); // first and last elements = 1

        for (let j = 1; j < i; j++) {
            // Each number is sum of two numbers from previous row
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
};