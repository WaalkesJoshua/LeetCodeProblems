/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  public int maxDepth(TreeNode root) {
      //if the root is null, return 0
      if (root == null) {
          return 0;
      }

      //need to create left and right counters to compare which direction of any iteration goes deeper
      //set them equal to the recursive call of their respective nodes, root.left or root.right
      int left = maxDepth(root.left);
      int right = maxDepth(root.right);
      // and return the greater of the two plus 1 to account for current node
      return Math.max(left, right) + 1;
  }
}

// O: int representing the number of nodes to the "deepest" part of the tree
// I: root node
// C: root node may be null
// E: null root, return 0