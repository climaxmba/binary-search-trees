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

  find(val) {
    return this.#findAt(val, this.root);
  }

  levelOrder(func) {
    // If no callback function is provided
    if (func === undefined) return this.#noFuncLevelOrder();

    // Recursive approach
    this.#levelOrderAt(func);

    // Iterative approach
    // const queue = [this.root];

    // while (queue.length) {
    //   const node = queue.shift();
    //   func(node);
    //   if (node.left !== null) queue.push(node.left);
    //   if (node.right !== null) queue.push(node.right);
    // }
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
  #findAt(val, node) {
    if (node === null) return node;
    if (node.data === val) return node;

    return this.#findAt(val, node.left) || this.#findAt(val, node.right);
  }
  #levelOrderAt(func, queue = [this.root]) {
    if (!queue.length) return;

    const readyNode = queue.shift();
    func(readyNode);

    if (readyNode.left !== null) queue.push(readyNode.left);
    if (readyNode.right !== null) queue.push(readyNode.right);

    this.#levelOrderAt(func, queue);
  }
  #noFuncLevelOrder(queue = [this.root], arr = []) {
    if (!queue.length) return arr;
    
    const readyNode = queue.shift();
    arr.push(readyNode.data);

    if (readyNode.left !== null) queue.push(readyNode.left);
    if (readyNode.right !== null) queue.push(readyNode.right);

    return this.#noFuncLevelOrder(queue, arr);
  }
}

// Test
const tree = new Tree([9, 8, 7, 6, 5, 4, 3]);
tree.prettyPrint();
console.log(tree.levelOrder());
