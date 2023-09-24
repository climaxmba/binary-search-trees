const Tree = require("./Tree");

function randomArray(length = 10) {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }

  return arr;
}

// Tests
const tree = new Tree(randomArray());
console.log("[tree.isBalanced]", tree.isBalanced());
console.log("");

console.log("[tree.levelOrder]", tree.levelOrder());
console.log("");

console.log("[tree.preorder]", tree.preorder());
console.log("");

console.log("[tree.inorder]", tree.inorder());
console.log("");

console.log("[tree.postorder]", tree.postorder());
console.log("");

console.log("Inserting values > 100...");
tree.insert(101);
tree.insert(102);
tree.insert(103);
console.log("");

console.log("[tree.isBalanced]", tree.isBalanced());
console.log("");

console.log("Rebalancing tree...");
tree.rebalance();
console.log("");

console.log("[tree.isBalanced]", tree.isBalanced());
console.log("");

console.log("[tree.levelOrder]", tree.levelOrder());
console.log("");

console.log("[tree.preorder]", tree.preorder());
console.log("");

console.log("[tree.inorder]", tree.inorder());
