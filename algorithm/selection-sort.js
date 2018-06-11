// 选择排序 从

const selectionSort = (arr) => {
  let min, temp;
  let resultArr = [ ...arr ];
  
  for (let i = 0; i < resultArr.length - 1; ++i) {
    min = i;
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

let test = selectionSort(randomGenerator(10));
console.log(test);
