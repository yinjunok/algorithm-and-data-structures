const { random } = require('./helper');

const merge = (left, right) => {
  const result = [];
  // 对两个数组排序, 然后合并
  while(left.length > 0 && right.length > 0) {
    result.push(
      left[0] > right[0] ? right.shift() : left.shift()
    );
  }
  return [ ...result, ...left, ...right ];
}

const mergeSort = (arr) => {
  const len = arr.length;
  if (len < 2) {
    return arr;
  }
  
  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(
    mergeSort(left), 
    mergeSort(right),
  );
}

console.time('start');
mergeSort(random(100000));
console.timeEnd('start');

// console.log(mergeSort([1,23,23,12,41,41,24,124,2525,345,3,6,74,57,456]));