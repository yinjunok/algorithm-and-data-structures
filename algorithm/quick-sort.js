// 快速排序, 分治算法的实践.
/**
 * 基准条件: 数组为空或长度为 1. [] | arr.length = 1
 * 递归条件: 数组不为空, 长度不为 1.
 * 
 * 步骤: 
 *   1. 从数组中找一个基准数.
 *   2. 比基准数小的放左边, 大的放右边. 
*/

const quickSort = (arr) => {
  if (arr.length < 2) return arr;

  const base = arr[0];
  const restArr = arr.slice(1);
  const left = [], right = [];

  for (let i = 0; i < restArr.length; ++i) {
    if (restArr[i] <= base) {
      left.push(restArr[i]);
    } else {
      right.push(restArr[i]);
    }
  }

  return [...quickSort(left), base, ...quickSort(right)]
};

console.log(quickSort([1, 2, 34, 2, 100, 5, 3, 51, 2, 3]));