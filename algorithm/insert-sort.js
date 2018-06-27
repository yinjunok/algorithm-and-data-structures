/**
 * 插入排序. 跟摸牌很像.
 * 一次只摸一张牌, 每次摸牌的时候, 都会把牌按大小插入到相应位置.
*/

const { random } = require('./helper');

const insertSort = (arr) => {
  const result = [ ...arr ];

  for (let i = 1; i < result.length; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (result[j + 1] > result[j]) {
        break;
      } else {
        let temp = result[j + 1];
        result[j + 1] = result[j];
        result[j] = temp;
      }
    }
  }

  return result;
}

/*
  插入排序优化,
  交换元素这一步是比较消耗性能的,
  所以可以在每一趟开始的时候把要插入的元素复制一份出来.
  然后用复制出来的元素往前逐一比较, 没找到要插入位置的时候, 前一个元素覆盖后一个元素.
*/

const optimizationSort = (arr) => {
  const result = [ ...arr ];
  let ele, j;

  for (let i = 1; i < result.length; i++) {
    ele = result[i];

    for (j = i; j > 0; --j) {
      if (result[j - 1] < ele) break;
      result[j] = result[j - 1];
    }

    result[j] = ele;
  }

  return result;
}

const testCase = random(100000);

console.time('优化');
let arr2 = optimizationSort(testCase);
console.timeEnd('优化')

console.time('未优化');
const arr1 = insertSort(testCase);
console.timeEnd('未优化')
