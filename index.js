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

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(val) {
    this.root = this.#insertAt(val, this.root);
  }

  delete(val) {
    this.root = this.#deleteAt(val, this.root);
  }

  find(val, node = this.root) {
    if (node === null) return node;
    if (node.data === val) return node;
    return this.find(val, node.left) || this.find(val, node.right);
  }

  levelOrder(func, queue = [this.root]) {
    // Recursive approach
    if (!queue.length) return;

    const readyNode = queue.shift();
    if (readyNode === this.root) this.#noFuncArray = [];
    
    // Run callback on node if callback is provided, else push node to an array
    func ? func(readyNode) : this.#noFuncArray.push(readyNode.data);

    if (readyNode.left !== null) queue.push(readyNode.left);
    if (readyNode.right !== null) queue.push(readyNode.right);

    this.levelOrder(func, queue);

    // Iterative approach
    // const queue = [this.root];
    // while (queue.length) {
    //   const node = queue.shift();
    //   if (node === this.root) this.#noFuncArray = [];
    //   func ? func(readyNode) : this.#noFuncArray.push(readyNode.data);
    //   if (node.left !== null) queue.push(node.left);
    //   if (node.right !== null) queue.push(node.right);
    // }

    if (this.#noFuncArray.length) return this.#noFuncArray;
  }

  inorder(func, node = this.root) {
    if (node === null) return;
    if (node === this.root) this.#noFuncArray = [];

    this.inorder(func, node.left);
    func ? func(node) : this.#noFuncArray.push(node.data);
    this.inorder(func, node.right);

    if (this.#noFuncArray.length) return this.#noFuncArray;
  }

  preorder(func, node = this.root) {
    if (node === null) return;
    if (node === this.root) this.#noFuncArray = [];

    func ? func(node) : this.#noFuncArray.push(node.data);
    this.preorder(func, node.left);
    this.preorder(func, node.right);

    if (this.#noFuncArray.length) return this.#noFuncArray;
  }

  postorder(func, node = this.root) {
    if (node === null) return;
    if (node === this.root) this.#noFuncArray = [];

    this.postorder(func, node.left);
    this.postorder(func, node.right);
    func ? func(node) : this.#noFuncArray.push(node.data);

    if (this.#noFuncArray.length) return this.#noFuncArray;
  }

  height(node = this.root) {
    if (node === null) return 0;

    let leftHeight = 1, rightHeight = 1;

    leftHeight += this.height(node.left);
    rightHeight += this.height(node.right);

    return (leftHeight < rightHeight) ? rightHeight : leftHeight;
  }

  depth(node, currNode = this.root, currDepth = 0) {
    // Depth counting from the root depth, 0
    if (currNode === null) return;
    if (node === currNode) return currDepth;

    currDepth++;
    return this.depth(node, currNode.left, currDepth) || this.depth(node, currNode.right, currDepth);
  }

  isBalanced() {
    return;
  }

  rebalance() {
    return;
  }

  // Helper functions & variables
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
  #deleteAt(val, node) {
    if (node === null) return node;

    if (node.data > val) {
      node.left = this.#deleteAt(val, node.left);
      return node;
    } else if (node.data < val) {
      node.right = this.#deleteAt(val, node.right);
      return node;
    }

    // If one child is null
    if (node.left === null) {
      const tmpNode = node.right;
      node = null;
      return tmpNode;
    } else if (node.right === null) {
      const tmpNode = node.left;
      node = null;
      return tmpNode;
    } else {
      // If node has both children
      let parentNode = node;
      let parentRight = node.right;

      while (parentRight.left !== null) {
        parentNode = parentRight;
        parentRight = parentRight.left;
      }

      if (parentNode !== node) {
        parentNode.left = parentRight.right;
      } else {
        parentNode.right = parentRight.right;
      }

      node.data = parentRight.data;
      return node;
    }
  }
  #noFuncArray = [];
}

// Tests
const tree = new Tree([15, 16, 17, 14, 13, 12, 11, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
tree.prettyPrint();
console.log(tree.depth(tree.find(14)));
