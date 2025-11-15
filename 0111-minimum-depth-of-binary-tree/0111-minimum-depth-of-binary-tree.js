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
var minDepth = function(root) {
      if (!root) return 0;

    if (!root.left && !root.right) return 1;

    let left = root.left ? minDepth(root.left) : Infinity;
    let right = root.right ? minDepth(root.right) : Infinity;

    return 1 + Math.min(left, right);
};