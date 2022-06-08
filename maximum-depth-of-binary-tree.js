/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
 1. The number of nodes in the tree is in the range [0, 104].
 2. -100 <= Node.val <= 100
*/
// solution
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
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    if (root.left && root.right) {
        const left = 1 + maxDepth(root.left);
        const right = 1 + maxDepth(root.right)
        return left > right ? left : right;
    } else if (root.left) {
        return 1 + maxDepth(root.left);
    } else if (root.right) {
        return 1 + maxDepth(root.right);
    }
    return 1;
};

// the best solution I liked
var maxDepth = function(root) {
    if(root === undefined || root===null){
        return 0;
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1;
};
