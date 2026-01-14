/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
        let n = costs.length;
    let l = 0, r = n - 1;
    let total = 0;

    let leftHeap = [];
    let rightHeap = [];

    const push = (heap, val) => {
        heap.push(val);
        heap.sort((a, b) => a - b);
    };

    for (let i = 0; i < candidates && l <= r; i++) {
        push(leftHeap, costs[l++]);
    }
    for (let i = 0; i < candidates && l <= r; i++) {
        push(rightHeap, costs[r--]);
    }

    for (let i = 0; i < k; i++) {
        let leftMin = leftHeap.length ? leftHeap[0] : Infinity;
        let rightMin = rightHeap.length ? rightHeap[0] : Infinity;

        if (leftMin <= rightMin) {
            total += leftHeap.shift();
            if (l <= r) push(leftHeap, costs[l++]);
        } else {
            total += rightHeap.shift();
            if (l <= r) push(rightHeap, costs[r--]);
        }
    }

    return total;
};