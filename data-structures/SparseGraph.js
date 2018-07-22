// 稀疏图 -- 用邻接表实现

class SparsseGraph {
  constructor(n, directed) {
    this.n = n;
    this.m = 0;
    this.g = [];
    this.directed = directed;

    for (let i = 0; i < n; ++i) {
      this.g.push([]);
    }
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

    this.g[v].push(w);
    if (!this.directed) {
      this.g[w].push(v);
    }
    this.m++;
  }
  
  hasEdge(v, w) {
    return this.g[v].indexOf(w) !== -1;
  }
}

let demo = new SparsseGraph(4, false);
demo.addEdge(1, 2);
console.log(demo.hasEdge(1, 2))
console.log(demo);