class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  root = null;

  constructor(arr = []) {
    this.root = this.buildTree(arr);
  }

  buildTree(arr) {
    if (!arr.length) return null;
    // Sort and remove duplicates
    arr = arr.sort().filter((val, i, self) => self.indexOf(val) === i);

    const mid = parseInt(arr.length / 2);
    const root = new Node(arr[mid]);

    root.left = this.buildTree(arr.slice(0, mid));
    root.right = this.buildTree(arr.slice(mid + 1));

    return root;
  }

  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };

  insert(val) {
    this.root = this.#insertAt(val, this.root);
  }

  delete(val) {
    return;
  }

  find() {
    return;
  }

  levelOrder() {
    return;
  }
  
  inOrder() {
    return;
  }

  preOrder() {
    return;
  }

  postOrder() {
    return;
  }

  height() {
    return;
  }

  depth() {
    return;
  }

  isBalanced() {
    return;
  }

  rebalance() {
    return;
  }

  // Helper functions
  #insertAt(val, node) {
    if (node === null) {
      node = new Node(val);
    } else if (val < node.data) {
      node.left = this.#insertAt(val, node.left);
    } else if (val > node.data) {
      node.right = this.#insertAt(val, node.right);
    }

    return node;
  }
}

// Test
const tree = new Tree([10, 9, 8, 7, 6, 5, 4, 3]);
tree.insert(2);
tree.insert(12);
tree.insert(11);
tree.prettyPrint();
