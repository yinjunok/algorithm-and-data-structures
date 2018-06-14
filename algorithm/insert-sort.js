/**
 * 插入排序. 跟摸牌很像.
 * 一次只摸一张牌, 每次摸牌的时候, 都会把牌按大小插入到相应位置.
*/

const { random } = require('./helper');

const insertSort = (arr) => {
  console.log(arr);
  for (let i = 1; i < arr.length; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      if (arr[j + 1] > arr[j]) {
        break;
      } else {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log(arr);
}

let test = insertSort(random(5));
