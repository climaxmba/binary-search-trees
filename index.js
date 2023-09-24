const Tree = require("./Tree");

// Tests
const tree = new Tree([9, 8, 7, 6, 5, 4, 3, 2, 1]);
tree.prettyPrint();
console.log(tree.isBalanced());
