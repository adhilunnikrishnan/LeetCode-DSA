/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
        const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const res1 = [...set1].filter(x => !set2.has(x));
    const res2 = [...set2].filter(x => !set1.has(x));

    return [res1, res2];

};