// 冒泡排序

const { random } = require('./helper');

const bubbleSort = (arr) => { 
  console.log(arr);
  for (let i = 0, len = arr.length - 1; i < len; ++i) {
    for (j = 0; j < len - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(random(5)));