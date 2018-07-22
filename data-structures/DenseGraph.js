// 稠密图 -- 邻接矩阵实现
class DenseGraph {
  constructor(n, directed) {
    this.directed = directed;
    this.n = n;   // 多少个定点
    this.m = 0;   // 多少条边
    this.g = [];  // 邻接矩阵

    for (let i = 0; i < n; ++i) {
      this.g.push(this._gFill(false, n));
    }
  }

  _gFill(val, n) {
    const arr = [];
    for (let i = 0; i < n; ++i) {
      arr.push(val);
    }

    return arr;
  }

  V() {
    return this.n;
  }

  E() {
    return this.m;
  }

  addEdge(v, w) {
    if (this.hasEdge(v, w)) {
      return;
    }

    this.g[v][w] = true;
    if (!this.directed) {
      this.g[w][v] = true;
    }
    this.m++;
  }

  hasEdge(v, w) {
    return this.g[v][w];
  }
}

let demo = new DenseGraph(4, false);
demo.addEdge(2, 3);
console.log(demo);