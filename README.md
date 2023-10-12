# Binary Search Trees

**Project: Binary Search Trees** from The Odin Project's [curriculum](https://www.theodinproject.com/lessons/javascript-binary-search-trees) using JavaScript classes.

## 📱 View demo

To see a demo, clone this repository and run the commands below in your terminal, make sure you have __NodeJS__ and __NPM__ installed.

```bash
npm install && npm run exec
```
__Note__: Modules are implemented in CommonJS syntax for compatability.

## 🖇 Data structure
```javascript
// Data structure of a binary search tree:
// │       ┌── [ NODE(leaf) ]
// │   ┌── [ NODE ]
// │   │   └── [ NODE(leaf) ]
// └── [ NODE(root) ]
//     │   ┌── [ NODE(leaf) ]
//     └── [ NODE ]
//         └── [ NODE ]
//             └── [ NODE(leaf) ]

// JavaScript implementation
{
    value: "NODE(root)",
    left: {
        value: "NODE",
        left: {
            value: "NODE",
            left: {
                value: "NODE(leaf)",
                left: null,
                right: null,
            }
            right: {
                value: "NODE(leaf)",
                left: null,
                right: null,
            }
        }
    },
    right: {
        value: "NODE",
        left: {
            value: "NODE",
            left: {
                value: "NODE(leaf)",
                left: null,
                right: null,
            }
            right: {
                value: "NODE",
                left: null,
                right: {
                    value: "NODE(leaf)",
                    left: null,
                    right: null
                }
            }
        }
    }
}
```

## 📃 Class methods

Here is a list of _methods_ available in the `Tree` class.

1. `insert`.
2. `delete`.
7. `find`.
3. `levelOrder`.
4. `preorder`.
5. `inorder`.
6. `postorder`.
8. `height`.
9. `depth`.
10. `isBalanced`.
11. `reBalance`.
12. `prettyPrint` _- gotten from The Odin Project_.

## 📚 Lessons learnt

- Binary Search Tree data structure & algorithms for tree traversal.
- Inserting & deleting algorithms for binary search trees.

## 🛠 Tools & technologies

- NodeJS & Nodemon with NPM.
- JavaScript Debug Terminal.
