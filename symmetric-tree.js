// Description:
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Constraints:
// * The number of nodes in the tree is in the range [1, 1000].
// * -100 <= Node.val <= 100
// Example 1: Input: root = [1,2,2,3,4,4,3]; Output: true
// Example 2: Input: root = [1,2,2,null,3,null,3]; Output: false


// Solution with TreeNode object
/* Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root.left && !root.right) {
        return true;
    }
    return compare(root.left, root.right);
    
    function compare(leaf1, leaf2) {
        if (leaf1 && leaf2) {
            if (leaf1.val === leaf2.val) {
                return compare(leaf1.left, leaf2.right) && compare(leaf1.right, leaf2.left);
            }
            return false;
        } else {
            if (!leaf1 && !leaf2) {
                return true;
            }
            return false;
        }
    }
};


// Solution if array is passed
var isSymmetric = function(root) {
    if (root.length === 1) { return true; }
    const levels = Math.log2(root.length);
    let level = 1, result = true, start, end;
    while ((level <= levels) && result) {
        start = Math.pow(2, level) - 1;
        end = start*2;
        result = check(start, end);
        level++;
    }
    return result;
    
    
    function check(pos1, pos2) {
        if (pos1 > pos2) { return true; }
        if (root[pos1] === root[pos2]) {
            return check(pos1 + 1, pos2 - 1);
        } else {
            return false;
        }
    }
};
