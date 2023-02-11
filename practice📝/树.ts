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
  minNode(root: TreeNode | null) {
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
    // 判断进入左还是右子树
    if (root.val > val) {
      root.right = this.removeNode(root.left, val);
    } else if (root.val < val) {
      root.left = this.removeNode(root.right, val);
    } else {
      // 没有叶子节点，直接移除该树节点
      if (root.left === null && root.right === null) return (root = null);
      // 只有左或右子树，则赋反
      if (root.left === null) {
        root = root.right;
      } else if (root.right === null) {
        root = root.left;
      } else {
        // 移除拥有完整节点的根叶子节点
        // 找到右子树的最小节点作为新的根节点
        const aux = this.minNode(root.right)!;
        root.val = aux.val;
        root.right = this.removeNode(root.right, aux.val);
      }
    }
    return root;
  }
}

const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};
// 自平衡树 AVL
class AVLTree extends BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    super();
  }
  maxDepth(node: TreeNode | null) {
    if (node === null) return 0;
    // const queue = [node];
    // let depth = 0;
    // while (queue.length) {
    //   const n = queue.shift();
    //   let size = queue.length;
    //   for (let i = 0; i < size; i++) {
    //     n?.left && queue.push(n.left);
    //     n?.right && queue.push(n.right);
    //   }
    //   depth++;
    // }
    // return depth;
    return Math.max(this.maxDepth(node.left) + this.maxDepth(node.right)) + 1;
  }
  getBalanceFactor(node: TreeNode | null) {
    if (node === null) return;
    const heightDiff = this.maxDepth(node.left) - this.maxDepth(node.right);
    switch (heightDiff) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.UNBALANCED_LEFT;
      case 1:
        return BalanceFactor.SLIGHTY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.SLIGHTY_UNBALANCED_RIGHT;
      default:
        return BalanceFactor.BALANCED;
    }
  }
  // 右旋转
  rotationLL(node: TreeNode) {
    const tmp = node.left!;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }
  // 左旋转
  rotationRR(node: TreeNode) {
    const tmp = node.right!;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }
  // 左再右旋转
  rotationRL(node: TreeNode | null) {
    if (node === null) return null;
    node.right = this.rotationLL(node);
    return this.rotationRR(node);
  }
  // 右再左旋转
  rotationLR(node: TreeNode | null) {
    if (node === null) return null;
    node.left = this.rotationRR(node);
    return this.rotationLL(node);
  }
  insert(val: number): void {
    this.root = this.insertNode(this.root, val);
  }
  insertNode(root: TreeNode | null, val: number) {
    if (root === null) return new TreeNode(val);
    if (root.val > val) {
      root.left = this.insertNode(root.left, val);
    } else if (root.val < val) {
      root.right = this.insertNode(root.right, val);
    } else {
      return root;
    }
    const balanceFactor = this.getBalanceFactor(root);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (val < root.left!.val) {
        root = this.rotationLL(root);
      } else {
        return this.rotationLR(root);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (val < root.right!.val) {
        root = this.rotationRR(root);
      } else {
        return this.rotationRL(root);
      }
    }
    return root;
  }
  removeNode(root: TreeNode | null, val: number) {
    root = super.removeNode(root, val);
    if (root === null) return root;
    const balanceFactor = this.getBalanceFactor(root);
    if (
      balanceFactor === BalanceFactor.BALANCED ||
      balanceFactor === BalanceFactor.SLIGHTY_UNBALANCED_LEFT
    ) {
      return this.rotationLL(root);
    }
    if (balanceFactor === BalanceFactor.SLIGHTY_UNBALANCED_RIGHT) {
      return this.rotationLR(root.left);
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(root.right);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(root);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTY_UNBALANCED_LEFT) {
        return this.rotationRL(root.right);
      }
    }
    return root;
  }
}

const Colors = {
  RED: 'red',
  BLACK: 'black',
};
// !红黑树
class RedBlackTreeNode {
  val: number;
  color: string;
  left: RedBlackTreeNode | null;
  right: RedBlackTreeNode | null;
  parent: RedBlackTreeNode | null;
  constructor(val: number) {
    this.val = val;
    this.color = Colors.RED;
  }
  isRed() {
    return (this.color = Colors.RED);
  }
}
class RedBlackTree extends AVLTree {
  root: RedBlackTreeNode | null;
  constructor() {
    super();
  }
  insert(val: number): void {
    if (this.root === null) {
      this.root = new RedBlackTreeNode(val);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, val);
      this.fixTreeProps(newNode);
    }
  }
  insertNode(node: RedBlackTreeNode, val: number) {
    if (node.val > val) {
      node.left = this.insertNode(node.left!, val);
      if (node.left === null) {
        node.left = this.insertNode(node.left!, val);
        node.left!.parent = node;
        return node.left;
      } else {
        return this.insertNode(node.left, val);
      }
    }
    if (node.val < val) {
      if (node.right === null) {
        node.right = new RedBlackTreeNode(val);
        node.right.parent = node;
        return node.right;
      } else {
        return this.insertNode(node.right, val);
      }
    }
  }
  fixTreeProps(node: RedBlackTreeNode | null) {
    while (node && node.parent && node.parent.isRed() && node.color !== Colors.BLACK) {
      let { parent } = node;
      const grandParent = node.parent.parent;
      // 情况A：父节点是左侧子节点
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;
        // 情况A1：叔节点也是红色，只需重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情况A2：节点是右侧子节点 —— 左旋转
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent!;
          }
          // 情况A3：节点是左侧子节点 —— 右旋转
          if (node === parent.left) {
            this.rotationLL(grandParent);
            parent.color = Colors.BLACK;
            node = parent;
          }
        }
      } else {
        // 情况B：父节点是右侧子节点
        const uncle = grandParent?.left;
        // 情况B1：叔节点是红色 —— 重新填色
        if (uncle && uncle.color === Colors.RED) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // 情况B2：节点是左侧子节点 —— 右旋转
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent!;
          }
          // 情况B3：节点是右侧子节点 —— 左旋转
          if (node === parent.right) {
            this.rotationRR(grandParent!);
            parent.color = Colors.RED;
            grandParent!.color = Colors.RED;
            node = parent;
          }
        }
      }
    }
    this.root!.color = Colors.BLACK;
  }
  // @ts-ignore
  rotationLL(node: RedBlackTreeNode) {
    const tmp = node.left!;
    node.left = tmp.right;
    if (tmp.right && tmp.right.val) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;
  }
  // @ts-ignore
  rotationRR(node: RedBlackTreeNode) {
    const tmp = node.right!;
    node.right = tmp.left;
    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;
  }
}
