/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function(root) {
    let maxLen = 0;

    const dfs = (node, direction, length) => {
        if (!node) return;

        maxLen = Math.max(maxLen, length);

        if (direction === "left") {
            dfs(node.right, "right", length + 1);
            dfs(node.left, "left", 1);
        } else {
            dfs(node.left, "left", length + 1);
            dfs(node.right, "right", 1);
        }
    };

    dfs(root.left, "left", 1);
    dfs(root.right, "right", 1);

    return maxLen;
};