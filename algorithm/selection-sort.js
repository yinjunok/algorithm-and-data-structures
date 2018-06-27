// 选择排序 每次从数组中选择出极值, 添加到结果数组中.

const { random } = require('./helper');

const selectionSort = (arr) => {
  let min, temp;
  let resultArr = [ ...arr ];
  
  for (let i = 0; i < resultArr.length - 1; ++i) {
    min = i;
    // 每次遍历都从数组剩余部分找出最小值索引
    for (let j = i + 1; j < resultArr.length; ++j) {
      if (resultArr[min] > resultArr[j]) {
        min = j;
      }
    }

    temp = resultArr[i];
    resultArr[i] = resultArr[min];
    resultArr[min] = temp;
  }

  return resultArr;
}

let test = selectionSort([7897897, 12, 23, 12, 42, 342, 786879078, 34, 234, 12, 234234, 234, 234, 1323]);
console.log(test);
