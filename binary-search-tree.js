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
    // initialize a queue with the root node
    const queue = [this.root];

    // while the queue is not empty
    while (queue.length > 0) {
      // print and remove first node in queue
      let node = queue.shift();
      console.log(node.val);

      // if the node has a left node
      // push the left node on the back of the queue
      if (node.left) queue.push(node.left);
      // if the node has a right node
      // push the right node on
      if (node.right) queue.push(node.right);
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // initialize a stack with the root node
    let stack = [this.root]

    // while the stack is not empty
    while (stack.length > 0) {

      // print and remove first node in stack
      let node = stack.pop();
      console.log(node.val);

      // if the node has a left node
      // push the left node on the back of the stack
      if (node.left) stack.push(node.left);

      // if the node has a right node
      // push the right node on the back of the stack
      if (node.right) stack.push(node.right);

    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
