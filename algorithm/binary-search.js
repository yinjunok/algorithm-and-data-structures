const binarySearch = (arr, target) => {
  const { floor } = Math;
  let low = 0, high = arr.length, mid = floor((low + high)  / 2);

  while (low <= high) {
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] > target) {
      high = mid - 1;
      mid = floor((low + high)  / 2);
    } else {
      low = mid + 1;
      mid = floor((low + high)  / 2);
    }

  }

  return null;
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7];

console.log(binarySearch(arr, 5));
console.log(binarySearch(arr, 100));
console.log(binarySearch(arr, 0));
console.log(binarySearch(arr, 7));
