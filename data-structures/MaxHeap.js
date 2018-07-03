/**
 * 二叉堆（英语：binary heap）是一种特殊的堆，二叉堆是完全二叉树或者是近似完全二叉树。
 * 二叉堆满足堆特性：父节点的键值总是保持固定的序关系于任何一个子节点的键值，且每个节点的左子树和右子树都是一个二叉堆.
 * 当父节点的键值总是大于或等于任何一个子节点的键值时为最大堆。 当父节点的键值总是小于或等于任何一个子节点的键值时为最小堆。
 */

/**
 * 二叉堆可以用数组来实现. 主要是利用了二叉树的性质
 * 如果根节点的编号是 1, 逐渐向下进行编号, 那么
 * 左子叶编号为: 2n,
 * 右子叶编号为: 2n + 1.
*/

const { random } = require('../algorithm/helper');

class MaxHeap {
  constructor() {
    this._data = [];
    this._data[0] = null;
  }

  insert(ele) {
    this._data.push(ele);
    this._shiftUp(this._data.length - 1);
  }

  getItem() {
    if (this._data.length < 2) {
      return null;
    }
    const ele = this._data[1];
    this._shiftDown();
    return ele;
  }

  isEmpty() {
    return this._data.length === 1;
  }

  _shiftUp(i) {
    const { _data: data } = this;
    let temp;

    while(i > 1 && data[Math.floor(i / 2)] < data[i]) {
      temp = data[i];
      data[i] = data[Math.floor(i / 2)];
      data[Math.floor(i / 2)] = temp;
      i = Math.floor(i / 2);
    }
  }

  _shiftDown() {
    const { _data: data } = this;
    data[1] = data.pop();
    const len = data.length - 1;
    let i = 1; 
    let temp, j;

    while (2*i <= len) {
      j = 2 * i;
      if (j + 1 <= len && data[j + 1] > data[j]) {
        j += 1;
      }

      if (data[i] > data[j]) break;

      temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i = j;
    }
  }
}


let heap = new MaxHeap();

let arr = random(30);
arr.forEach(item => heap.insert(item));
console.log(heap);
for (let i = 0; i <= 30; ++i) {
  console.log(heap.getItem());
}