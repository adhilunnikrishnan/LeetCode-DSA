/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const pairs = nums1.map((n, i) => [nums2[i], n]);
    pairs.sort((a, b) => b[0] - a[0]);

    const heap = [];
    let sum = 0;
    let maxScore = 0;

    const push = (val) => {
        heap.push(val);
        let idx = heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (heap[idx] >= heap[parentIdx]) break;
            [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]];
            idx = parentIdx;
        }
    };

    const pop = () => {
        if (heap.length === 1) return heap.pop();
        const min = heap[0];
        heap[0] = heap.pop();
        
        // Bubble down
        let idx = 0;
        while (true) {
            let smallest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;

            if (left < heap.length && heap[left] < heap[smallest]) {
                smallest = left;
            }
            if (right < heap.length && heap[right] < heap[smallest]) {
                smallest = right;
            }
            if (smallest === idx) break;

            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
            idx = smallest;
        }
        return min;
    };

    for (const [minVal, num] of pairs) {
        push(num);
        sum += num;

        if (heap.length > k) {
            sum -= pop();
        }

        if (heap.length === k) {
            maxScore = Math.max(maxScore, sum * minVal);
        }
    }

    return maxScore;
};