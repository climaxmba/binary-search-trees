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

    const mid = parseInt(arr.length/2);
    const root = new Node(arr[mid]);

    root.left = this.buildTree(arr.slice(0, mid));
    root.right = this.buildTree(arr.slice(mid + 1));

    return root;
  }
}

// Test
console.log(new Tree([4, 5, 6, 2, 7, 7, 2]))