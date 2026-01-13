/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const heap = [];

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
        
        let idx = 0;
        const len = heap.length;
        while (true) {
            let smallest = idx;
            const left = 2 * idx + 1;
            const right = 2 * idx + 2;

            if (left < len && heap[left] < heap[smallest]) smallest = left;
            if (right < len && heap[right] < heap[smallest]) smallest = right;
            if (smallest === idx) break;

            [heap[idx], heap[smallest]] = [heap[smallest], heap[idx]];
            idx = smallest;
        }
        return min;
    };

    for (const num of nums) {
        if (heap.length < k) {
            push(num);
        } else if (num > heap[0]) {
            pop();
            push(num);
        }
    }

    return heap[0];
};