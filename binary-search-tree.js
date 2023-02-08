// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    // Your code here
    if (!currentNode) {
      this.root = new TreeNode(val);
      return;
    }

    if(val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    }
    
    if (val > currentNode.val) {
      if(!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }
  }

  search(val, currentNode=this.root) {
    // Your code here
    if (!currentNode) return false;

    if (currentNode.val === val) return true;

    if (val < currentNode.val) return this.search(val, currentNode.left);

    if (val > currentNode.val) return this.search(val, currentNode.right);

    return false;
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
    console.log(currentNode.val);

    if (currentNode.left) {
      this.preOrderTraversal(currentNode.left);
    } 

    if (currentNode.right) {
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode.left) {
      this.inOrderTraversal(currentNode.left);
    }

    console.log(currentNode.val);

    if (currentNode.right) {
      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode.left) {
      this.postOrderTraversal(currentNode.left);
    }

    if (currentNode.right) {
      this.postOrderTraversal(currentNode.right);
    }

    console.log(currentNode.val);
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
