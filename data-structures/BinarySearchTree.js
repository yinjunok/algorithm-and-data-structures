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
}

let demo = new BST(100, 100);
demo.insert(50, 'fadf');
demo.insert(200, 'afasdf');
demo.insert(25, 'afasdf');
demo.insert(75, 'afasdf');
demo.insert(150, 'afasdf');
demo.insert(250, 'afasdf');
demo.insert(2, 'afasdf');

console.log(demo);