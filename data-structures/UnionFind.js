// 并查集

/**
 * 用数组来表示并查集
 * 索引: 0 1 2 3 4 
 * 值:  0 0 0 1 1
 * 值相等表示节点相互连接
 */
class UnionFind {
  constructor(n) {
    this.parent = [];
    for (let i = 0; i < n; ++i) {
      this.parent[i] = i;
    }
  }

  find(p) {
    while (p !== this.parent[p]) {
      p = this.parent[temp];
    }

    return p;
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  unionElements(p, q) {
    const pRoot = this.find(p);
    const qRoot = this.find(q);

    if (pRoot !== qRoot) {
      this.parent[pRoot] = qRoot;
    }
  }
}

let demo = new UnionFind(10);
console.log(demo.find(3));
demo.unionElements(2, 3);
console.log(demo.parent)