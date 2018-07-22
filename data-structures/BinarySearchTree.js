class Node {
  constructor(key, value) {
    this.left = null;
    this.right= null;
    this.key = key;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  /**
   * 插入过程：
   *  1. 比根节点大： 比较右子树， 直至没有子树
   *  2. 比根节点小： 比较左子树， 直至没有子树
   *  3. 树当中的值相等， 则用新值替换旧值
   */
  insert(key, value) {
    this.root = this._insert(this.root, key, value);
  }

  _insert(node, key, value) {
    if (node === null) {
      this.count++;
      return new Node(key, value);
    }

    if (key === node.key) {
      node.value = value;
    } else if (key < node.key) {
      node.left = this._insert(node.left, key, value);
    } else {
      node.right = this._insert(node.right, key, value);
    }

    return node;
  }

  contain(key) {
    return this._contain(this.root, key);
  }

  _contain(node, key) {
    if (node === null) return false;
    if (key === node.key) return true;

    if (key > node.key) {
      return this._contain(node.right, key);
    } else {
      return this._contain(node.left, key);
    }
  }

  search(key) {
    return this._search(this.root, key);
  }

  _search(node, key) {
    if (node === null) return null;
    if (node.key === key) return node.value;

    if (node.key > key) {
      return this._search(node.left, key);
    } else {
      return this._search(node.right, key);
    }
  }

  // 前序遍历
  preOrder() {
    this._preOrder(this.root);
  }

  _preOrder(node) {
    if (node !== null) {
      console.log(node.key);
      this._preOrder(node.left);
      this._preOrder(node.right);
    }
  }

  // 中序遍历
  inOrder() {
    this._inOrder(this.root);
  }

  _inOrder(node) {
    if (node !== null) {
      this._inOrder(node.left);
      console.log(node.key);
      this._inOrder(node.right);
    }
  }

  // 后序遍历
  postOrder() {
    this._postOrder(this.root);
  }

  _postOrder(node) {
    if (node !== null) {
      this._inOrder(node.left);
      this._inOrder(node.right);
      console.log(node.key);
    }
  }

  /**
   *  广度优先遍历。
   *  可以用队列来实现，把同一层级的节点送入一个队列中，逐一取出。
   *  如果有子节点，则推入队列当中，直至这个队列为空
   */
  levelOrder() {
    if (this.root === null) return null;
    
    const queue = [];
    queue.push(this.root);

    while(queue.length !== 0) {
      const node = queue.shift();
      console.log(node.key);
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
  }


  /**
   *  根据二分搜索树的特点， 如果一个节点没有左子树的时候， 这个节点保存的就是这棵树最小值，
   *  没有右子树的时候， 这个节点保存的就是这棵树最大值
  */

  // 查找最小值
  mini() {
    if (this.root === null) return null;

    return this._mini(this.root);
  }

  _mini(node) {
    if (node.left !== null) return this._mini(node.left);

    return node.key;
  }

  // 查找最小值
  max() {
    if (this.root === null) return null;

    return this._max(this.root);
  }

  _max(node) {
    if (node.right !== null) return this._max(node.right);

    return node.key;
  }

  removeMin() {
    if (this.root !== null) {
      this.root = this._removeMin(this.root);
    }
  }

  _removeMin(node) {
    if (node.left === null) {
      console.log(node.key);
      node = node.right;
      this.count--;
      return node;
    } 

    node.left = this._removeMin(node.left);
    return node;
  }

  removeMax() {
    if (this.root !== null) {
      this.root = this._removeMax(this.root);
    }
  }

  _removeMax(node) {
    if (node.right === null) {
      console.log(node.key);
      node = node.left;
      this.count--;
      return node;
    }

    node.right = this._removeMax(node.right);
    return node;
  }

  removeItem(key) {
    this.root = this._removeItem(this.root, key);
  }

  _removeItem(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this._removeItem(node.left, key);
    } else if (key > node.key) {
      node.right = this._removeItem(node.right, key);
    } else {
      if (node.left === null) {
        const right = node.right;
        node = null;
        this.count--;
        return right;
      }

      if (node.right === null) {
        const left = node.left;
        node = null;
        this.count--;
        return left;
      }

      const tempNode = node;
      const success = this._removeMin(node.right);
      success.right = this._removeMin(node.right);
      this.count++;
    }
  }
}

let demo = new BST(100, 100);
demo.insert(50, 'fadf');
demo.insert(200, 'afasdf');
demo.insert(25, 'afasdf');
demo.insert(75, 75);
demo.insert(150, 'afasdf');
demo.insert(250, 'afasdf');
demo.insert(2, 'afasdf');

// console.log(demo, demo.contain(2), demo.contain(3), demo.search(75));
// console.log(demo.inOrder());
// demo.levelOrder()
// console.log('最小值: ', demo.mini());
// console.log('最大值: ', demo.max());

// demo.removeMax();
// console.log(demo);
// demo.removeMax();
// console.log(demo);

// demo.removeMin();
// console.log(demo);

// demo.removeMin();
// console.log(demo);