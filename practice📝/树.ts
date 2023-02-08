/*
 * 创建二叉树
 * 树的遍历
 * 添加和移除节点
 * AVL 树
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val: number, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// !二叉搜索树
class BinarySearchTree {
  root: TreeNode | null;
  insert(val: number) {
    if (this.root === null) {
      this.root = new TreeNode(val);
    } else {
      this.insertNode(this.root, val);
    }
  }
  insertNode(root: TreeNode, val: number) {
    // 大右小左
    if (root.val > val) {
      // 左子树为空
      if (root.left === null) {
        root.left = new TreeNode(val);
      } else {
        this.insertNode(root.left, val);
      }
    } else {
      // 右子树为空
      if (root.right === null) {
        root.right = new TreeNode(val);
      } else {
        this.insertNode(root.right, val);
      }
    }
  }
  search(val: number) {
    if (this.root === null) return false;
    // 大右小左
    const dfs = (root: TreeNode | null) => {
      if (!root) return false;
      if (root.val === val) {
        return true;
      }
      return dfs(root.val > val ? root.right : root.left);
    };
    return dfs(this.root);
  }
  // 中序遍历
  inOrderTraverse(): number[] {
    const res: number[] = [];
    const dfs = (root: TreeNode | null) => {
      if (root === null) return null;
      dfs(root.left);
      res.push(root.val);
      dfs(root.right);
    };
    dfs(this.root);
    return res;
  }
  // 前序遍历
  preOrderTraverse() {
    const res: number[] = [];
    const dfs = (root: TreeNode | null) => {
      if (root === null) return null;
      res.push(root.val);
      dfs(root.left);
      dfs(root.right);
    };
    dfs(this.root);
    return res;
  }
  // 后序遍历
  postOrderTraverse() {
    const res: number[] = [];
    const dfs = (root: TreeNode | null) => {
      if (root === null) return null;
      dfs(root.left);
      dfs(root.right);
      res.push(root.val);
    };
    dfs(this.root);
    return res;
  }
  min(): TreeNode | null {
    if (!this.root) return null;
    // 到左子树找
    return this.minNode(this.root.left);
  }
  minNode(root: TreeNode) {
    if (!root) return null;
    let cur = root;
    while (cur !== null && cur.left !== null) {
      cur = cur.left;
    }
    return cur;
  }
  max(): TreeNode | null {
    if (!this.root) return null;
    // 到右子树找
    let cur = this.root;
    while (cur !== null && cur.right !== null) {
      cur = cur.right;
    }
    return cur;
  }
  remove(val: number) {
    if (this.root === null) return null;
    this.root = this.removeNode(this.root, val);
  }
  removeNode(root: TreeNode | null, val: number) {
    if (root === null) return null;
    if (root.val > val) {
      root = this.removeNode(root.right, val);
      return root;
    } else if (root.val < val) {
      root = this.removeNode(root.left, val);
      return root;
    } else {
      // 1.没有左右节点的独节点
      if (root.left === null && root.right === null) {
        root = null;
        return root;
      }
      // 2.没有左节点或右节点要变换方向
      if (root.left === null) {
        root = root.right;
        return root;
      } else if (root.right === null) {
        root = root.left;
        return root;
      }
      // 3.移除有两个子节点的节点
      const aux = this.minNode(root.right);
      root.val = aux?.val ?? 0;
      root.right = this.removeNode(root.right, aux?.val ?? 0);
      return root;
    }
  }
}
